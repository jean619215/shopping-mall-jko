import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ISpecification } from "../../hooks/useCommodityStatus";

export interface IUserCartInfo {
  userInfo: IUserInfo;
  addCommidity: (
    id: string,
    name: string,
    image: string,
    amount: number,
    price: number,
    specification: ISpecification
  ) => void;
  removeCommidity: (id: string) => void;
}

export interface IUserInfo {
  totalPrice: number;
  selectedCommidities: ISelectedSpecification[];
}

export interface ISelectedSpecification {
  id: string;
  name: string;
  image: any;
  amount: number;
  price: number;
  specification: ISpecification;
}

const UserContext = createContext<IUserCartInfo>({
  userInfo: {
    totalPrice: 0,
    selectedCommidities: [],
  },
  addCommidity: () => {},
  removeCommidity: () => {},
});

export function UserCartProvider({ children }: { children?: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    totalPrice: 0,
    selectedCommidities: [],
  });

  function addCommidity(
    id: string,
    name: string,
    image: string,
    amount: number,
    price: number,
    specification: ISpecification
  ) {
    let newInfo = { ...userInfo };
    newInfo.selectedCommidities.push({
      id,
      name,
      image,
      amount,
      price,
      specification,
    });
    newInfo.totalPrice += price * amount;
    setUserInfo(newInfo);
  }

  function removeCommidity(id: string) {
    let newInfo = { ...userInfo };
    let newComidities = newInfo.selectedCommidities.filter((item) => {
      if (item.id === id) {
        newInfo.totalPrice -= item.price * item.amount;
        return false;
      }
      return true;
    });

    newInfo.selectedCommidities = newComidities;
    setUserInfo(newInfo);
  }

  return (
    <UserContext.Provider value={{ userInfo, addCommidity, removeCommidity }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserCartContext = () => useContext(UserContext);
