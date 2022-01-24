import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {  saveAccountData ,selectCount} from '../../redux/Login'
import {
  Box,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  VStack,

  Text,
} from 'native-base';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = React.useState({});
  const dispatch = useDispatch()
  
  const validate = (response) => {
    // dispatch(increment())
    if (response.data.status != 404) {
      setErrors({
        ...errors,
        username: 'Name is required',
      });
      return false;
    } else if (response.data.status != 400) {
      setErrors({
        ...errors,
        password: 'Name is too short',
      });
      return false;
    }
    return true;
  };
  function LoginProcess() {
    // validate() ? console.log('Submitted') : console.log('Validation Failed');

    axios.post('https://hris.mncplay.id/property/api/bms/post/login', {
      email : email,
      password : password,
    })
    .then(function (response) {
      if(response.data.status == 200){
        // console.log(response.data.data)
        dispatch(saveAccountData(response.data.data))
        navigate("/")
      }else{
        validate(response);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (

  

    <Box mx="5" my="5">
      <Box
      mt="10"
      alignSelf="center"
      width={375}
      maxWidth="100%">

         <Text fontSize="2xl" color="primary.500" bold>Login </Text>  
         <Text fontSize="sm" color="muted.400">Silahkan login mengunakan akan yang sudah terdaftar di aplikasi Circel</Text>  

         <VStack space={3} mt="5">
        <FormControl isInvalid={'username' in errors}>
          <FormControl.Label>Email</FormControl.Label>
          <Input  onChange={e => setEmail(e.target.value)}/>
        <FormControl.ErrorMessage _text={{fontSize: 'xs', color: 'error.500', fontWeight: 500}}>Username tidak di temukan</FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={'password' in errors}>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" onChange={e => setPassword(e.target.value)}/>
          <FormControl.ErrorMessage _text={{fontSize: 'xs', color: 'error.500', fontWeight: 500}}>Password anda salah</FormControl.ErrorMessage>

        </FormControl>
        <Button mt="2" onPress={LoginProcess}  colorScheme="primary">
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
         
          <Link
            _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500",
            }}
            alignSelf="flex-end"
            mt="1"
          >
            Forget Password?
          </Link>
        </HStack>
      </VStack>
      </Box>

    </Box>


  );
}


export default Login;
