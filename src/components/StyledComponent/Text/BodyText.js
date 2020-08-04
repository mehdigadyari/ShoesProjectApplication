// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components/native'

const BodyText = styled.Text`
font-family:'${(props) => props.theme.fontFamilyLight}';
font-size:16px;
color:${(props) => props.theme.palette.bodyText};
padding:6px;
line-height:28px;
text-align:right
`

export default BodyText
