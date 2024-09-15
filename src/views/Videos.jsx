import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import videos from '../components/VideosArray'

const Videos = () => {

    const [videoSrc, setVideoSrc] = useState(videos[0].src)
    const [title, setTitle] = useState(Object.values(videos[0].title))

    return (
        <Stack direction={['column', 'row']} h={'120vh'} py={'4rem'} px={'1rem'}>
            <VStack w={'full'}>
                <video src={videoSrc} style={{ width: '100%' }} controls controlsList='nodownload' autoPlay muted>

                </video>

                <VStack alignItems={'flex-start'} p={'2'} w={'full'} overflowY={'auto'}>
                    <Heading>{title}</Heading>
                    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptate alias ducimus inventore aut ad!
                    </Text>
                </VStack>
            </VStack>



            <VStack w={['full', 'xl']} alignItems={'stretch'} px={'6'} spacing={'6'} overflowY={'auto'}>
                <Heading>More Videos</Heading>
                {
                    videos.map((video, index) => (
                        <Button variant={'solid'} colorScheme={'purple'} px={'2'} py={'4'} onClick={() => {
                            setVideoSrc(video.src)
                            setTitle(video.title)
                        }} key={index} overflow={'hidden'}>
                            {video.title}
                        </Button>
                    ))
                }
            </VStack>
        </Stack >
    )
}

export default Videos