import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Wrapper, ButtonReturn } from './style';
import returnButton from '../../images/return.svg';


function Login(){
  
  return(
    <Wrapper>
      <TouchableOpacity>
        <ButtonReturn source={returnButton}/>      
      </TouchableOpacity>
    </Wrapper>
  );
}

export default Login;