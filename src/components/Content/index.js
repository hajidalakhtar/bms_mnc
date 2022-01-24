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
  const [LastAHU1, setLastAHU1] = useState(null);
  const [LastAHU2, setLastAHU2] = useState(null);
  const [loading, setLoading] = useState(true);

  const SearchIndex = (data, toSearch) => {
    var results = [];
    // console.log()
    var index = data.findIndex(x => x.task_id === toSearch);
    return index
  }

  useEffect(() => {
    // console.log(moment().format("H"))
    axios.get('https://hris.mncplay.id/property/api/bms/get/last/indicator')
    .then(function (response) {
      if(SearchIndex(response.data.data,1102) == -1){
        setLastAHU1(null)
      }else{
        setLastAHU1(response.data.data[SearchIndex(response.data.data,1102)].created_at)
      }
      if(SearchIndex(response.data.data,1120) == -1){
        setLastAHU2(null)
      }else{
        setLastAHU2(response.data.data[SearchIndex(response.data.data,1120)].created_at)
      }

      setLoading(false)
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

    {moment().format("H") >= 13 ? 
    LastAHU2 != null 
        ? <DisabledItem  title="Indicator AHU"  img={faThermometerEmpty} url="ahu" color="success.500" last_attempt={LastAHU2}/>
        : <Item  title="Indicator AHU"  img={faThermometerEmpty} url="ahu" color="success.500"/> 
        : LastAHU1 != null
        ? <DisabledItem  title="Indicator AHU"  img={faThermometerEmpty} url="ahu" color="success.500" last_attempt={LastAHU1}/>
        : <Item  title="Indicator AHU"  img={faThermometerEmpty} url="ahu" color="success.500"  /> }

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
        <Text color="black"  mt="1"  bold style={{fontSize:"15px"}} >Last Attempt ({moment(props.last_attempt).format('H:m')})</Text>
      </Center>

</Box>

  );
}




export default Content;
