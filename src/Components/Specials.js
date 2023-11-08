import { HStack, Card, Stack, Heading, Text, CardBody, Image, VStack, Button } from '@chakra-ui/react';
import React, { Component } from 'react';
import bruchetta from '../icon_assests/bruchetta.svg'
import salad from '../icon_assests/greek salad.jpg'
import dessert from '../icon_assests/lemon dessert.jpg'

export default class Specials extends Component {
    render() {
        return (
            <div className='specials'>
                <VStack>
                    <HStack display='flex' justifyContent='space-between'>
                        <Heading ml='-5rem' size='2xl'>Specials</Heading>
                        <Button mr='-30rem' bg="brand.100">Online Menu</Button>
                    </HStack>
                    <HStack spacing='50px' className='cards'>
                        <Card maxW='sm' h='30rem'>
                            <CardBody>
                                <Image
                                src={bruchetta}
                                alt='bruchetta'
                                borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='lg'>Bruschetta</Heading>
                                <Text color='black'>
                                Toasted bread that is topped with tomatoes, Parmesan cheese, garlic, and fresh basil.
                                </Text>
                                <Text color='black' fontSize='xl'>
                                    Order Delivery
                                </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                        <Card maxW='sm' h='30rem'>
                            <CardBody>
                                <Image
                                src={salad}
                                alt='salad'
                                borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='lg'>Greek Salad</Heading>
                                <Text color='black'>
                                A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.
                                </Text>
                                <Text color='black' fontSize='xl'>
                                    Order Delivery
                                </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                        <Card maxW='sm' h='30rem'>
                            <CardBody>
                                <Image
                                src={dessert}
                                alt='dessert'
                                borderRadius='lg'
                                w='100%'
                                h='50%'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='lg'>Lemon Dessert</Heading>
                                <Text color='black'>
                                Two layers of moist lemon-flavored cake coated in a rich lemon-flavored cream cheese frosting.
                                </Text>
                                <Text color='black' fontSize='xl'>
                                    Order Delivery
                                </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </HStack>
                </VStack>
            </div>
        )
    }
}