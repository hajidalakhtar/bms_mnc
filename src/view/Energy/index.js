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

function Energy() {
  return (
    <Box>
    <Hero title="Indicator Panel"/>
    <Divider  bg="trueGray.200" height="1"  />
    <Content />
    </Box>
  );
}



function Content() {
  const MySwal = withReactContent(Swal)
  let navigate = useNavigate();
  const [ampere_low, setAmpereLow] = useState("");
  const [ampere_mid, setAmpereMid] = useState("");
  const [ampere_high, setAmpereHigh] = useState("");

  const [voltage_low, setVoltageLow] = useState("");
  const [voltage_mid, setVoltageMid] = useState("");
  const [voltage_high, setVoltageHigh] = useState("");


  const [desc_ligh_indicator, setLighIndicator] = useState("");
  const [desc_measure_indicator, setMeasureIndicator] = useState("");
  const [desc_selector_switch, setSelectorSwitch] = useState("");
  const [desc_push_buttom, setPushButtom] = useState("");
  const [desc_fuse, setFuse] = useState("");
  const [desc_wiring, setWiring] = useState("");
  const [desc_cableconnection, setCableconnection] = useState("");
  const [desc_control_system, setControlSystem] = useState("");
  const [desc_cleaning_body, setCleaningBody] = useState("");
  const [desc_all_component, setAllComponent] = useState("");
  const [desc_panel_painting, setPanelPainting] = useState("");
  const [desc_room, setRoom] = useState("");

function postData() {
  axios.post('https://hris.mncplay.id/property/api/bms/post/indicator/panel', {
    ampere_low : ampere_low,
    ampere_mid : ampere_mid,
    ampere_high : ampere_high,
    voltage_low : voltage_low,
    voltage_mid : voltage_mid,
    voltage_high : voltage_high,
    desc_ligh_indicator : desc_ligh_indicator,
    desc_measure_indicator : desc_measure_indicator,
    desc_selector_switch : desc_selector_switch,
    desc_push_buttom : desc_push_buttom,
    desc_fuse : desc_fuse,
    desc_wiring : desc_wiring,
    desc_cableconnection : desc_cableconnection,
    desc_control_system : desc_control_system,
    desc_cleaning_body : desc_cleaning_body,
    desc_all_component : desc_all_component,
    desc_panel_painting : desc_panel_painting,
    desc_room : desc_room,
  })
  .then(function (response) {
    console.log(response)
       window.location.href = 'https://bms-mnc.vercel.app/'; 
      return null;
  })
  .catch(function (error) {
    console.log(error);
    console.log('Error', error.message);
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
    maxWidth="100%" >
      
      <FormControl isRequired>
        <Stack mx="4">
      <Text fontSize="2xl" fontWeight="bold">Ampere</Text>

          <FormControl.Label mt="2" >Ampere Low</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Ampere Low"  id="ampere_low" onBlur={e => setAmpereLow(e.target.value)} />
   
          <FormControl.Label mt="3">Ampere Mid</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Ampere Mid"  id="ampere_mid" onBlur={e => setAmpereMid(e.target.value)}/>

          <FormControl.Label mt="3">Ampere High</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Ampere High"  id="ampere_high" onBlur={e => setAmpereHigh(e.target.value)}/>
        </Stack>
      </FormControl>
  

      <Box my="4"></Box>
      {/* <Divider  bg="trueGray.200" height="1" my="4" /> */}

      <FormControl isRequired>
        <Stack mx="4">
          <Text fontSize="2xl" fontWeight="bold">Voltage</Text>

          <FormControl.Label  mt="2" >Voltage Low</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Voltage Low" onBlur={e => setVoltageLow(e.target.value)}/>

          <FormControl.Label mt="3">Voltage Mid</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Voltage Mid" onBlur={e => setVoltageMid(e.target.value)}/>

          <FormControl.Label mt="3">Voltage High</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Voltage High" onBlur={e => setVoltageHigh(e.target.value)}/>
        </Stack>
      </FormControl>
  
      <Box my="4"></Box>
      











      <FormControl isRequired>
        <Stack mx="4">
          <Text fontSize="2xl" fontWeight="bold">Checking</Text>

          <FormControl.Label  mt="2" >Ligh Indicator</FormControl.Label>
          <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
          onValueChange={(itemValue) => {
            setLighIndicator(itemValue)
          }}
        >
          <Select.Item label="Hidup / Berfungsi" value="Berfungsi" />
          <Select.Item label="Mati / Tidak Berfungsi" value="Tidak Berfungsi" />
        </Select>

          <FormControl.Label mt="3">Measure Indicator</FormControl.Label>
               <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setMeasureIndicator(itemValue)
          }}
        >
          <Select.Item label="Hidup / Berfungsi" value="Berfungsi" />
          <Select.Item label="Mati / Tidak Berfungsi" value="Tidak Berfungsi" />
        </Select>

          <FormControl.Label mt="3">Selector Switch	</FormControl.Label>
               <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setSelectorSwitch(itemValue)
          }}
        >
          <Select.Item label="Berfungsi" value="Berfungsi" />
          <Select.Item label="Tidak Berfungsi" value="Tidak Berfungsi" />
        </Select>

          <FormControl.Label mt="3">Push Buttom	</FormControl.Label>
               <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setPushButtom(itemValue)
          }}
        >
          <Select.Item label="Berfungsi" value="Berfungsi" />
          <Select.Item label="Tidak Berfungsi" value="Tidak Berfungsi" />
        </Select>
          
          <FormControl.Label mt="3">Fuse	</FormControl.Label>
               <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setFuse(itemValue)
          }}
        >
          <Select.Item label="Berfungsi" value="Berfungsi" />
          <Select.Item label="Tidak Berfungsi" value="Tidak Berfungsi" />
        </Select>
          
          <FormControl.Label mt="3">Wiring	</FormControl.Label>
               <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setWiring(itemValue)
          }}
        >
          <Select.Item label="Ada" value="Ada" />
          <Select.Item label="Tidak Ada" value="Tidak Ada" />
        </Select>
          
          <FormControl.Label mt="3">Cable Connection	</FormControl.Label>
               <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setCableconnection(itemValue)
          }}
        >
          <Select.Item label="Terkoneksi" value="Terkoneksi" />
          <Select.Item label="Tidak Terkoneksi" value="Tidak Terkoneksi" />
        </Select>
          
          <FormControl.Label mt="3">Control System	</FormControl.Label>
               <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setControlSystem(itemValue)
          }}
        >
          <Select.Item label="Terkoneksi" value="Terkoneksi" />
          <Select.Item label="Tidak Terkoneksi" value="Tidak Terkoneksi" />
        </Select>

          
          <FormControl.Label mt="3">Cleaning Body	</FormControl.Label>
               <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setCleaningBody(itemValue)
          }}
        >
          <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

          
          <FormControl.Label mt="3">All Component	</FormControl.Label>
               <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setAllComponent(itemValue)
          }}
        >
          <Select.Item label="Terkoneksi" value="Terkoneksi" />
          <Select.Item label="Tidak Terkoneksi" value="Tidak Terkoneksi" />
        </Select>

          <FormControl.Label mt="3">Panel Painting	</FormControl.Label>
               <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setPanelPainting(itemValue)
          }}
        >
          <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

          <FormControl.Label mt="3">Area / Room	</FormControl.Label>
               <Select
          minWidth="200"
          placeholder="Keterangan"
          mt="1"
                   onValueChange={(itemValue) => {
            setRoom(itemValue)
          }}
        >
        <Select.Item label="Bersih" value="Bersih" />
          <Select.Item label="Tidak Bersih" value="Tidak Bersih" />
        </Select>

        <Button mt="5" mb="5" onPress={OpenAlert} colorScheme="success">
          Submit
        </Button>
        </Stack>
      </FormControl>

  
  
    </Box>
  );
}


export default Energy;


  