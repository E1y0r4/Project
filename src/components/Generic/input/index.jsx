import React from 'react'
import { Container,Logo, SearchInput } from './style'

const Input = ({
    width,
    height,
    children,
    mt,
    mb,
    mr,
    ml,
    placeholder,
    onChange,
    pl,
    onClick,
    type
}) => {
  return (
    <Container mt={mt} mb={mb} mr={mr} ml={ml} >
        <Logo>
        {children}
        </Logo>
        <SearchInput placeholder={placeholder}
         onChange={onChange}
         width={width}
         height={height}
         pl={pl}
         />
    </Container>
  )
}

export default Input