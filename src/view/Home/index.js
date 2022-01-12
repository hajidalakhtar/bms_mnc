import * as React from 'react';
import Hero from "../../components/Hero";
import Content from "../../components/Content";
import {
  Box,
  Divider,
} from 'native-base';

function Home() {
  return (
    <Box>
    <Hero title="Building Management System" isButton="false"/>
    <Divider  bg="trueGray.200" height="1" />
    <Content/>

  
    </Box>


  );
}


export default Home;
