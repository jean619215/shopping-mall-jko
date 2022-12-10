import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../../components/Typography";
import { Wrapper } from "../../components/Wrapper";
import PATH from "../../config/pathConfig";
import useCommodityList, {
  ICommodityListRes,
} from "../../hooks/useCommodityList";
import { formatMoneyAmount } from "../../lib/utils/tools";
import { OptionBlock } from "./styled";

const Shop = () => {
  const navigate = useNavigate();
  const [list, updateList] = useCommodityList(0, 4);
  const wapperRef = useRef<HTMLDivElement>(null);

  const handleClickOption = (id: string) => {
    navigate(PATH.COMMODITY_DETAIL + `?id=${id}`);
  };

  const onScroll = async () => {
    let scrollTop = wapperRef.current!.scrollTop;
    let clientHeight = wapperRef.current!.clientHeight;
    let scrollHeight = wapperRef.current!.scrollHeight;

    if (scrollTop + clientHeight > scrollHeight - 50) {
      try {
        await updateList(0, 4);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    wapperRef?.current?.addEventListener("scroll", onScroll);
    return () => {
      wapperRef?.current?.removeEventListener("scroll", onScroll);
    };
  }, [list]);

  return (
    <Wrapper ref={wapperRef}>
      {list &&
        list.map((item: ICommodityListRes, index: number) => (
          <OptionBlock key={index} onClick={() => handleClickOption(item.id)}>
            <img alt={item.name} src={item.image} />
            <Typography variant="h1">{item.name}</Typography>
            <Typography variant="h1">
              {formatMoneyAmount(item.minPrice) +
                "-" +
                formatMoneyAmount(item.maxPrice)}
            </Typography>
          </OptionBlock>
        ))}
    </Wrapper>
  );
};

export default Shop;
