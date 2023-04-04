import React from 'react';

import { Container, Header, Main, Footer, Cards } from '@components';
import { StyledSystemExample } from '@components/examples/styled-system';
import Pokemon from '@components/examples/pokemon';
import Counter from '@components/examples/counter';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      {/* <StyledSystemExample /> */}
      {/* <Pokemon /> */}
      <Counter />
      {/* <Main />
      <Cards /> */}
      <Footer />
    </Container>
  );
};

export default Home;
