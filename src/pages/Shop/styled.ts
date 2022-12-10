import styled from "styled-components";

export const OptionBlock = styled("div")`
  width: 45%;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundColor.section};
  margin: 5px 0;
  cursor: pointer;
`;

export const ListSection = styled("div")`
  padding: 10px 0 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: flex-start;
  min-height: 800px;
`;

export const OptionImage = styled("img")`
  width: 100%;
`;

export const OptionTextContent = styled("div")`
  padding: 5px;
`;
