// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components/native'

const SubtitleTextTwo = styled.Text`
font-family:'${(props) => props.theme.fontFamilyBold}';
font-size:14px;
color:${(props) => props.theme.palette.secondaryText};
line-height:24px;
text-align:right
`

export default SubtitleTextTwo
