import React, { useState } from 'react';
import eclipsesTop from '../../images/eclipsesTop.svg'
import eclipsesBottom from '../../images/eclipsesBottom.svg'
import logo from '../../images/logo.svg'
import { Wrapper, Logo, ButtonRegister, TextRegister, EclipseTop, EclipseBottom } from './style';
import ButtonLogin from '../../components/ButtonLogin/index';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  
  function handleNavigateRegister() {
    navigation.navigate('Register');
  }

  return (
    <Wrapper>
      <EclipseTop source={eclipsesTop}/>
      <Logo source={logo}/>
      <ButtonLogin />
      <ButtonRegister onPress={handleNavigateRegister}>
        <TextRegister>Cadastrar-se</TextRegister>
      </ButtonRegister >
      <EclipseBottom source={eclipsesBottom} />
    </Wrapper>   
  );
}

export default Home;