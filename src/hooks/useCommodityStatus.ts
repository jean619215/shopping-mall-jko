import { useEffect, useMemo, useState } from "react";
import { requestCommodityMockData } from "./mock/CommodityMockData";
import useQuery from "./useQuery";

export interface ICommodityRes {
  id: string;
  index: number;
  name: string;
  description: string;
  minPrice: number;
  maxPrice: number;
  image: any;
  inventory: ICommodityInventory[];
}

export interface ICommodityInventory {
  amount: number;
  price: number;
  specification: ISpecification;
}

export interface ISpecification {
  [key: string]: string;
}

export default function useCommodityStatus(): [
  commodityStatus: undefined | ICommodityRes,
  updateCommodity: () => Promise<void>
] {
  let query = useQuery();
  const [commodityStatus, setCommodity] = useState<ICommodityRes>();

  useEffect(() => {
    updateCommodity();
  }, []);

  async function updateCommodity() {
    const id: string | null = query.get("id");
    // const res = await fetch(getUrl(API_HOST, `/shop`), {
    //     method: 'GET',
    //   })
    if (id) {
      let status = localStorage.getItem(id);
      if (status) {
        status = JSON.parse(status);
        setCommodity(status as any);
      }
    }

    try {
      if (id) {
        const res = await requestCommodityMockData(id);
        setCommodity(res as ICommodityRes);
        localStorage.setItem(id, JSON.stringify(res));
      }
    } catch (error) {
      console.error(error);
    }
  }

  return useMemo(
    () => [commodityStatus, updateCommodity],
    [query, commodityStatus, updateCommodity]
  );
}
