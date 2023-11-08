import { VStack, Text, Heading } from '@chakra-ui/react';
import React from 'react';

const ConfirmedBooking = (props) => {
    return (
        <div>
            <VStack mb='2rem' w='100%' bg='brand.200' p={10}>
                <Heading color='white'>Booking Confirmed!!</Heading>
                <Text>Date: {props.formData && props.formData.date}</Text>
                <Text>Time: {props.formData && props.formData.time} </Text>
                <Text>Guests: {props.formData && props.formData.guests} </Text>
                <Text>Occasion: {props.formData && props.formData.occasion} </Text>
            </VStack>
        </div>
    )
}

export default ConfirmedBooking;