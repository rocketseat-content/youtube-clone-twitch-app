import React from 'react';
import { View } from 'react-native';

import { Wrapper, Container } from './styles';

import Header from '../../components/Header';

const Following: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
      </Container>
    </Wrapper>
  );
};

export default Following;
