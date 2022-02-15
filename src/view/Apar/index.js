// kebersihan 6 bulan
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

function Apar() {
  return (
    <Box>
    <Hero title="Indicator Apar"/>
    <Divider  bg="trueGray.200" height="1"  />
    <Content />
    </Box>
  );
}



function Content() {
  const MySwal = withReactContent(Swal)
  let navigate = useNavigate();










  const [aparCheck, setAparCheck] = useState("");
  const [positionCheck, setPositionCheck] = useState("");
  const [aparIndicator, setAparIndicator] = useState("");
  const [aparVolume, setAparVolume] = useState("");
  const [aparSeal, setAparSeal] = useState("");
  const [reasons, setReasons] = useState("");
  







  
  

function postData() {
  axios.post('https://hris.mncplay.id/property/api/bms/post/apar', {
    apar_check: aparCheck,
    position_check: positionCheck,
    apar_indicator: aparIndicator,
    apar_volume: aparVolume,
    apar_seal: aparSeal,
    reasons: reasons,
 
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
        postData()
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

        	
        
        
        
            

          
          <FormControl.Label mt="2" >Apar_check</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
          onValueChange={(itemValue) => {
            setAparCheck(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

              
        <FormControl.Label mt="2" >position_check</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
          onValueChange={(itemValue) => {
            setPositionCheck(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

              
        <FormControl.Label mt="2" >Apar_indicator</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
          onValueChange={(itemValue) => {
            setAparIndicator(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

              
        <FormControl.Label mt="2" >Apar_volume</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
          onValueChange={(itemValue) => {
            setAparVolume(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

              
        <FormControl.Label mt="2" >Apar_seal</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
          onValueChange={(itemValue) => {
            setAparSeal(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

              
        <FormControl.Label mt="2" >reasons</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
          onValueChange={(itemValue) => {
            setReasons(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>





        <Button mt="5" mb="5"  onPress={postData} colorScheme="success">
          Submit
        </Button>
  
        </Stack>
      </FormControl>
  
  
  
    </Box>
  );
}


export default Apar;
