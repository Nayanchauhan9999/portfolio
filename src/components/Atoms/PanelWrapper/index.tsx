import React from 'react'
import { StyledPanelWrapper } from './PanelWrapper.styled'
import { PanelWrapperProps } from './PanelWrapper.types';

const PanelWrapper = ({ children,className,style }: PanelWrapperProps) => {
    return <StyledPanelWrapper className={className} style={style}>{children}</StyledPanelWrapper>;
};

export default PanelWrapper