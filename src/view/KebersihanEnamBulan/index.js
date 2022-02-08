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


  const [workstation, setWorkstation] = useState("");
  const [partition, setPartition] = useState("");
  const [wallpaper, setWallpaper] = useState("");
  const [glasswindow, setGlasswindow] = useState("");
  const [door, setDoor] = useState("");
  const [plafond, setPlafond] = useState("");
  const [wood, setWood] = useState("");
  
  
  

function postData() {
  axios.post('https://hris.mncplay.id/property/api/bms/post/kebersihan/enam', {
    workstation:workstation,
    partition:partition,
    wallpaper:wallpaper,
    glasswindow:glasswindow,
    door:door,
    plafond:plafond,
    wood:wood,
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
          <FormControl.Label mt="2" >Workstation</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setWorkstation(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

          {/* <Input type="text" keyboardType="numeric" placeholder="Mechine Status"   onBlur={e => setMechineStatus(e.target.value)}/> */}
   
          <FormControl.Label mt="3">Partition</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setPartition(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

          {/* <Input type="text" keyboardType="numeric" placeholder="Temperature"   onBlur={e => setTemperature(e.target.value)}/> */}

          <FormControl.Label mt="3">Wall Paper</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setWallpaper(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

          {/* <Input type="text" keyboardType="numeric" placeholder="Ampere"   onBlur={e => setAmpere(e.target.value)}/> */}
        
          <FormControl.Label mt="3">Glass Window</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setGlasswindow(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

          {/* <Input type="text" keyboardType="numeric" placeholder="Filter"   onBlur={e => setFilter(e.target.value)}/> */}
        
          <FormControl.Label mt="3">Door</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setDoor(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

          {/* <Input type="text" keyboardType="numeric" placeholder="Preasure"   onBlur={e => setPreasure(e.target.value)}/> */}
        
          <FormControl.Label mt="3">Plafond (Gyp & Continous)</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setPlafond(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

        <FormControl.Label mt="3">Wood</FormControl.Label>
                <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setWood(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>
          
        {/* <Input type="text" keyboardType="numeric" placeholder="Reasons"   onBlur={e => setReasons(e.target.value)}/> */}
        
          <Button mt="5"  onPress={postData} colorScheme="success">
          Submit
        </Button>
  
        </Stack>
      </FormControl>
  
  
  
    </Box>
  );
}


export default AC;
