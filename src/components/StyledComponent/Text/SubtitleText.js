// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components/native'

const SubtitleText = styled.Text`
font-family:'${(props) => props.theme.fontFamilyNormal}';
font-size:18px;
color:${(props) => props.theme.palette.secondaryText};
line-height:28px;
text-align:right
`

export default SubtitleText
