import React from 'react';
import { Button, Text } from './style';
import { useNavigation } from '@react-navigation/native';

function ButtonLogin() {
  const navigation = useNavigation();

  function handleNavigateLogin() {
    navigation.navigate('Login');
  }

  return (
     <Button onPress={handleNavigateLogin}>
       <Text>Entrar</Text>
     </Button>  
  );
}

export default ButtonLogin;
