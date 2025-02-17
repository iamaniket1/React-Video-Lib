import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
    <VStack color={"blue.500"} h={"full"} justifyContent={"cebter"}>
        <AiOutlineCloudUpload size={"10vmax"}/>
        <form>
            <HStack>
                <Input required type={'file'} css={{'&::file-selector-button':{
                    border:"none",
                    width:"calc(100% + 36px)",
                    height: "100%",
                    color: "green",
                    backgroundColor: "white",
                    marginLeft:"-18px",
                    cursor:"pointer"
                }}}/>
                <Button colorScheme='green' type='submit'>Upload</Button>
            </HStack>
        </form>


        </VStack>
  </Container>
}

export default Upload