import * as React from 'react';

import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Pressable,

} from 'native-base';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
{/* <i class="far "></i> */}
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
      size={6}
      resizeMode={"contain"}
      borderRadius={100}
      source={{
        uri: "http://cdn.onlinewebfonts.com/svg/img_264570.png",
      }}
      alt="Alternate Text"
    />
                    {/* <FontAwesomeIcon icon={faFaceRelieved} /> */}

          </Box>
          <Box>
           <Text fontSize="md"> Hi, {props.name}</Text>
          </Box>
         
        </HStack>
      </Box>
    </Box>


  );
}


export default Header;
