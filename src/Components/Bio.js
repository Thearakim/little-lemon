import { HStack, VStack, Heading, Text, Image, Box, Wrap } from '@chakra-ui/react';
import React, { Component } from 'react';
import pic1 from '../icon_assests/Mario and Adrian A.jpg'
import pic2 from '../icon_assests/Mario and Adrian b.jpg'

export default class Bio extends Component {
    render() {
        return (
            <div>
                <HStack>
                    <Wrap spacing='30px' justify='left'>
                    <Box mr='5rem' ml='10rem' boxSize='md' justify='left'>
                    <VStack>
                        <Heading size='2xl' justify='left' color='black'>Little Lemon</Heading>
                        <Text color='black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </VStack>
                    </Box>
                    </Wrap>
                    <Box boxSize='md'> <Image src={pic1}/></Box>
                    <Box boxSize='md'> <Image src={pic2}/></Box>
                </HStack>
            </div>
        )
    }
}