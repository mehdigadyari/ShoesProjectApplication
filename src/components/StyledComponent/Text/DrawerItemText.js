// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components/native'

const BodyText = styled.Text`
font-family:'${(props) => props.theme.fontFamilyNormal}';
font-size:14px;
color:${(props) => props.theme.palette.primary};
padding:6px;
line-height:28px;
text-align:right
`

export default BodyText
