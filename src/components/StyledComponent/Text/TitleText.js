// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components/native'

const TitleText = styled.Text`
font-family:'${(props) => props.theme.fontFamilyBold}';
font-size:24px;
color:${(props) => props.theme.palette.primaryText};
padding:6px;
text-align:right
`

export default TitleText
