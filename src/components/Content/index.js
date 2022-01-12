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
    <Box>
    <Center>
    <HStack space={1} my="5" alignItems="center">
      
        <Item title="Indicator Panel"  img={faBolt} url="energy" color="primary.500"/>
        <Item  title="Indicator AHU"  img={faThermometerEmpty} url="ahu" color="success.500"/>

        
      </HStack>
    
    </Center>
    </Box>


  );
}



function Item(props) {
    return (
    
      <Link to={props.url} style={{textDecoration:"none"}}>

<Center>
  
        <Center h="40" w="40" mx="1" bg={props.color} rounded="md" shadow={3} >
            <Box>
            <FontAwesomeIcon icon={props.img} style={{fontSize:"80px",color:"white"}}/>

                {/* <Image
                source={props.img}
                alt="energy"
                size="xs"
                /> */}
            </Box>
        </Center>
        <Text color="black"  mt="1" >
        {props.title}
              </Text>
    </Center>

    </Link>
 
  
    );
  }


export default Content;
