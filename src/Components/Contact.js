import { Divider, AbsoluteCenter, Box, Button, FormControl, FormLabel, Input, Textarea, Flex } from '@chakra-ui/react'
import { Container } from 'react-bootstrap'

function Contact() {
    return (
        <div>
            <div >
                <Box position='relative' padding='10'>
                    <Divider borderColor="blackAlpha" size="lg" />
                    <AbsoluteCenter bg='white' px='1'>
                        Contact Us
                    </AbsoluteCenter>
                </Box>
            </div>
            <div className='foot'>
                <Box maxW="400px" mx="auto" p={4} >
                    <Flex mb={4}>
                        <FormControl id="firstName" mr={2}>
                            <FormLabel>First Name</FormLabel>
                            <Input type="text" />
                        </FormControl>

                        <FormControl id="lastName">
                            <FormLabel>Last Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                    </Flex>

                    <FormControl id="email" mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" />
                    </FormControl>

                    <FormControl id="message" mb={4}>
                        <FormLabel>Message</FormLabel>
                        <Textarea />
                    </FormControl>

                    <Button colorScheme="blue" type="submit">Submit</Button>
                </Box>
            </div>

        </div>
    )
}
export default Contact