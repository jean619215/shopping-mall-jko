import { ICommodityListRes } from "../useCommodityList";
import { getMockImage } from "./CommodityImage";

export const CommodityListMockData: ICommodityListRes[] = [
  {
    id: "3828dsd356fs1d",
    index: 0,
    name: "復古襪子系列",
    minPrice: 2999,
    maxPrice: 3999,
    image: getMockImage(1),
  },
  {
    id: "3kjk4533448s1d",
    index: 1,
    name: "超級毛毛毛帽系列",
    minPrice: 1299,
    maxPrice: 5999,
    image: getMockImage(2),
  },
  {
    id: "3kjk6434344566s1d",
    index: 2,
    name: "高富帥襯衫",
    minPrice: 2299,
    maxPrice: 5999,
    image: getMockImage(3),
  },
  {
    id: "jlieeww2223423444",
    index: 3,
    name: "帽踢",
    minPrice: 1299,
    maxPrice: 5999,
    image: getMockImage(4),
  },
];

export const requestCommodityListMockData = (
  startIndex: number,
  amount: number
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CommodityListMockData.slice(startIndex, startIndex + amount));
    }, 1000);
  });
};
