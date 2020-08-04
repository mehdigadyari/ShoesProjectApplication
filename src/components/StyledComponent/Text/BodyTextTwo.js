// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components/native'

const BodyTextTwo = styled.Text`
font-family:'${(props) => props.theme.fontFamilyLight}';
font-size:14px;
color:${(props) => props.theme.palette.bodyText};
padding:6px;
line-height:26px;
text-align:right
`

export default BodyTextTwo
