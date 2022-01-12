import * as React from 'react';

import {
  Box,
  HStack,
  VStack,
  Text,
  Pressable,

} from 'native-base';

function Hero(props) {
  return (
    <Box m="3">
    <Box
        bg="primary.600"
        py="4"
        px="3"
        rounded="md"
        alignSelf="center"
        width={375}
        maxWidth="100%"
      >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
            <VStack space="2">
              <Text color="white" fontSize="lg" fontWeight="bold">
                {props.title}
              </Text>
            </VStack>
            {props.isButton == "true" ? (
                <Pressable
                borderRadius="full"
                bg="white"
                alignSelf="flex-start"
                py="2"
                px="3"
                my="2"
              >
                <Text
                  textTransform="uppercase"
                  fontSize="sm"
                  color="primary.600"
                >
                   Form
                </Text>
              </Pressable>
            ) : (
              <Box/>
                )}
         
          </Box>
          {/* <Image
            source={{
              uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
            }}
            alt="Aang flying and surrounded by clouds"
            height="100"
            rounded="full"
            width="100"
          /> */}
        </HStack>
      </Box>
    </Box>


  );
}


export default Hero;
