import React from 'react';
import eclipses from '../../images/eclipses.svg'
import eclipses2 from '../../images/eclipses2.svg'
import logo from '../../images/logo.svg'

import { Wrapper, Logo } from './style'

function Home () {
  return (
    <Wrapper>
      <Logo source={logo}/>
    </Wrapper>   
  );
}

export default Home;