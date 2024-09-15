import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'10'}>
            <form >
                <VStack alignItems={'stretch'} spacing={'5'} w={['full', '96']} mx={'auto'} my={'16'}>
                    <Heading>
                        Sign up to access Video Gallery
                    </Heading>
                    <Avatar alignSelf={'center'} boxSize={['20', '32']} />

                    <Input type='text' placeholder='Name' required focusBorderColor='purple' />
                    <Input type='email' placeholder='email' required focusBorderColor='purple' />
                    <Input type='password' placeholder='password' required focusBorderColor='purple' />

                    <Button colorScheme='purple' type='submit'>Sign Up</Button>

                    <Text textAlign={'right'}>
                        Already registered?{" "}
                        <Button variant={'link'} colorScheme='purple'>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Text>

                </VStack>
            </form>
        </Container>
    )
}

export default Signup