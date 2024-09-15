import { Box, Heading, HStack, Stack, VStack, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'left'} w={'full'} >
                    <Heading size={['sm', 'md']} textTransform={'uppercase'} w={'full'} >
                        Subscribe To Get Updates
                    </Heading>

                    <HStack borderBottom={'2px solid white'} py={'2'}>
                        <Input type='text' placeholder='Enter email here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                        <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                            <AiOutlineSend size={'20'} />
                        </Button>
                    </HStack>
                </VStack>

                <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                    <Heading textTransform={'uppercase'} textAlign={'center'}>Video Gallery</Heading>
                    <Text>All Rights Reserved</Text>
                </VStack>

                <VStack w={'full'} >
                    <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                    <Button variant={'link'} colorScheme='whiteAlpha'>
                        <a href="https://www.linkedin.com/in/jatinsolanki1202" target='blank' style={{ display: "flex", gap: '1vw', alignItems: 'center' }}>
                            <FaLinkedin />LinkedIn
                        </a>
                    </Button>
                    <Button variant={'link'} colorScheme='whiteAlpha'>
                        <a href="https://instagram.com/fragger._op" target='blank' style={{ display: "flex", gap: '1vw', alignItems: 'center' }}>
                            <FaInstagram />Instagram
                        </a>
                    </Button>
                    <Button variant={'link'} colorScheme='whiteAlpha'>
                        <a href="https://github.com/jatinsolanki1202" target='blank' style={{ display: "flex", gap: '1vw', alignItems: 'center' }}>
                            <FaGithub />Github
                        </a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer