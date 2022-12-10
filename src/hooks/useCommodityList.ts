import { useEffect, useMemo, useState } from "react";
import { requestCommodityListMockData } from "./mock/CommodityListMockData";

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
    let status = localStorage.getItem("comodity_list");
    if (status) {
      status = JSON.parse(status);
      setList(status as any);
    }

    try {
      const res = await requestCommodityListMockData(startIndex, amount);
      let newList = list.concat(res as ICommodityListRes[]);
      setList(newList);
      localStorage.setItem("comodity_list", JSON.stringify(newList));
    } catch (error) {
      console.error(error);
    }
  }

  return useMemo(() => [list, updateList], [list, updateList]);
}
