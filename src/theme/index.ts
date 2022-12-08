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
};

export default baseTheme;
