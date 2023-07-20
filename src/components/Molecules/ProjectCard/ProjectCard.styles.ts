import Text from "@/components/__Shared/Text";
import { styled } from "styled-components";

export const ProjectCardWrapper = styled.div`
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  padding: 1.5rem;
  transition : transform 0.4s;
  border-radius : 0.8rem;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  transition : all 0.3s;
  background-color : ${props=>props.theme.colors.backgroundLight};
  &:hover {
    transform: translateY(-0.4rem);
  }
`;

export const StyledSkillList = styled(Text)`
    background-color : ${props => props.theme.colors.secondary};
    color : ${props => props.theme.colors.background};
    padding : 0.3rem;
    font-size : 0.7rem;
    margin : 0.3rem;
    border-radius : 1rem;
    font-weight : 500;
    cursor : pointer;
    transition : opacity 0.4s;
    font-style :italic;
    &:hover{
      opacity : 0.8;
    };

`;

export const SkillWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`
export const ProjectLinksWrapper = styled.div`
    display : flex;
    justify-content:center;
    padding : 0.6rem;
    gap : 0.6rem;
`