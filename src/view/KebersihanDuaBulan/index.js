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

function AC() {
  return (
    <Box>
    <Hero title="Kebersihan Dua Bulan"/>
    <Divider  bg="trueGray.200" height="1"  />
    <Content />
    </Box>
  );
}



function Content() {
  const MySwal = withReactContent(Swal)
  let navigate = useNavigate();


  const [id1110, set1110] = useState("");
  
  
  

function postData() {
  axios.post('https://hris.mncplay.id/property/api/bms/post/2/bulan', {
    id1110:id1110,
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
          <FormControl.Label mt="2" >Plumbing & Dainage</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
                    set1110(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>


        <Button mt="5"  onPress={postData} colorScheme="success">
          Submit
        </Button>
  
        </Stack>
      </FormControl>
  
  
  
    </Box>
  );
}


export default AC;
