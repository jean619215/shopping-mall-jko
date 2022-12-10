import { Trash, X } from "react-feather";
import { IconButton } from "../../../elements/Button";
import { useUserCartContext } from "../../../lib/context/UserCartProvider";
import { formatMoneyAmount } from "../../../lib/utils/tools";
import Typography from "../../Typography";
import { ItemRow, ShoppingCartModelStyled } from "./styled";

const ShoppingCartModel = ({
  show,
  closeModel,
}: {
  show?: boolean;
  closeModel: () => void;
}) => {
  const { userInfo, removeCommidity } = useUserCartContext();

  return (
    <ShoppingCartModelStyled show={show}>
      <IconButton onClick={closeModel}>
        <X />
      </IconButton>
      {userInfo &&
        userInfo.selectedCommidities.map((item, index) => (
          <ItemRow key={index}>
            <img alt={item.name} src={item.image} />
            <Typography>{item.name}</Typography>
            <Typography>
              {formatMoneyAmount(item.amount * item.price)}
            </Typography>
            <IconButton onClick={() => removeCommidity(item.id)}>
              <Trash />
            </IconButton>
          </ItemRow>
        ))}
      <Typography>總金額: {formatMoneyAmount(userInfo.totalPrice)}</Typography>
    </ShoppingCartModelStyled>
  );
};

export default ShoppingCartModel;
