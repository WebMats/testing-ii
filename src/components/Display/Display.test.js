import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Display from './Display';
import 'jest-dom/extend-expect'


afterEach(cleanup) 

test('should display the count of balls and strikes for the at-bat', () => {
  const playerDisplayed = { name: 'player2', balls:0, strikes:0 , atBat: true };
  const { getByTestId } = render(<Display player={playerDisplayed} />);
  const ballCount = getByTestId(/ball-count/i);
  const strikeCount = getByTestId(/strike-count/i);
  expect(+strikeCount.textContent).toEqual(playerDisplayed.strikes);
  expect(+ballCount.textContent).toEqual(playerDisplayed.balls);
})

test('should be updated when user records activity on Dashboard', () => {
    const playerDisplayed = { name: 'player2', balls:0, strikes:0 , atBat: true };
    const { getByTestId, rerender } = render(<Display player={playerDisplayed} />);
    const ballCount = +getByTestId(/ball-count/i).textContent;
    const strikeCount = +getByTestId(/strike-count/i).textContent;
    const updatedPlayerDisplayed = { name: 'player2', balls:2, strikes:1 , atBat: true };
    rerender(<Display player={updatedPlayerDisplayed} />)
    const updatedBallCount = +getByTestId(/ball-count/i).textContent;
    const updatedStrikeCount = +getByTestId(/strike-count/i).textContent;
    expect(updatedBallCount).toEqual(ballCount + 2);
    expect(updatedStrikeCount).toEqual(strikeCount + 1);
})