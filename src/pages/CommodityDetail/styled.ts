import styled from "styled-components";

export const CommodityContentSection = styled("div")`
  background-color: ${({ theme }) => theme.backgroundColor.section};
  margin: 8px;
  padding: 16px;
  border-radius: 8px;
  h4,
  h5 {
    font-size: 14px;
    opacity: 0.7;
  }
  h5 {
    font-size: 12px;
    opacity: 0.7;
  }
`;

export const CommodityImage = styled("img")`
  width: 100%;
`;

export const ButtonRow = styled("div")`
  flex: 1 0 1px;
  display: flex;
  justify-content: space-evenly;
`;
