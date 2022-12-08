import { useNavigate } from "react-router-dom";
import PATH from "../../config/pathConfig";

const Shop = () => {
  const navigate = useNavigate();

  const handleClickOption = (id: string) => {
    navigate(PATH.COMMODITY_DETAIL + `?id=${id}`);
  };

  return (
    <div>
      Shop
      <div onClick={() => handleClickOption("123456")}>T-shirt</div>
    </div>
  );
};

export default Shop;
