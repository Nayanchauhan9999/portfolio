export interface ButtonFillNormalProps extends React.HTMLAttributes<HTMLElement>{
    title: string;
    borderwidth?: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string | "secondary";
    className?: string;
    width?: "full" | string;
    onClick?:()=>void
}