import React from 'react';

import { Container, Title, Photo } from './styles';

const Header: React.SFC = () => {
  return (
    <Container>
      <Title>Gosch, o Desenvolvedor</Title>
      <Photo src="/photo.png" aria-hidden />
    </Container>
  );
};

export default Header;
