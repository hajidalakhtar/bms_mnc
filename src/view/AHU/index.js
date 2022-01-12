import * as React from 'react';
import Hero from "../../components/Hero";
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

  function postData() {
    let open = false;
    MySwal.fire({
      title: 'Uploading Data',
      // html: 'I will close in <b></b> milliseconds.',
      didOpen: () => {
        MySwal.showLoading()
        setInterval(() => {
          console.log('okee')
          if (open == false) {
            MySwal.fire({
              icon: 'success',
              title: 'Data berhasil disimpan',

            })
            setInterval(() => {
                MySwal.close()
                navigate('/');
            }, 1500)

            open = true
          }


        }, 2000)
      },
      willClose: () => {
        console.log("tutup")
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === MySwal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }
  
  return (
    <Box mt="3">
      
      <FormControl isRequired>
        <Stack mx="4">
      <Text fontSize="lg" fontWeight="bold">AHU</Text>

          <FormControl.Label mt="2" >Zona A</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Temperature" />
   
          <FormControl.Label mt="3">Zona B</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Temperature" />

          <FormControl.Label mt="3">Zona C</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Temperature" />
        
          <FormControl.Label mt="3">Zona D</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Temperature" />
        
          <Button mt="5"  onPress={postData} colorScheme="success">
          Submit
        </Button>
  
        </Stack>
      </FormControl>
  
  
  
    </Box>
  );
}


export default AHU;
