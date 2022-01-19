import * as React from 'react';

import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Pressable,

} from 'native-base';

function Header(props) {
  return (
    <Box m="3">
    <Box
        alignSelf="center"
        width={375}
        maxWidth="100%"
      >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
          <Image
      size={5}
      resizeMode={"contain"}
      borderRadius={100}
      source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg",
      }}
      alt="Alternate Text"
    />
          </Box>
          <Box>
           <Text> Hi, {props.name}</Text>
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


export default Header;
