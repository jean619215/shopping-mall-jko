import styled, { css } from "styled-components";

export const TypographyStyled = styled("div")<{ variant?: string }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  ${({ theme, variant = "body1" }) => {
    const config = theme.typography[variant];

    return css`
      font-family: ${config.fontFamily ?? ""};
      font-weight: ${config.fontWeight ?? ""};
      font-size: ${config.fontSize ?? ""};
      line-height: ${config.lineHeight ?? ""};
    `;
  }}
`;
