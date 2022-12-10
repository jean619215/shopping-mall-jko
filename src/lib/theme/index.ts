export interface IBaseTheme {
  textColor: {
    primary: string;
    minor: string;
  };
  backgroundColor: {
    primary: string;
    section: string;
    button: string;
    highlight: string;
  };
  borderColor: {
    primary: string;
  };
  typography: {
    fontFamily: string;
    h1: IFontTheme;
    h2: IFontTheme;
    body1: IFontTheme;
  };
}

export interface IFontTheme {
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: number | string;
  lineHeight?: number | string;
}

const baseTheme: IBaseTheme = {
  textColor: {
    primary: "#ffffff",
    minor: "#3f414b",
  },
  backgroundColor: {
    primary: "#080809",
    section: "#272934",
    button: "#43465e",
    highlight: "#ba2a43",
  },
  borderColor: {
    primary: "#37394a",
  },
  typography: {
    fontFamily: "'Helvetica', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: 24,
      lineHeight: "36px",
    },
    h2: {
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "48px",
    },
    body1: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "24px",
    },
  },
};

export default baseTheme;
