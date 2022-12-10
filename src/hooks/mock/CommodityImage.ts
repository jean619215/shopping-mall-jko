import Product1 from "./../../assets/test/product1.png";
import Product2 from "./../../assets/test/product2.png";
import Product3 from "./../../assets/test/product3.png";
import Product4 from "./../../assets/test/product4.png";

export function getMockImage(index: number): string | undefined {
  switch (index) {
    case 1:
      return Product1;
    case 2:
      return Product2;
    case 3:
      return Product3;
    case 4:
      return Product4;

    default:
      return undefined;
      break;
  }
}
