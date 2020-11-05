import React from 'react';
import eclipsesTop from '../../images/eclipsesTop.svg'
import eclipsesBottom from '../../images/eclipsesBottom.svg'
import logo from '../../images/logo.svg'
import { Wrapper, Logo, ButtonRegister, TextRegister, EclipseTop, EclipseBottom } from './style';
import ButtonLogin from '../../components/ButtonLogin/index';

function Home() {
  return (
    <Wrapper>
      <EclipseTop source={eclipsesTop}/>
      <Logo source={logo}/>
      <ButtonLogin />
      <ButtonRegister >
        <TextRegister>Cadastrar-se</TextRegister>
      </ButtonRegister >
      <EclipseBottom source={eclipsesBottom} />
    </Wrapper>   
  );
}

export default Home;