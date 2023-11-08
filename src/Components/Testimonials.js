import React, { Component } from 'react';
import { HStack, Card, Heading, Text, CardBody, VStack, WrapItem, Avatar, Center } from '@chakra-ui/react';
import alexander from '../icon_assests/alexander.jpg'
import michael from '../icon_assests/michael.jpg'
import sigmund from '../icon_assests/sigmund.jpg'
import nicolas from '../icon_assests/nicolas.jpg'

export default class Testimonials extends Component {
    render() {
        return (
            <div>
                <VStack mb='7rem' h='500px' bg='brand.200'>
                    <Center>
                        <Heading color='white' mt='2rem' size='2xl'>Testimonials</Heading>
                    </Center>
                    <HStack spacing='50px' className='cards'>
                        <Card maxW='xs' h='20rem'>
                            <CardBody>
                                <Center>
                                    <WrapItem>
                                        <Avatar justify='center' size='2xl' name='Segun Adebayo' src={alexander} />{' '}
                                    </WrapItem>
                                </Center>
                                <VStack mt='1rem'>
                                    <Center>
                                        <Heading size='lg'>Alexander</Heading>
                                    </Center>
                                    <Text color='black'>
                                        Best bruchetta in the city! Love the fresh ingreadients they use.
                                        </Text>
                                </VStack>
                            </CardBody>
                        </Card>
                        <Card maxW='xs' h='20rem'>
                            <CardBody>
                            <Center>
                                    <WrapItem>
                                        <Avatar justify='center' size='2xl' name='Segun Adebayo' src={michael} />{' '}
                                    </WrapItem>
                                </Center>
                                <VStack mt='1rem'>
                                    <Center>
                                        <Heading size='lg'>Alex</Heading>
                                    </Center>
                                    <Text color='black'>
                                        Tastes like my mom's home cooked food, absolutely declicious!
                                        </Text>
                                </VStack>
                            </CardBody>
                        </Card>
                        <Card maxW='xs' h='20rem'>
                            <CardBody>
                            <Center>
                                    <WrapItem>
                                        <Avatar justify='center' size='2xl' name='Segun Adebayo' src={sigmund} />{' '}
                                    </WrapItem>
                                </Center>
                                <VStack mt='1rem'>
                                    <Center>
                                        <Heading size='lg'>Amanda</Heading>
                                    </Center>
                                    <Text color='black'>
                                        My favorite place to dine at, the atmosphere is amazing.
                                        </Text>
                                </VStack>
                            </CardBody>
                        </Card>
                        <Card maxW='xs' h='20rem'>
                            <CardBody>
                            <Center>
                                    <WrapItem>
                                        <Avatar justify='center' size='2xl' name='Segun Adebayo' src={nicolas} />{' '}
                                    </WrapItem>
                                </Center>
                                <VStack mt='1rem'>
                                    <Center>
                                        <Heading size='lg'>Nicholas</Heading>
                                    </Center>
                                    <Text color='black'>
                                        Can't wait to visit this restaurant again!
                                        </Text>
                                </VStack>
                            </CardBody>
                        </Card>
                    </HStack>
                </VStack>
            </div>
        )
    }
}