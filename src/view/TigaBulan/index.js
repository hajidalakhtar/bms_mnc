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
    <Hero title="Kebersihan"/>
    <Divider  bg="trueGray.200" height="1"  />
    <Content />
    </Box>
  );
}



function Content() {
  const MySwal = withReactContent(Swal)
  let navigate = useNavigate();


  const [Id1105, set1105] = useState("");
  const [Id1106, set1106] = useState("");
  const [Id1107, set1107] = useState("");
 
  
  

function postData() {
  axios.post('https://hris.mncplay.id/property/api/bms/post/3/bulan', {
    id1105:Id1105,
    id1106:Id1106,
    id1107:Id1107,
  })
  .then(function (response) {
    console.log(response)
    MySwal.fire({
      icon: 'success',
      title: 'Data berhasil disimpan',
      confirmButtonText: 'Kembali'

    }).then(function() {
      navigate("/")
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
          <FormControl.Label mt="2" >Lighting Unit & Grouping System</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
          onValueChange={(itemValue) => {
            set1105(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>
        

          <FormControl.Label mt="2" >Power Outlet Unit & Grouping System</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
          onValueChange={(itemValue) => {
            set1106(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>


          <FormControl.Label mt="2" >Split AC</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
          onValueChange={(itemValue) => {
            set1107(itemValue)
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
