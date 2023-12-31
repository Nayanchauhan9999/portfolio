type marginObj = {
    top?: string;
    bottom?: string;
    start?: string;
    end?: string;
    vertical?: string;
    horizontal?: string;
    all?: string;
}

export interface BoxProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    textalign?: "center" | "left" | "right" | "justify";
    margin?: "none" | "xsmall" | "small" | "medium" | "large" | "xlarge";
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | "bold" | "semibold" | "bolder" | "normal" | "thin";
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
    className?: string;
    color?: "primary" | "secondary" | string;
}