import React from 'react';
import styled from 'styled-components'

import Carousel from './Carousel/Carousel';

const Item = styled.div`
  background: darkorange;
  text-align: center;
  padding: 50px;
  color: white;
`
const App = () => (
  <div>
    <Carousel
      title="Carousel"
    >
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 4</Item>
    </Carousel>
  </div>
);



export default App;
