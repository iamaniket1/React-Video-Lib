import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
<form>
    <VStack alignItems={"strech"} spacing={"8"} w={["full",'96']} m={"auto"} my={"16"}>
        <Heading>Welcome to Video Hub</Heading>
        <Avatar alignSelf={"center"} boxSize={"32"}/>
        <Input placeholder={"Enter Your Full Name"} type='text' required focusBorderColor='purple.500'/>
        <Input placeholder={"Enter Your Email"} type='email' required focusBorderColor='purple.500'/>
        <Input placeholder={"Enter Password"} type='password' focusBorderColor='purple.500'/>
        {/* <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgetpassword"}>Forget Password?</Link>
        </Button> */}
        <Button colorScheme='purple' type='submit'>Sign Up</Button>
        <Text textAlign={"right"}>Already Signed Up?{" "}
        <Button variant={"link"} colorScheme='puprle' >
            <Link to={"/login"}>Login</Link>
        </Button>
        </Text>
        
    </VStack>
</form>
  </Container>
}

export default Signup