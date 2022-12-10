import { Trash, X } from "react-feather";
import { HighlightButton, IconButton } from "../../../elements/Button";
import { useUserCartContext } from "../../../lib/context/UserCartProvider";
import { formatMoneyAmount } from "../../../lib/utils/tools";
import Navigation from "../../Navigation";
import Typography from "../../Typography";
import { Wrapper } from "../../Wrapper";
import {
  ItemImage,
  ItemRow,
  ShoppingCartModalHeader,
  ShoppingCartModelStyled,
} from "./styled";

const ShoppingCartModel = ({
  show,
  closeModel,
}: {
  show?: boolean;
  closeModel: () => void;
}) => {
  const { userInfo, removeCommidity } = useUserCartContext();

  function handleConfirm() {
    closeModel();
  }

  return (
    <ShoppingCartModelStyled show={show}>
      <ShoppingCartModalHeader>
        <Typography variant="h1">購物車</Typography>
        <IconButton onClick={closeModel}>
          <X />
        </IconButton>
      </ShoppingCartModalHeader>
      <Wrapper>
        {userInfo &&
          userInfo.selectedCommidities.map((item, index) => (
            <ItemRow key={index}>
              <ItemImage alt={item.name} src={item.image} />
              <Typography>{item.name}</Typography>
              <Typography>
                {formatMoneyAmount(item.amount * item.price)}
              </Typography>
              <IconButton onClick={() => removeCommidity(item.id)}>
                <Trash style={{ width: "16px", height: "16px" }} />
              </IconButton>
            </ItemRow>
          ))}
      </Wrapper>

      <Navigation>
        <Typography>
          總金額: {formatMoneyAmount(userInfo.totalPrice)}
        </Typography>
        <HighlightButton onClick={handleConfirm}>購買</HighlightButton>
      </Navigation>
    </ShoppingCartModelStyled>
  );
};

export default ShoppingCartModel;
