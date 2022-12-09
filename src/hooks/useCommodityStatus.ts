import { useEffect, useMemo, useState } from "react";
import useQuery from "./useQuery";

export interface ICommodityRes {
  id: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  inventory: ICommodityInventory[];
}

export interface ICommodityInventory {
  amount: number;
  price: number;
  specification: {
    [key: string]: string;
  };
}

const mockCommodity: ICommodityRes = {
  id: "3828dsd356fs1d",
  name: "復古球衣系列",
  minPrice: 2999,
  maxPrice: 3999,
  inventory: [
    {
      amount: 3,
      price: 2999,
      specification: {
        ["尺寸"]: "S",
        ["顏色"]: "酷炫黑",
      },
    },
    {
      amount: 3,
      price: 2999,
      specification: {
        ["尺寸"]: "M",
        ["顏色"]: "酷炫黑",
      },
    },
    {
      amount: 3,
      price: 2999,
      specification: {
        ["尺寸"]: "L",
        ["顏色"]: "酷炫黑",
      },
    },
    {
      amount: 2,
      price: 3999,
      specification: {
        ["尺寸"]: "S",
        ["顏色"]: "紫旋風",
      },
    },
    {
      amount: 5,
      price: 3999,
      specification: {
        ["尺寸"]: "L",
        ["顏色"]: "紫旋風",
      },
    },
    {
      amount: 5,
      price: 3799,
      specification: {
        ["尺寸"]: "S",
        ["顏色"]: "耀眼黃",
      },
    },
    {
      amount: 5,
      price: 3799,
      specification: {
        ["尺寸"]: "XL",
        ["顏色"]: "耀眼黃",
      },
    },
    {
      amount: 1,
      price: 3999,
      specification: {
        ["尺寸"]: "M",
        ["顏色"]: "非常珍稀世上絕無僅有",
      },
    },
    {
      amount: 1,
      price: 3999,
      specification: {
        ["尺寸"]: "XL",
        ["顏色"]: "非常珍稀世上絕無僅有",
      },
    },
    {
      amount: 1,
      price: 3999,
      specification: {
        ["尺寸"]: "XXL",
        ["顏色"]: "非常珍稀世上絕無僅有",
      },
    },
  ],
};

export default function useCommodityStatus(): [
  commodityStatus: undefined | ICommodityRes,
  updateCommodity: () => Promise<void>
] {
  let query = useQuery();
  const [commodityStatus, setCommodity] = useState<ICommodityRes>();

  useEffect(() => {}, [query]);

  async function updateCommodity() {
    const id: string | null = query.get("id");
    // const res = await fetch(getUrl(API_HOST, `/shop`), {
    //     method: 'GET',
    //   })

    setTimeout(() => {
      try {
        if (id) {
          setCommodity(mockCommodity);
          localStorage.setItem(id, JSON.stringify(mockCommodity));
        }
      } catch (error) {
        if (id) {
          let status = localStorage.getItem(id);
          if (status) {
            status = JSON.parse(status);
            setCommodity(status as any);
          }
        }
      }
    }, 2000);
  }

  return useMemo(() => [commodityStatus, updateCommodity], [query]);
}
