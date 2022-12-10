import { useEffect, useRef } from "react";
import { X } from "react-feather";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { HeaderBlock, HeaderButton } from "../../components/Header/styled";
import Typography from "../../components/Typography";
import { Wrapper } from "../../components/Wrapper";
import PATH from "../../config/pathConfig";
import useCommodityList, {
  ICommodityListRes,
} from "../../hooks/useCommodityList";
import { formatMoneyAmount } from "../../lib/utils/tools";
import {
  ListSection,
  OptionBlock,
  OptionImage,
  OptionTextContent,
} from "./styled";

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

    if (scrollTop + clientHeight > scrollHeight - 100) {
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
    <>
      <Header>
        <HeaderButton>
          <X />
        </HeaderButton>
        <HeaderBlock>
          <Typography variant="h1">官方商城</Typography>
        </HeaderBlock>
      </Header>
      <Wrapper ref={wapperRef}>
        <ListSection>
          {list &&
            list.map((item: ICommodityListRes, index: number) => (
              <OptionBlock
                key={index}
                onClick={() => handleClickOption(item.id)}
              >
                <OptionImage alt={item.name} src={item.image} />
                <OptionTextContent>
                  <Typography variant="h2">{item.name}</Typography>
                  <Typography variant="h2">
                    {formatMoneyAmount(item.minPrice) +
                      "-" +
                      formatMoneyAmount(item.maxPrice)}
                  </Typography>
                </OptionTextContent>
              </OptionBlock>
            ))}
        </ListSection>
      </Wrapper>
    </>
  );
};

export default Shop;
