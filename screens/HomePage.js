import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Button, VStack } from "native-base";

export default function HomePage() {
    return (
        <NativeBaseProvider>
            <VStack alignItems="center">
                <Box>Hello world</Box>
                <Button size={"lg"} >Click Me</Button>
            </VStack>
        </NativeBaseProvider>
    )
}