import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { Wrapper } from "../../components/Wrapper";
import { Button, HighlightButton, IconButton } from "../../elements/Button";
import useCommodityStatus, {
  ISpecification,
} from "../../hooks/useCommodityStatus";
import { ChevronLeft, ShoppingCart } from "react-feather";
import { ButtonRow, CommodityContentSection, CommodityImage } from "./styled";
import Typography from "../../components/Typography";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CommodityOptionModel from "../../components/model/CommodityOptionModel";
import { useUserCartContext } from "../../lib/context/UserCartProvider";
import ShoppingCartModel from "../../components/model/ShoppingCartModel";
import { HeaderBlock, HeaderButton } from "../../components/Header/styled";
import { formatMoneyAmount } from "../../lib/utils/tools";

const CommodityDetail = () => {
  const navigate = useNavigate();
  const [commodityInfo, updateCoomodityInfo] = useCommodityStatus();
  const [showOptionModel, setShowOptionModel] = useState(false);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const { addCommidity } = useUserCartContext();
  const handleBack = () => {
    navigate(-1);
  };

  const handleAddShoppingCart = (
    amount: number,
    price: number,
    specification: ISpecification
  ) => {
    if (commodityInfo) {
      addCommidity(
        commodityInfo.id,
        commodityInfo.name,
        commodityInfo.image,
        amount,
        price,
        specification
      );
    }
  };

  const handleBuyRightNow = () => {
    //TODO
  };

  return (
    <>
      <Header>
        <HeaderButton onClick={handleBack}>
          <ChevronLeft />
        </HeaderButton>
        <HeaderBlock>
          <Typography variant="h1">街口官方商城</Typography>
        </HeaderBlock>
      </Header>
      <Wrapper>
        {commodityInfo ? (
          <>
            <CommodityImage
              alt={commodityInfo.name}
              src={commodityInfo.image}
            />
            <CommodityContentSection>
              <Typography style={{ paddingBottom: "6px" }} variant="h1">
                {commodityInfo.name}
              </Typography>
              <Typography variant="h1">
                {formatMoneyAmount(commodityInfo.minPrice) +
                  "-" +
                  formatMoneyAmount(commodityInfo.maxPrice)}
              </Typography>
              <div
                dangerouslySetInnerHTML={{ __html: commodityInfo.description }}
              />
            </CommodityContentSection>
          </>
        ) : (
          "loading"
        )}
      </Wrapper>
      <Navigation>
        <IconButton onClick={() => setShowShoppingCart(true)}>
          <ShoppingCart />
          <Typography variant="body1">購物車</Typography>
        </IconButton>
        <ButtonRow>
          <Button onClick={() => setShowOptionModel(true)}>
            <Typography variant="h1">加入購物車</Typography>
          </Button>
          <HighlightButton onClick={handleBuyRightNow}>
            <Typography variant="h1">直接購買</Typography>
          </HighlightButton>
        </ButtonRow>
      </Navigation>
      {commodityInfo && (
        <CommodityOptionModel
          commodityInfo={commodityInfo}
          closeModel={() => setShowOptionModel(false)}
          addToShoppingChart={handleAddShoppingCart}
          show={showOptionModel}
        />
      )}
      <ShoppingCartModel
        show={showShoppingCart}
        closeModel={() => setShowShoppingCart(false)}
      />
    </>
  );
};

export default CommodityDetail;
