import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = (availableTimes) => {
    return (
        <VStack mb='2rem' bg='brand.200'>
            <Heading mt='2rem' color='white' size='xl'>Book your reservation now!</Heading>
            <BookingForm availableTimes={availableTimes}/>
        </VStack>
    );
}

export default BookingPage