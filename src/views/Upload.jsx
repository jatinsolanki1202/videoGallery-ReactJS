import { Container, HStack, VStack, Button, Input } from '@chakra-ui/react'
import { useEffect } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = ({ setProgress }) => {

    useEffect(() => {
        setProgress(40)
        setTimeout(() => {
            setProgress(100)
        }, 750)
    }, [])

    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
                <AiOutlineCloudUpload size={'10vmax'} />
                <form >
                    <HStack>
                        <Input type='file' required css={{
                            "&::file-selector-button": {
                                border: "none", width: "calc(100% + 36px)", height: "100%", marginLeft: "-18px", color: "purple", backgroundColor: "white", cursor: "pointer"
                            }
                        }} />
                        <Button colorScheme='purple' type='submit'>Upload</Button>
                    </HStack>
                </form>
            </VStack>
        </Container>
    )
}

export default Upload