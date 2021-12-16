import React, { useState, useRef, useEffect } from 'react';
import { Button, Icon, Header, Container } from 'semantic-ui-react'



const HookUseRef = () => {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  },[count]);

  return (
    <Container style={{marginTop: '20%'}} textAlign='center'>
      <Header as='h1'>Ví dụ về useRef</Header>
      <Header as='h2'>Before: {prevCountRef.current}</Header>
      <Header as='h3'>Now: {count}</Header>
      <Button animated onClick={()=>setCount(count+1)}>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
    </Container>
  )

}

export default HookUseRef
