// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components/native'

const BgScrollView = styled.ScrollView`
  background-color: ${(props) => props.theme.palette.bgColorMain};
  flex: 1;
`

export default BgScrollView
