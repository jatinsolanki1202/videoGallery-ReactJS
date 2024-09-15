import { Box, Container, Heading, Stack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: '4',
    size: '4xl',
    w: '60%',
    backdropFilter: 'blur(10px)'
}


const Home = () => {
    return (
        <Box>
            {/* Carousel */}
            <Carousel autoPlay infiniteLoop interval={2000} showArrows={false} showThumbs={false} showStatus={false}>
                <Box w={'full'} h={'100vh'} >
                    <img src={img1} />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                        Watch The Future
                    </Heading>
                </Box>

                <Box w={'full'} h={'100vh'} >
                    <img src={img2} />
                    <Heading bgColor={'whiteAlpha.300'} color={'blackAlpha.700'} {...headingOptions}>
                        Future is Gaming
                    </Heading>
                </Box>

                <Box w={'full'} h={'100vh'} >
                    <img src={img3} />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                        Gaming on Console
                    </Heading>
                </Box>

                <Box w={'full'} h={'100vh'} >
                    <img src={img4} />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                        Explore the Night
                    </Heading>
                </Box>

            </Carousel>


            {/* Container */}
            <Container minH={'100vh'} p={'16'} maxW={'container.lg'}>
                <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
                    Services
                </Heading>

                <Stack h={'full'} p={'4'} alignItems={'center'} direction={["column", "row"]}>
                    <Image src={img5} h={["40", "400"]} filter={'hue-rotate(-130deg)'} />

                    <Text letterSpacing={'widest'} lineHeight={['120%', '190%']} p={['4', '16']} textAlign={['left', 'center']}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, nihil? Assumenda sunt obcaecati impedit voluptas iusto! Similique consequatur sapiente quod soluta explicabo doloribus! Ratione ipsum, explicabo alias doloribus perferendis illo ad magni pariatur, earum velit commodi reprehenderit. Aperiam, dolorem. Commodi magnam architecto cupiditate. Cum autem mollitia fuga libero facilis ducimus consequuntur atque, similique illum id beatae cupiditate! Quod quia sapiente placeat natus aliquid omnis, laudantium ipsum optio, reiciendis temporibus dignissimos.
                    </Text>
                </Stack>
            </Container>
        </Box >
    )
}

export default Home