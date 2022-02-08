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
  const [meteran, setMeteran] = useState("");

  
  

function postData() {
  axios.post('https://hris.mncplay.id/property/api/bms/post/pam', {
    meteran:meteran,
  })
  .then(function (response) {
    console.log(response)
    MySwal.fire({
      icon: 'success',
      title: 'Data berhasil disimpan',
      confirmButtonText: 'Kembali'

    }).then(function() {
      window.location.href = 'https://bms-mnc.vercel.app/'; 
      return null;
  });
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
      <Text fontSize="lg" fontWeight="bold">PAM</Text>
          <FormControl.Label mt="2" >Meteran</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Meteran"   onBlur={e => setMeteran(e.target.value)}/>
   
        
          <Button mt="5"  onPress={postData} colorScheme="success">
          Submit
        </Button>
  
        </Stack>
      </FormControl>
  
  
  
    </Box>
  );
}


export default AC;
