import styled, { css } from "styled-components";
import { OPTION_STATUS } from ".";
import { BaseButton } from "../../../elements/Button";

export const CommodityDetailModelStyled = styled("div")``;

export const OptionButton = styled(BaseButton)<{
  status: OPTION_STATUS;
}>`
  border: 1px solid ${({ theme }) => theme.borderColor.primary};
  border-radius: 0.875rem;
  color: ${({ theme }) => theme.textColor.primary};
  ${({ theme, status }) => {
    switch (status) {
      case OPTION_STATUS.ENABLE:
        return css`
          background-color: ${theme.backgroundColor.primary};
        `;
      case OPTION_STATUS.SELECTED:
        return css`
          background-color: ${theme.backgroundColor.highlight};
        `;

      case OPTION_STATUS.DISABLE:
        return css`
          background-color: ${theme.backgroundColor.primary};
          opacity: 0.5;
        `;

      default:
        break;
    }

    // return css`
    //   font-family: ${config.fontFamily ?? ""};
    //   font-weight: ${config.fontWeight ?? ""};
    //   font-size: ${config.fontSize ?? ""};
    //   line-height: ${config.lineHeight ?? ""};
    // `;
  }}
`;
