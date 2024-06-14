import { Box, Heading, Img, Container, Stack, Text} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl"
}


const Home = () => {
  return (
    <Box>
        <MyCarousel />
        <Container minH={'100vh'} maxW={'container.xl'} p={"16"}>
            <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"} >
                Services
            </Heading>
            <Stack h="full" alignItems={"center"} p={"4"} direction={['column', 'row']}>
                <Img src={img5} filter={"hue-rotate(-130deg)"} h={["40", "400"]}/>

                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quas eum ratione provident deleniti similique tenetur distinctio ut, exercitationem atque aspernatur, obcaecati quis sequi dolores asperiores quisquam, incidunt ea fugiat nihil laudantium molestias mollitia aliquam adipisci? Saepe, corrupti quisquam, voluptate temporibus minus, fugiat ipsum vero neque dicta vel repellendus rerum!</Text>
            </Stack>
        </Container>
    </Box>
  );
};
const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w="full" h={'100vh'}>
            <Img src={img1} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Img src={img2} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'}  {...headingOptions}>
        Gaming is the future
      </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Img src={img3} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'}  {...headingOptions}>
        Console gaming
      </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Img src={img4} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'}  {...headingOptions}>
        night life is cool
      </Heading>
        </Box>
    </Carousel>

);
export default Home;