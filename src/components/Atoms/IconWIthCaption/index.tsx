import React from 'react'
import { StyledIconWithCaption } from './IconWithCaption.styles'
import { IconWIthCaptionProps } from './IconWithCaption.types'
import Text from '@/components/__Shared/Text';

const IconWithCaption = ({ src, caption }: IconWIthCaptionProps) => {
  return <StyledIconWithCaption>
    {src}
    <Text color='primary'>{caption}</Text>
  </StyledIconWithCaption>;
};

export default IconWithCaption