import styled from "styled-components";

export const BaseButton = ({
  children,
  style,
  onClick,
  disable,
  ...rest
}: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: any;
  disable?: boolean;
}) => {
  function handleClick() {
    if (!disable && onClick) {
      onClick();
    }
  }

  return (
    <BaseButtonStyled
      style={style}
      onClick={handleClick}
      disable={disable}
      {...rest}
    >
      {children}
    </BaseButtonStyled>
  );
};

export const BaseButtonStyled = styled("div")<{
  disable?: boolean;
}>`
  color: ${({ theme }) => theme.textColor.primary};
  cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};

  &:hover {
    ${({ disable }) => (disable ? "" : "opacity: 0.7;")}
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Button = styled(BaseButton)`
  background-color: #353740;
  border-radius: 10px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
`;

export const IconButton = styled(BaseButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HighlightButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.backgroundColor.highlight};
  border-radius: 10px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
`;
