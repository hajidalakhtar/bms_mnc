import * as React from 'react';
import {
  Box,
  HStack,
  Center,
  Text ,
} from 'native-base';
import energy from "./assets/energy.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faThermometerEmpty } from '@fortawesome/free-solid-svg-icons'



function Content() {
  return (
    <Box alignSelf="center"
    width={375}
    maxWidth="100%">
    <Center>
    <HStack space={10} my="5" alignItems="center">
      
        <Item title="Indicator Panel"  img={faBolt} url="energy" color="primary.500"/>
        {/* <DisabledItem  title="Indicator AHU"  img={faThermometerEmpty} url="ahu" color="success.500"/> */}
        <Item  title="Indicator AHU"  img={faThermometerEmpty} url="ahu" color="success.500"/>

        
      </HStack>
    
    </Center>
    </Box>


  );
}



function Item(props) {
    return (
<Box>
  <Link to={props.url} style={{textDecoration:"none"}}>
        <Center h="40" w="40" bg={props.color}  rounded="md" shadow={3} >
            <FontAwesomeIcon icon={props.img} style={{fontSize:"80px",color:"white"}}/>

                {/* <Image
                source={props.img}
                alt="energy"
                size="xs"
                /> */}
        </Center>
        <Center flex={1} px="3">
          <Text color="black"  mt="1"  bold style={{fontSize:"15px"}} >{props.title}</Text>
        </Center>

      </Link>
  </Box>
  
    );
  }




function DisabledItem(props) {
  return (
<Box>
      <Center h="40" w="40" mx="1" bg={props.color+":alpha.30"} rounded="md" shadow={3} >
          <FontAwesomeIcon icon={props.img} style={{fontSize:"80px",color:"white"}}/>

              {/* <Image
              source={props.img}
              alt="energy"
              size="xs"
              /> */}
      </Center>
      <Center flex={1} px="3">
        <Text color="black"  mt="1"  bold style={{fontSize:"15px"}} >Last Attend 12:00:14</Text>
      </Center>

</Box>

  );
}




export default Content;
