import styled, { css } from "styled-components";
import { OPTION_STATUS } from ".";
import { BaseButton, IconButton } from "../../../elements/Button";
import Header from "../../Header";
import Navigation from "../../Navigation";

export const CommodityDetailModelStyled = styled("div")<{
  show?: boolean;
}>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
`;

export const CommodityDetailPanel = styled("div")`
  position: absolute;
  top: 40%;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.backgroundColor.section};

  display: flex;
  flex-direction: column;
`;

export const OptionButton = styled("div")<{
  status: OPTION_STATUS;
}>`
  border: 1px solid ${({ theme }) => theme.borderColor.primary};
  padding: 5px 10px;
  border-radius: 8px;
  margin: 2px;
  color: ${({ theme }) => theme.textColor.primary};
  ${({ theme, status }) => {
    switch (status) {
      case OPTION_STATUS.ENABLE:
        return css`
          cursor: pointer;
          background-color: ${theme.backgroundColor.primary};
        `;
      case OPTION_STATUS.SELECTED:
        return css`
          cursor: pointer;
          background-color: ${theme.backgroundColor.highlight};
        `;

      case OPTION_STATUS.DISABLE:
        return css`
          cursor: not-allowed;
          background-color: ${theme.backgroundColor.primary};
          opacity: 0.4;
        `;

      default:
        break;
    }

    // return css`
    //   font-family: ${config.fontFamily ?? ""};
    //   font-weight: ${config.fontWeight ?? ""};
    //   font-size: ${config.fontSize ?? ""};
    //   line-height: ${config.lineHeight ?? ""};
    // `;
  }}
`;

export const BackgroundMask = styled("div")`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const OptionImage = styled("img")`
  height: 70%;
  border-radius: 8px;
  margin-left: 20px;
`;

export const OptionModalHeader = styled("div")`
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 20px;
`;

export const OptionModalHeaderText = styled("div")`
  flex: 1 0 1px;
  padding: 0 20px;
`;

export const OptionModalNavigation = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 20px 10px;
  box-sizing: border-box;
  width: 100vw;
  background-color: #19191a;
  align-items: center;
`;

export const OptionModalAmountRow = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px 20px 0px;
`;

export const OptionModalAmountBar = styled("div")`
  display: flex;
  align-items: center;
`;

export const AmountButton = styled(IconButton)<{
  disable?: boolean;
}>`
  opacity: ${({ disable }) => (disable ? "0.4" : "1")};
  background-color: #494949;
  border-radius: 3px;
  padding: 2px;
`;

export const AmountBarText = styled("div")`
  padding: 0 10px;
  min-width: 30px;
  text-align: center;
`;

export const OptionListSection = styled("div")`
  padding: 0 10px;
`;

export const OptionListRow = styled("div")`
  margin: 5px 0 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
