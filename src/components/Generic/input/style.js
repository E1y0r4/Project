import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: ${({height})=>(height||`44px`)};
  margin-top: ${({mt})=>`${mt}px`};
  margin-bottom: ${({mb})=>`${mb}px`};
  margin-right: ${({mr})=>`${mr}px`};
  margin-left: ${({ml})=>`${ml}px`};
  border: 1px solid #e6e9ec;
`

const Logo =styled.span`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(-50%, -50%);
`
const SearchInput=styled.input`
    display: flex;
    height: ${({height})=>(height||`44px`)};
    width: ${({width})=>(width?width:`100%`)};
    padding-left: ${({pl})=> pl||'14px'};
    border-radius: 2px;
    outline: none;
    border: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #0d263b;
`


export {Container, Logo,SearchInput}