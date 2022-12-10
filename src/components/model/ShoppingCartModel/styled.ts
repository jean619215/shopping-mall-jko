import styled from "styled-components";

export const ShoppingCartModelStyled = styled("div")<{
  show?: boolean;
}>`
  display: ${({ show }) => (show ? "flex" : "none")};
  background-color: ${({ theme }) => theme.backgroundColor.section};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  flex-direction: column;
`;

export const ShoppingCartModalHeader = styled("div")`
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px #464646 solid;
`;

export const ShoppingCartNavigation = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 20px 10px;
  box-sizing: border-box;
  width: 100vw;
  background-color: #19191a;
  align-items: center;
`;

export const ItemRow = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  background-color: #202020;
  border-radius: 3px;
`;

export const ItemImage = styled("img")`
  height: 50px;
  border-radius: 5px;
`;
