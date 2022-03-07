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
  TextArea,
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
    <Hero title="Catatan Penanganan Masalah (CPM)"/>
    <Divider  bg="trueGray.200" height="1"  />
    <Content />
    </Box>
  );
}



function Content() {
  const MySwal = withReactContent(Swal)
  let navigate = useNavigate();
 
  const [lokasi_tower, setLokasiTower] = useState("");
  const [lokasi_detail, setLokasiDetail] = useState("");
  const [unit_kerusakan, setUnitKerusakan] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const [analisa_masalah, setAnalisaMasalah] = useState("");
  const [solusi, setSolusi] = useState("");
  const [requester_name, setRequesterName] = useState("");
  
  const [kesimpulan, setKesimpulan] = useState("");




function postData() {
  axios.post('https://hris.mncplay.id/property/api/bms/post/request/action', {
    lokasi_tower : lokasi_tower,
    lokasi_detail : lokasi_detail,
    unit_kerusakan : unit_kerusakan,
    keluhan : keluhan,
    analisa_masalah : analisa_masalah,
    solusi : solusi,
    kesimpulan : kesimpulan,
    kesimpulan : kesimpulan,
    requester_name: requester_name 
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
      {/* <Text fontSize="lg" fontWeight="bold"></Text> */}
          <FormControl.Label mt="2" >Lokasi Penanganan Masalah </FormControl.Label>
                  <Select
            minWidth="200"
            placeholder="Keterangan"
            mt="1"
            onValueChange={(itemValue) => {
              setLokasiTower(itemValue)
            }}
          >
            <Select.Item label="MNC Tower" value="MNC Tower" />
            <Select.Item label="Regional Mampang" value="Regional Mampang" />
          </Select>

          <FormControl.Label mt="3">MNC Tower Site</FormControl.Label>
          <Select
            minWidth="200"
            placeholder="Keterangan"
            mt="1"
            onValueChange={(itemValue) => {
              setLokasiDetail(itemValue)
            }}
          >
            <Select.Item label="Lantai 11" value="Lantai 11" />
            <Select.Item label="Lantai 12A" value="Lantai 12A" />
            <Select.Item label="Lantai 14" value="Lantai 14" />
            <Select.Item label="MNC Plaza" value="MNC Plaza" />
          </Select>

          <FormControl.Label mt="3">Pilih unit kerusakan yang dikerjakan saat ini</FormControl.Label>
          <Select
            minWidth="200"
            placeholder="Keterangan"
            mt="1"
            onValueChange={(itemValue) => {
              setUnitKerusakan(itemValue)
            }}
          >
            <Select.Item label="Transformator" value="Transformator" />
            <Select.Item label="Genset" value="Genset" />
            <Select.Item label="Sistem Hydrant" value="Sistem Hydrant" />
            <Select.Item label="Panel Listrik" value="Panel Listrik" />
            <Select.Item label="Sistem Suplai Air Bersih" value="Sistem Suplai Air Bersih" />
            <Select.Item label="Fan/Exhaust Fan" value="Fan/Exhaust Fan" />
            <Select.Item label="AVR/Capacitor Bank" value="AVR/Capacitor Bank" />
            <Select.Item label="APAR" value="APAR" />
            <Select.Item label="Septic Tank" value="Septic Tank" />
            <Select.Item label="Air Conditioner" value="Air Conditioner" />
            <Select.Item label="Terlpon & PABX Telpon" value="Terlpon & PABX Telpon" />
            <Select.Item label="Sistem Elevator" value="Sistem Elevator" />
          </Select>

          <FormControl.Label mt="3">Keluhan / Masalah</FormControl.Label>
          {/* <Input type="text" keyboardType="numeric"  placeholder="Meteran"   onBlur={e => setMseteran(e.target.value)}/> */}
          <TextArea h={20} placeholder="Keluhan / Masalah"  onBlur={e => setKeluhan(e.target.value)} />

          <FormControl.Label mt="3">Analisa Masalah / Penyebab Masalah</FormControl.Label>
          {/* <Input type="text" keyboardType="numeric" placeholder="Meteran"   onBlur={e => setMetseran(e.target.value)}/> */}
          <TextArea h={20} placeholder="Analisa Masalah / Penyebab Masalah"  onBlur={e => setAnalisaMasalah(e.target.value)} />

          <FormControl.Label mt="3">Aksi yang dilakukan / Solusi</FormControl.Label>
          {/* <Input type="text" keyboardType="numeric" placeholder="Meteran"   onBlur={e => setMesteran(e.target.value)}/> */}
          <TextArea h={20} placeholder="Aksi yang dilakukan / Solusi"  onBlur={e => setSolusi(e.target.value)} />



          <FormControl.Label mt="3">Kesimpulan</FormControl.Label>
          <Select
            minWidth="200"
            placeholder="Keterangan"
            mt="1"
            onValueChange={(itemValue) => {
              setKesimpulan(itemValue)
            }}
          >
            <Select.Item label="Butuh pembelian barang baru" value="Butuh pembelian barang baru" />
            <Select.Item label="Service rutinitas" value="Service rutinitas" />
          </Select>
         
          <FormControl.Label mt="3">Requester Name</FormControl.Label>
          {/* <Input type="text" keyboardType="numeric" placeholder="Meteran"   onBlur={e => setMesteran(e.target.value)}/> */}
          <TextArea h={20} placeholder="Requester Name"  onBlur={e => setRequesterName(e.target.value)} />






          <Button mt="5"  mb="5" onPress={postData} colorScheme="success">
          Submit
        </Button>
  
        </Stack>
      </FormControl>
  
  
  
    </Box>
  );
}


export default AHU;
