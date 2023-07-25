import { LinkProps } from "next/link";

export interface LinkProp extends LinkProps {
    children?: React.ReactNode;
}