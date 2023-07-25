import {styled} from "styled-components";

export const StyledSkillBtn = styled.button`
    margin :0.3rem;
    background-color : ${({ theme }) => theme.colors.backgroundLight};
    padding :0.6rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    border :none;
    color : ${({ theme }) => theme.colors.text};
    font-weight : 500;
    font-size : 0.9rem;
    transition : transform 0.3s;
    font-family :inherit;
    &:hover{
        transform :translateY(-0.3rem);
    }
`