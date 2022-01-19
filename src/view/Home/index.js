import React, { useEffect } from 'react';
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import Content from "../../components/Content";
import {
  Box,
  Divider,
} from 'native-base';
import {  selectCount} from '../../redux/Login'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


function Home() {
  let navigate = useNavigate();

  const auth = useSelector(selectCount)
  // console.log()
  useEffect(() => {
    if(auth.username == null){
      navigate("/login")
    }
  });
  return (
    <Box>
      <Header name={auth.username}/>
    <Hero title="Building Management System" isButton="false"/>
    <Divider  bg="trueGray.200" height="1" />
    <Content/>

  
    </Box>


  );
}


export default Home;
