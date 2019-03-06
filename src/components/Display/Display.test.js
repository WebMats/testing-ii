import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect'
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import Display from './Display';



configure({adapter: new Adapter()})
let wrapper, playerDisplayed;
beforeEach(() => {
  playerDisplayed = { name: 'player2', balls:0, strikes:0 , atBat: true };
  wrapper = shallow(<Display  player={playerDisplayed}/>)
})

test('should display the count of balls and strikes for the at-bat', () => {
  const ballCount = wrapper.find('span[data-testid="ball-count"]').getElement()
  expect(ballCount.props.children).toEqual(playerDisplayed.balls)
})

test('should be updated when user records activity on Dashboard', () => {
    const [ballCountBefore, strikeCountBefore] = wrapper.find('span').getElements();
    wrapper.setProps({player: {name: 'player2', balls:2, strikes: 1, atBat: true}})
    const ballCountAfter = wrapper.find('span[data-testid="ball-count"]').getElement()
    const strikeCountAfter = wrapper.find('span[data-testid="strike-count"]').getElement()
    expect(ballCountAfter.props.children).toEqual(ballCountBefore.props.children + 2);
    expect(strikeCountAfter.props.children).toEqual(strikeCountBefore.props.children + 1);
})




// afterEach(cleanup) 

// test('should display the count of balls and strikes for the at-bat', () => {

//   const { getByTestId } = render(<Display player={playerDisplayed} />);
//   const ballCount = getByTestId(/ball-count/i);
//   const strikeCount = getByTestId(/strike-count/i);
//   expect(+strikeCount.textContent).toEqual(playerDisplayed.strikes);
//   expect(+ballCount.textContent).toEqual(playerDisplayed.balls);
// })

// test('should be updated when user records activity on Dashboard', () => {
//     const playerDisplayed = { name: 'player2', balls:0, strikes:0 , atBat: true };
//     const { getByTestId, rerender } = render(<Display player={playerDisplayed} />);
//     const ballCount = +getByTestId(/ball-count/i).textContent;
//     const strikeCount = +getByTestId(/strike-count/i).textContent;
//     const updatedPlayerDisplayed = { name: 'player2', balls:2, strikes:1 , atBat: true };
//     rerender(<Display player={updatedPlayerDisplayed} />)
//     const updatedBallCount = +getByTestId(/ball-count/i).textContent;
//     const updatedStrikeCount = +getByTestId(/strike-count/i).textContent;
//     expect(updatedBallCount).toEqual(ballCount + 2);
//     expect(updatedStrikeCount).toEqual(strikeCount + 1);
// })


