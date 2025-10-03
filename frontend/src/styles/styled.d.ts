import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string,
        colors: {
            background: string;
            backgroundShade: string;
            backgroundDarkShade: string;
            primary: string;
            secondary: string;
            text: string;
            borderColor: string;
            buttonBackgroundColor: string;
            buttonColor: string;
        },
    }
};