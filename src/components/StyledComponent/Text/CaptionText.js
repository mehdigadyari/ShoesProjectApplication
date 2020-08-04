// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components/native'

const CaptionText = styled.Text`
font-family:'${(props) => props.theme.fontFamilyCaption}';
font-size:12px;
color:${(props) => props.theme.palette.secondaryText};
line-height:20px;
text-align:right
`

export default CaptionText
