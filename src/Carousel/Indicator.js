import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
const Container = styled.div`
  margin-bottom: 20px;
  margin-top: -20px;
`
const Dots = styled.span`
  background: ${(props) => (props.isCurrent) ? 'darkorange' : 'gainsboro'};
  width: 60px;
  height: 5px;
  margin-right: 5px;
  display: inline-block;
  transition: background 0.5s ease;
  cursor: pointer;
`
class Indicator extends Component {
  render() {
    const { length, position } = this.props
  return (
      <Container>
        {
          Array.from({ length }, (pip, i) => 
            (<Dots
              key={ i }
              isCurrent={ i === position }
            />)
          )
        }
      </Container>
    )
  }
}
Indicator.propTypes = {
  length: PropTypes.number,
  position: PropTypes.number
};
export default Indicator;