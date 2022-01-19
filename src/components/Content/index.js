import React, { useState, useEffect } from 'react';
import {
  Box,
  HStack,
  Center,
  Text ,
} from 'native-base';
import energy from "./assets/energy.png"
import { Link } from "react-router-dom";
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faThermometerEmpty } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";





function Content() {
  const [LastIndicator, setLastIndicator] = useState([]);


  useEffect(() => {
    console.log(moment().format("h"));
    axios.get('https://hris.mncplay.id/property/api/bms/get/last/indicator')
    .then(function (response) {
      setLastIndicator(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
  
  }, []);

  return (
    <Box alignSelf="center"
    width={375}
    maxWidth="100%">
    <Center>
    <HStack space={1} my="5" alignItems="center">
    <Item title="Indicator Panel"  img={faBolt} url="energy" color="primary.500"/>

    {moment().format("h") <= 13 ? 
    LastIndicator.indicator_ahu_1 != null  
        ? <DisabledItem  title="Indicator AHU"  img={faThermometerEmpty} url="ahu" color="success.500"/>
        : <Item  title="Indicator AHU"  img={faThermometerEmpty} url="ahu" color="success.500"/> 
        : LastIndicator.indicator_ahu_2 != null  
        ? <DisabledItem  title="Indicator AHU"  img={faThermometerEmpty} url="ahu" color="success.500"/>
        : <Item  title="Indicator AHU"  img={faThermometerEmpty} url="ahu" color="success.500"/> }

      </HStack>
    
      <HStack space={1} my="0" alignItems="center">
      <Item title="Apar"  img={faBolt} url="energy" color="red.500"/>
      <Item title="ac"  img={faBolt} url="energy" color="yellow.500"/>

      </HStack>
    

    </Center>
    </Box>


  );
}



function Item(props) {
    return (
<Box>
  <Link to={props.url} style={{textDecoration:"none"}}>
        <Center h="40" w="40" mx="1" bg={props.color}  rounded="md" shadow={3} >
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
        <Text color="black"  mt="1"  bold style={{fontSize:"15px"}} >Last Attend 12:00</Text>
      </Center>

</Box>

  );
}




export default Content;
