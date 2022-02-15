import React, { useState, useEffect } from 'react';
import Hero from "../../components/Hero";
import axios from "axios";
import { useParams } from 'react-router-dom';

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
    <Hero title="Requester"/>
    <Divider  bg="trueGray.200" height="1"  />
    <Content />
    </Box>
  );
}



function Content() {
  const MySwal = withReactContent(Swal)
  let navigate = useNavigate();
  const [area, setArea] = useState("");
  const [form_request_category, setFormRequestCategory] = useState([]);
  const [request_category, setRequestCategory] = useState("");
  const [request_data, setRequestData] = useState("");
  const params = useParams()


  useEffect(() => {
  axios.get('https://hris.mncplay.id/property/api/bms/get/request/category')
  .then(function (response) {
    setFormRequestCategory(response.data.data)
  })



  },[]);

function postData() {
  axios.post('https://hris.mncplay.id/property/api/bms/post/request', {
    user_id:params.user_id,
    area:area,
    request_category:request_category,
    request_data:request_data
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

          <FormControl.Label mt="2" >Area</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Location"   onBlur={e => setArea(e.target.value)}/>
{/*         
          <FormControl.Label mt="2" >Category</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Location"   onBlur={e => setRequestCategory(e.target.value)}/>
         */}


  <FormControl.Label mt="3">Category</FormControl.Label>
                  <Select
            minWidth="200"
            placeholder="Category"
            mt="1"
              onValueChange={(itemValue) => {
                      setRequestCategory(itemValue)
            }}
          >
          {form_request_category.map((item, i) => {     
           return (<Select.Item label={item.category_name} value={item.category_name} />) 
        })}
           
            {/* <Select.Item label="Tidak Bersih" value="Tidak Bersih" /> */}
         
         
          </Select>

          <FormControl.Label mt="2" >Request</FormControl.Label>
          <Input type="text" keyboardType="numeric" placeholder="Location"   onBlur={e => setRequestData(e.target.value)}/>
   
          <Button mt="5" mb="5" onPress={postData} colorScheme="success">
          Submit
        </Button>
        </Stack>
      </FormControl>
  
  
      {/* user_id:3171 */}





    </Box>
  );
}


export default AC;
