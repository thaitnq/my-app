import React, { useEffect, useState } from 'react'
import { Button, Image, Card, Container, Header } from 'semantic-ui-react'
import logo from '../logo.svg';

const HookUseEffect = () => {
  const [users, setList] = useState([])
  const [loading, setLoading] = useState(true)

  // không có biến phụ thuộc
  // useEffect(() => {
  //   console.log("mounted");
  //   const fetchData = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //     const users = await response.json()
  //     setList(users)
  //   }
  //   fetchData()
  //   return () => {
  //     console.log("unmount");
  //   }
  // }, [])

  // có biến phụ thuộc
  useEffect(() => {
    console.log("loading", loading);
    if (loading) {
      const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setList(users)
        setLoading(false)
      }
      fetchData()
    }
  }, [loading])

  const handleDel = (index) => {
    const newList = [...users]
    newList.splice(index, 1);
    setList(newList)
  }

  return (
    <Container style={{ marginTop: 20 }} textAlign='center'>
      <Header as='h1'>Ví dụ về useEffect</Header>
      <Card.Group>
        {
          users.map((item, index) => {
            return (
              <Card key={`_${item.id}_${index}`}>
                <Card.Content>
                  <Image
                    floated='right'
                    size='mini'
                    src={logo}
                  />
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Meta>Friends of {item.username}</Card.Meta>
                  <Card.Description>
                    {item.name} wants to add you to the group <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button onClick={() => handleDel(index)} basic color='red'>
                      Delete
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            )
          })
        }
      </Card.Group>
    </Container>
  )
}


export default HookUseEffect