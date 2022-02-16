import React, { useState } from 'react';
import Hero from "../../components/Hero";
import axios from "axios";

import {
  FormControl,
  Input,
  Divider,
  Button,
  Stack,
  Select,
  Text,
  Box,
} from 'native-base';

import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

function AC() {
  return (
    <Box>
    <Hero title="Indicator AC"/>
    <Divider  bg="trueGray.200" height="1"  />
    <Content />
    </Box>
  );
}



function Content() {
  const MySwal = withReactContent(Swal)
  let navigate = useNavigate();
  const [mechine_status, setMechineStatus] = useState("");
  const [temperature, setTemperature] = useState("");
  const [ampere, setAmpere] = useState("");
  const [filter, setFilter] = useState("");
  const [preasure, setPreasure] = useState("");
  const [reasons, setReasons] = useState("");
  
  
  

function postData() {
  axios.post('https://hris.mncplay.id/property/api/bms/post/indicator/AC', {
    mechine_status:mechine_status,
    temperature:temperature,
    ampere:ampere,
    filter:filter,
    preasure:preasure,
    reasons:reasons,
  })
  .then(function (response) {
    console.log(response)
       window.location.href = 'https://bms-mnc.vercel.app/'; 
      return null;
  })
  .catch(function (error) {
    console.log(error);
  });
}


function OpenAlert() {
    let open = false;
    MySwal.fire({
      title: 'Uploading Data',
      didOpen: () => {
        MySwal.showLoading()
        setTimeout(function() {
          postData()
        }, 1000);
        
      },
      willClose: () => {
        console.log("tutup")
      }
    }).then((result) => {
      if (result.dismiss === MySwal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }
  
  
  return (
    <Box mt="3" 
    alignSelf="center"
    width={375}
    maxWidth="100%"
    >
      <FormControl isRequired>
        <Stack mx="4">
      <Text fontSize="lg" fontWeight="bold">AC</Text>
          <FormControl.Label mt="2" >Mechine Status</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Mechine Status"   onBlur={e => setMechineStatus(e.target.value)}/>
   
          <FormControl.Label mt="3">Temperature</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Temperature"   onBlur={e => setTemperature(e.target.value)}/>

          <FormControl.Label mt="3">Ampere</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Ampere"   onBlur={e => setAmpere(e.target.value)}/>
        
          <FormControl.Label mt="3">Filter</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Filter"   onBlur={e => setFilter(e.target.value)}/>
        
          <FormControl.Label mt="3">Preasure</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Preasure"   onBlur={e => setPreasure(e.target.value)}/>
        
          <FormControl.Label mt="3">Reasons</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Reasons"   onBlur={e => setReasons(e.target.value)}/>
        
          <Button mt="5" mb="5"  onPress={OpenAlert} colorScheme="success">
          Submit
        </Button>
  
        </Stack>
      </FormControl>
  
  
  
    </Box>
  );
}


export default AC;
