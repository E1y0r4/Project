import React from 'react'
import { Container,Header,Nav, NavWrap, } from './style'
import {navbar} from '../utils/navbar'
import { Link,Outlet,useNavigate } from 'react-router-dom'
import Button from '../components/Generic/Button/index'



const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Header>
        <NavWrap>
          <Link to={`/home`} style={{display:`flex`,alignItems:`center`, textDecoration:`none`}}>
          <Nav.Logo  />
        <Nav.title>Houzing</Nav.title>
          </Link>
        <Nav>
          {navbar.map(({title,path,id})=>{
            return( 
            <Nav.Link key={id} to={path}>{title}</Nav.Link>)
          })}
        </Nav>
        
          <Button onClick={()=>navigate('/login')} width='120px' >Login</Button>
        
          </NavWrap>
      </Header>
      </Container>
  )
}

export default Navbar