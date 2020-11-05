import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #fff;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const EclipseTop = styled.Image`
    top: -108px;
    height: 400px;
    width: 590px;
    margin-left: 0px;
`;

export const Logo = styled.Image`
    top: -60px;
    width: 136px;
    height: 43px;
`;

export const EclipseBottom = styled.Image`
    padding-bottom: 0px;
    height: 400px;
    width: 590px;
`;

export const ButtonRegister = styled.TouchableOpacity`
    width: 273px;
    height: 46px;
    border: 0;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    
    background-color: #000000;
    margin: 12px;
`;

export const TextRegister = styled.Text`
    color: #fff;
    size: 14px;
    font-weight: bold;
`;