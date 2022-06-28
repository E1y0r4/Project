import React from 'react'
import Input from '../Generic/input'
import {Container,Form} from './style'
import Button from '../Generic/Button'

const Filter = () => {
  return (
    <Container>
        <Form>
          <Input></Input>
          <Button width={'130px'} type={secondary}>Advanced</Button>
          <Button width={'180px'} type={primary} >Search</Button>
        </Form>
    </Container>
  )
}

export default Filter