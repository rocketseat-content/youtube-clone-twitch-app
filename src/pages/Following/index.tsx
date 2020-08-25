import React from 'react';
import { Text } from 'react-native';

import { Wrapper, Container } from './styles';

const Following: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Text style={{ color: '#fff' }}>Following</Text>
      </Container>
    </Wrapper>
  );
};

export default Following;
