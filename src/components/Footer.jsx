import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai";


const Footer = () => {
  return (
  <Box bg={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
<Stack direction={["column", "row"]}>

    <VStack alignItems={"stretch"} w={"full"} px={"4"}>
        <Heading size={"md"} textTransform={"uppercase"} textAlign={["center", "left"]}>
            Subcribe to get Updates
        </Heading>
        <HStack
        borderBottom={"2px solid white"} py={"2"}>
            <Input placeholder='Enter Email Here...' border={"none"} borderRadius={"none"} outline={"outline"} focusBorderColor='none'/>
            <Button p={"0"} colorScheme={"purple"} variant={"ghost"} borderRadius={'0 20px 20px 0'}>
                <AiOutlineSend size={"20"}/>
            </Button>
        </HStack>
    </VStack>
    <VStack w={"full"} 
    borderLeft={["none", "1px solid white"]}
    borderRight={["none", "1px solid white"]}
    >
        <Heading textTransform={"uppercase"} textAlign={"center"}>Video Hub</Heading>
        <Text>All Rights are Reserved</Text>
    </VStack>
    <VStack w={"full"}>
        <Heading size={"md"} textTransform={"uppercase"}>Social Media</Heading>
        <Button variant={"link"} colorScheme='red'>
            <a  target={"blank"}href='https://srivastavaaniket264@gmail.com'>Gmail</a></Button>
        <Button variant={"link"} colorScheme='blue'>
            <a target={"blank"} href='https://www.linkedin.com/in/aniket-srivastava-33235722a'>Linkedin</a></Button>
        <Button variant={"link"} colorScheme='purple'>
            <a target={"blank"}href='https://www.github.com/iamaniket1'>Github</a></Button>
        </VStack>

</Stack>
  </Box>
  )
}

export default Footer