import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Navlogo} from "../assets/icons/logoNav.svg";

const Container =styled.div`


`;
const Header=styled.header`
   width: 100%;
   background-color: var(--primaryColor);
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 40px;
`
const Nav=styled.nav`
display: flex;

align-items: center;
justify-content: center;
`
const NavWrap=styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 64px;
max-width: 1440px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
width: 100%;
color: white;
.active{
   color: #00fff5;
}
`
Nav.Logo=styled(Navlogo)`

`
Nav.title=styled.span`
display: inline-block;
font-weight: 600;
font-size: 20px;
color: white;
margin-left: 10px;
`

Nav.Link=styled(NavLink)`
text-decoration: none;
font-style: normal;
font-weight: 400;
margin: 0 32px;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
:active{
   transform: scale(0.98);
   opacity: 0.7;
}
`
// const Nav_Link=styled(NavLink)`
// text-decoration: none;
// font-style: normal;
// font-weight: 400;
// margin: 0 32px;
// font-size: 16px;
// line-height: 24px;
// color: #FFFFFF;
// `
















export {Container,Header,Nav,NavWrap}

