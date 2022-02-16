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

function AHU() {
  return (
    <Box>
    <Hero title="Indicator AHU"/>
    <Divider  bg="trueGray.200" height="1"  />
    <Content />
    </Box>
  );
}



function Content() {
  const MySwal = withReactContent(Swal)
  let navigate = useNavigate();
 
  const [zona_a, setZonaA] = useState("");
  const [zona_b, setZonaB] = useState("");
  const [zona_c, setZonaC] = useState("");
  const [zona_d, setZonaD] = useState("");

function postData() {
  axios.post('https://hris.mncplay.id/property/api/bms/post/indicator/AHU', {
    zona_a : zona_a,
    zona_b : zona_b,
    zona_c : zona_c,
    zona_d : zona_d,
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
      <Text fontSize="lg" fontWeight="bold">AHU</Text>
          <FormControl.Label mt="2" >Zona A</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Temperature"   onBlur={e => setZonaA(e.target.value)}/>
   
          <FormControl.Label mt="3">Zona B</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Temperature"   onBlur={e => setZonaB(e.target.value)}/>

          <FormControl.Label mt="3">Zona C</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Temperature"   onBlur={e => setZonaC(e.target.value)}/>
        
          <FormControl.Label mt="3">Zona D</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Temperature"   onBlur={e => setZonaD(e.target.value)}/>
        
          <Button mt="5"  mb="5" onPress={postData} colorScheme="success">
          Submit
        </Button>
  
        </Stack>
      </FormControl>
  
  
  
    </Box>
  );
}


export default AHU;
