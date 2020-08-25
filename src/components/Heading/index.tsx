import React from 'react';

import { Container, HeadingText } from './styles';

const Heading: React.FC = ({ children }) => {
  return (
    <Container>
      <HeadingText>{children}</HeadingText>
    </Container>
  );
};

export default Heading;
