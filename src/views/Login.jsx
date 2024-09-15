import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <form >
                <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} mx={'auto'} my={'16'}>
                    <Heading>
                        Welcome
                    </Heading>

                    <Input type='email' placeholder='email' required focusBorderColor='purple' />
                    <Input type='password' placeholder='password' required focusBorderColor='purple' />

                    <Button variant={'link'} alignSelf={'end'}>
                        <Link to={'/forgetpassword'}>Forgot Password?</Link>
                    </Button>

                    <Button colorScheme='purple' type='submit'>Log In</Button>

                    <Text textAlign={'right'}>
                        New User?{" "}
                        <Button variant={'link'} colorScheme='purple'>
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </Text>

                </VStack>
            </form>
        </Container>
    )
}

export default Login