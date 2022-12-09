import { TypographyStyled } from "./styled";

const Typography = ({
  children,
  style,
  variant,
  ...rest
}: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: string;
}) => {
  return (
    <TypographyStyled {...rest} style={style} variant={variant}>
      {children}
    </TypographyStyled>
  );
};

export default Typography;
