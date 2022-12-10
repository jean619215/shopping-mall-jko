import { ICommodityRes } from "../useCommodityStatus";
import { getMockImage } from "./CommodityImage";

export const CommodityMockData: ICommodityRes[] = [
  {
    id: "3828dsd356fs1d",
    index: 0,
    name: "復古襪子系列",
    minPrice: 2999,
    maxPrice: 3999,
    image: getMockImage(1),
    description: `
      <div>
          <h4>
              商品分類
          </h4>
          <h5>
              這邊可以填寫純文字內容
          </h5>
          <h4>
            商品說明
          </h4>
          <h5>
            可以穿億萬年
          </h5>
          <br>
      </div>
    `,
    inventory: [
      {
        amount: 3,
        price: 2999,
        specification: {
          Size: "S",
          Color: "酷炫黑",
        },
      },
      {
        amount: 3,
        price: 2999,
        specification: {
          Size: "M",
          Color: "酷炫黑",
        },
      },
      {
        amount: 3,
        price: 2999,
        specification: {
          Size: "L",
          Color: "酷炫黑",
        },
      },
      {
        amount: 2,
        price: 3999,
        specification: {
          Size: "S",
          Color: "紫旋風",
        },
      },
      {
        amount: 5,
        price: 3999,
        specification: {
          Size: "L",
          Color: "紫旋風",
        },
      },
      {
        amount: 5,
        price: 3799,
        specification: {
          Size: "S",
          Color: "耀眼黃",
        },
      },
      {
        amount: 5,
        price: 3799,
        specification: {
          Size: "XL",
          Color: "耀眼黃",
        },
      },
      {
        amount: 1,
        price: 3999,
        specification: {
          Size: "M",
          Color: "非常珍稀世上絕無僅有",
        },
      },
      {
        amount: 1,
        price: 3999,
        specification: {
          Size: "XL",
          Color: "非常珍稀世上絕無僅有",
        },
      },
      {
        amount: 1,
        price: 3999,
        specification: {
          Size: "XXL",
          Color: "非常珍稀世上絕無僅有",
        },
      },
    ],
  },
  {
    id: "3kjk4533448s1d",
    index: 1,
    name: "超級毛毛毛帽系列",
    minPrice: 1299,
    maxPrice: 5999,
    image: getMockImage(2),
    description: `
      <div>
          <h4>
              商品分類
          </h4>
          <h5>
              這邊可以填寫純文字內容
          </h5>
          <h4>
            商品說明
          </h4>
          <h5>
            可以穿億萬年
          </h5>
          <br>
      </div>
    `,
    inventory: [
      {
        amount: 3,
        price: 2999,
        specification: {
          Size: "S",
          Color: "墨黑",
        },
      },
      {
        amount: 3,
        price: 2999,
        specification: {
          Size: "XXXL",
          Color: "酷炫黑",
        },
      },
      {
        amount: 2,
        price: 3999,
        specification: {
          Size: "S",
          Color: "紫旋風",
        },
      },
      {
        amount: 5,
        price: 3999,
        specification: {
          Size: "L",
          Color: "紫旋風",
        },
      },
      {
        amount: 5,
        price: 3799,
        specification: {
          Size: "S",
          Color: "耀眼黃",
        },
      },
      {
        amount: 5,
        price: 3799,
        specification: {
          Size: "XL",
          Color: "墨黑",
        },
      },
      {
        amount: 1,
        price: 3999,
        specification: {
          Size: "M",
          Color: "非常珍稀世上絕無僅有",
        },
      },
      {
        amount: 1,
        price: 3999,
        specification: {
          Size: "XL",
          Color: "非常珍稀世上絕無僅有",
        },
      },
      {
        amount: 1,
        price: 3999,
        specification: {
          Size: "XXL",
          Color: "非常珍稀世上絕無僅有",
        },
      },
    ],
  },
  {
    id: "3kjk6434344566s1d",
    index: 2,
    name: "高富帥襯衫",
    minPrice: 2299,
    maxPrice: 5999,
    image: getMockImage(3),
    description: `
      <div>
          <h4>
              商品分類
          </h4>
          <h5>
              這邊可以填寫純文字內容
          </h5>
          <h4>
            商品說明
          </h4>
          <h5>
            可以穿億萬年
          </h5>
          <br>
      </div>
    `,
    inventory: [
      {
        amount: 3,
        price: 2999,
        specification: {
          Type: "S",
          Waistline: "大",
          Color: "酷炫黑",
        },
      },

      {
        amount: 3,
        price: 2999,
        specification: {
          Type: "M",
          Waistline: "大",
          Color: "紅色紅",
        },
      },
      {
        amount: 3,
        price: 5999,
        specification: {
          Type: "L",
          Waistline: "小",
          Color: "紅色紅",
        },
      },
    ],
  },
  {
    id: "jlieeww2223423444",
    index: 3,
    name: "帽踢",
    minPrice: 1299,
    maxPrice: 5999,
    image: getMockImage(4),
    description: `
      <div>
          <h4>
              商品分類
          </h4>
          <h5>
              這邊可以填寫純文字內容
          </h5>
          <h4>
            商品說明
          </h4>
          <h5>
            可以穿億萬年
          </h5>
          <br>
      </div>
    `,
    inventory: [
      {
        amount: 3,
        price: 2999,
        specification: {
          Type: "S",
          Waistline: "大",
          Color: "酷炫黑",
        },
      },

      {
        amount: 3,
        price: 2999,
        specification: {
          Type: "M",
          Waistline: "大",
          Color: "紅色紅",
        },
      },
      {
        amount: 3,
        price: 5999,
        specification: {
          Type: "L",
          Waistline: "小",
          Color: "紅色紅",
        },
      },
    ],
  },
];

export const requestCommodityMockData = (id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CommodityMockData.find((obj) => obj.id === id));
    }, 1000);
  });
};
