import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Indicator from './Indicator'

const FullWrapper = styled.div`
  display: flex;
`

const Button = styled.button`
  height: 30px;
`

const CarouselContainer = styled.div`
  display: flex;
  margin: 0 0 20px 20px;
`
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`
const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  order: ${(props) => props.order};
`

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0,
      direction: 'next',
      sliding: false
    }
  }

  getOrder(itemIndex) {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  nextSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
  }

  prevSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
  }

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    })
    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50)
  }

  render() {
    const { title, children } = this.props
    const { position } = this.state

    return (
      <div>
        <h2>{title}</h2>
        <FullWrapper>
          <Button onClick={() => this.prevSlide()}>Back</Button>
          <Wrapper>
            <CarouselContainer>
              {children.map((child, index) => (
                <CarouselSlot
                  key={index}
                  order={this.getOrder(index)}
                >
                  {child}
                </CarouselSlot>
              ))}
            </CarouselContainer>
          </Wrapper>

          <Button onClick={() => this.nextSlide()}>Next</Button>
        </FullWrapper>

        <Indicator
          length={children.length}
          position={position}
        />

      </div>
    )
  }
}
Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};
export default Carousel;