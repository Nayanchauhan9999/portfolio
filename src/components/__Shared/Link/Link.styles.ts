import styled from "styled-components";
import Link from "next/link";

export const StyledLInk = styled(Link)`
    text-decoration :none;
    color : ${props=>props.theme.colors.primary};
`