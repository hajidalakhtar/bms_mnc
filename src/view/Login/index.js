import * as React from 'react';
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

function Login() {
  return (

    <Box mx="5" my="5">
      <Box
      alignSelf="center"
      width={375}
      maxWidth="100%">

         <Text fontSize="2xl" color="primary.500" bold>Login</Text>  
         <Text fontSize="sm" color="muted.400">Silahkan login mengunakan akan yang sudah terdaftar di aplikasi Circel</Text>  

         <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
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
        </FormControl>
        <Button mt="2" colorScheme="primary">
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            I'm a new user.{" "}
          </Text>
          <Link
            _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm",
            }}
            href="#"
          >
            Sign Up
          </Link>
        </HStack>
      </VStack>
      </Box>

    </Box>


  );
}


export default Login;
