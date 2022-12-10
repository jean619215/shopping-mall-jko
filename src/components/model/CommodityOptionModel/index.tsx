import { useReducer } from "react";
import { Minus, Plus, X } from "react-feather";

import { HighlightButton, IconButton } from "../../../elements/Button";
import {
  ICommodityInventory,
  ICommodityRes,
  ISpecification,
} from "../../../hooks/useCommodityStatus";
import Typography from "../../Typography";
import {
  AmountBarText,
  AmountButton,
  BackgroundMask,
  CommodityDetailModelStyled,
  CommodityDetailPanel,
  OptionButton,
  OptionImage,
  OptionListRow,
  OptionListSection,
  OptionModalAmountBar,
  OptionModalAmountRow,
  OptionModalHeader,
  OptionModalHeaderText,
  OptionModalNavigation,
} from "./styled";
import { formatMoneyAmount } from "../../../lib/utils/tools";
import Header from "../../Header";
import { Wrapper } from "../../Wrapper";
import Navigation from "../../Navigation";

export enum OPTION_STATUS {
  SELECTED = "SELECTED",
  ENABLE = "ENABLE",
  DISABLE = "DISABLE",
}

enum ACTION_TYPE {
  ADD_AMOUNT,
  REDUCE_AMOUNT,
  SELECT_OPTION,
}

interface ICommodityState {
  optionsStatus: IOptionStatus;
  inventory: ICommodityInventory[];
  seletedOptionTitle: string[];
  maxAmount: number;
  userSeletedAmount: number;
  price: number | undefined;
}

interface IOptionStatus {
  [key: string]: {
    [key: string]: OPTION_STATUS;
  };
}

interface ICommodityAction {
  type: ACTION_TYPE;
  option?: string;
  optionTitle?: string;
}

/**
 * @returns {
 * [key: string]: {
 *   [key: string]: OPTION_STATUS;
 *  };
 * }
 *  {
 *    Size:{
 *      'S': ENABLE,
 *      'M': ENABLE
 *    }
 * }
 *
 */
function initCommodityOption(commodityInfo: ICommodityRes): {
  [key: string]: {
    [key: string]: OPTION_STATUS;
  };
} {
  let options: {
    [key: string]: {
      [key: string]: OPTION_STATUS;
    };
  } = {};

  for (let i = 0; i < commodityInfo.inventory.length; i++) {
    const specification = commodityInfo.inventory[i].specification;
    Object.keys(specification).map((key) => {
      if (!options[key]) {
        options[key] = {};
        options[key][specification[key]] = OPTION_STATUS.ENABLE;
      } else {
        if (!Object.keys(options[key]).includes(specification[key])) {
          options[key][specification[key]] = OPTION_STATUS.ENABLE;
        }
      }
    });
  }

  return options;
}

function reducer(state: ICommodityState, action: ICommodityAction) {
  let newState = { ...state };
  const { optionTitle, option, type } = action;

  function filterInventory(
    inventory: ICommodityInventory[]
  ): ICommodityInventory[] {
    return inventory.filter((obj) => {
      for (let index = 0; index < newState.seletedOptionTitle.length; index++) {
        const title = newState.seletedOptionTitle[index];
        const optionKey = obj.specification[title];
        if (
          newState.optionsStatus[title][optionKey] === OPTION_STATUS.DISABLE
        ) {
          return false;
        }
      }

      return true;
    });
  }

  function updateOptionStatus(
    optionsStatus: IOptionStatus,
    newInventory: ICommodityInventory[]
  ): IOptionStatus {
    let newStatus: IOptionStatus = { ...optionsStatus };
    let updateQueueTitle: string[] = [];
    Object.keys(newState.optionsStatus).map((key) => {
      if (!newState.seletedOptionTitle.includes(key)) {
        updateQueueTitle.push(key);
      }
    });

    for (let i = 0; i < updateQueueTitle.length; i++) {
      const title = updateQueueTitle[i];

      // init
      Object.keys(newStatus[title]).map((key) => {
        newStatus[title][key] = OPTION_STATUS.DISABLE;

        if (
          newInventory.find((obj) => obj.specification[title] === key) !==
          undefined
        ) {
          newStatus[title][key] = OPTION_STATUS.ENABLE;
        }
      });
    }

    return newStatus;
  }

  function updateState(
    newState: ICommodityState,
    newInventory: ICommodityInventory[]
  ): ICommodityState {
    if (newInventory.length === 1) {
      newState.price = newInventory[0].price;
      newState.maxAmount = newInventory[0].amount;
    } else {
      newState.price = undefined;
      newState.maxAmount = 0;
    }

    newState.userSeletedAmount = 0;

    return newState;
  }

  // user set amount
  if (
    type === ACTION_TYPE.ADD_AMOUNT &&
    newState.maxAmount > 0 &&
    newState.userSeletedAmount < newState.maxAmount
  ) {
    newState.userSeletedAmount++;
    return newState;
  } else if (
    type === ACTION_TYPE.REDUCE_AMOUNT &&
    newState.maxAmount > 0 &&
    newState.userSeletedAmount > 0
  ) {
    newState.userSeletedAmount--;
    return newState;
  } else if (type === ACTION_TYPE.SELECT_OPTION && optionTitle && option) {
    // if slect enable option
    if (newState.optionsStatus[optionTitle][option] === OPTION_STATUS.ENABLE) {
      Object.keys(newState.optionsStatus[optionTitle]).map((key) => {
        newState.optionsStatus[optionTitle][key] = OPTION_STATUS.DISABLE;
      });
      newState.optionsStatus[optionTitle][option] = OPTION_STATUS.SELECTED;
      newState.seletedOptionTitle.push(optionTitle);

      // filter eligible option
      let newInventory: ICommodityInventory[] = filterInventory(
        newState.inventory
      );

      //update other option status
      let newStatus: IOptionStatus = updateOptionStatus(
        newState.optionsStatus,
        newInventory
      );
      newState.optionsStatus = newStatus;

      newState = updateState(newState, newInventory);

      return newState;
    } else if (
      newState.optionsStatus[optionTitle][option] === OPTION_STATUS.SELECTED
    ) {
      Object.keys(newState.optionsStatus[optionTitle]).map((key) => {
        newState.optionsStatus[optionTitle][key] = OPTION_STATUS.ENABLE;
      });

      newState.seletedOptionTitle = newState.seletedOptionTitle.filter(
        (title) => title !== optionTitle
      );

      // filter eligible option
      let newInventory: ICommodityInventory[] = filterInventory(
        newState.inventory
      );

      //update other option status
      let newStatus: IOptionStatus = updateOptionStatus(
        newState.optionsStatus,
        newInventory
      );
      newState.optionsStatus = newStatus;

      newState = updateState(newState, newInventory);
      return newState;
    }
  }

  return state;
}

const CommodityOptionModel = ({
  commodityInfo,
  closeModel,
  addToShoppingChart,
  show,
}: {
  commodityInfo: ICommodityRes;
  closeModel: () => void;
  addToShoppingChart: (
    amount: number,
    price: number,
    specification: ISpecification
  ) => void;
  show?: boolean;
}) => {
  const [optionsStatus, dispatch] = useReducer(reducer, {
    optionsStatus: initCommodityOption(commodityInfo),
    inventory: commodityInfo.inventory,
    seletedOptionTitle: [],
    maxAmount: 0,
    userSeletedAmount: 0,
    price: undefined,
  });

  function handleConfirm(
    amount: number | undefined,
    price: number | undefined,
    specification: ISpecification
  ) {
    if (amount && price && amount > 0) {
      addToShoppingChart(amount, price, specification);
      closeModel();
    }
  }

  return (
    <CommodityDetailModelStyled show={show}>
      <BackgroundMask />
      <CommodityDetailPanel>
        <OptionModalHeader>
          <OptionImage alt={commodityInfo.name} src={commodityInfo.image} />
          <OptionModalHeaderText>
            <Typography variant="h1">{commodityInfo.name}</Typography>
            {optionsStatus.price && (
              <Typography variant="h1">
                {formatMoneyAmount(optionsStatus.price)}
              </Typography>
            )}
          </OptionModalHeaderText>
          <IconButton onClick={closeModel}>
            <X
              style={{
                padding: "5px",
                opacity: "0.7",
              }}
            />
          </IconButton>
        </OptionModalHeader>

        <Wrapper>
          <OptionListSection>
            {Object.keys(optionsStatus.optionsStatus).map((title, index) => {
              return (
                <div key={"title-" + index}>
                  <Typography variant="h1">{title}</Typography>
                  <OptionListRow>
                    {Object.keys(optionsStatus.optionsStatus[title]).map(
                      (option, index) => (
                        <OptionButton
                          key={"opiton-" + index}
                          onClick={() =>
                            dispatch({
                              type: ACTION_TYPE.SELECT_OPTION,
                              option: option,
                              optionTitle: title,
                            })
                          }
                          status={optionsStatus.optionsStatus[title][option]}
                        >
                          <Typography variant="h2">{option}</Typography>
                        </OptionButton>
                      )
                    )}
                  </OptionListRow>
                </div>
              );
            })}
          </OptionListSection>
        </Wrapper>

        <OptionModalNavigation>
          <OptionModalAmountRow>
            <Typography variant="h2">購買數量</Typography>
            <OptionModalAmountBar>
              <AmountButton
                disable={!(optionsStatus.userSeletedAmount > 0)}
                onClick={() =>
                  dispatch({
                    type: ACTION_TYPE.REDUCE_AMOUNT,
                  })
                }
              >
                <Minus style={{ width: "16px", height: "16px" }} />
              </AmountButton>
              <AmountBarText>{optionsStatus.userSeletedAmount}</AmountBarText>
              <AmountButton
                disable={
                  !(optionsStatus.maxAmount > optionsStatus.userSeletedAmount)
                }
                onClick={() =>
                  dispatch({
                    type: ACTION_TYPE.ADD_AMOUNT,
                  })
                }
              >
                <Plus style={{ width: "16px", height: "16px" }} />
              </AmountButton>
            </OptionModalAmountBar>
          </OptionModalAmountRow>

          <HighlightButton
            style={{ width: "95%" }}
            onClick={() =>
              handleConfirm(
                optionsStatus.userSeletedAmount,
                optionsStatus.price,
                optionsStatus.inventory[0].specification
              )
            }
          >
            加入購物車
          </HighlightButton>
        </OptionModalNavigation>
      </CommodityDetailPanel>
    </CommodityDetailModelStyled>
  );
};

export default CommodityOptionModel;
