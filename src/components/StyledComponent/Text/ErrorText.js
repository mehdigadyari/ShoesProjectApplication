// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components/native'

const ErrorText = styled.Text`
font-family:'${(props) => props.theme.fontFamilyLight}';
font-size:14px;
color:${(props) => props.theme.palette.errorText};
line-height:20px;
text-align:right
`

export default ErrorText
