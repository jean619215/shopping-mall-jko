import { useEffect, useMemo, useState } from "react";
import { requestCommodityListMockData } from "./mock/CommodityListMockData";
import useQuery from "./useQuery";

export interface ICommodityListRes {
  id: string;
  index: number;
  name: string;
  minPrice: number;
  maxPrice: number;
  image: any;
}

export default function useCommodityList(
  startIndex: number,
  amount: number
): [
  list: undefined | ICommodityListRes[],
  updateList: (startIndex: number, amount: number) => Promise<void>
] {
  const [list, setList] = useState<ICommodityListRes[]>([]);

  useEffect(() => {
    updateList(startIndex, amount).catch(console.error);
  }, []);

  async function updateList(startIndex: number, amount: number) {
    try {
      const res = await requestCommodityListMockData(startIndex, amount);
      setList(list.concat(res as ICommodityListRes[]));
      localStorage.setItem("comodity_list", JSON.stringify(res));
    } catch (error) {
      let status = localStorage.getItem("comodity_list");
      if (status) {
        status = JSON.parse(status);
        setList(status as any);
      }
    }
  }

  return useMemo(() => [list, updateList], [list, updateList]);
}
