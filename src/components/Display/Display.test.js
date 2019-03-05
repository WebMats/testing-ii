import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Display from './Display';


test('should display the count of balls and strikes for the at-bat', () => {
  const playerDisplayed = { name: 'player2', balls:0, strikes:0 , atBat: true };
  const { getByText } = render(<Display player={playerDisplayed} />);
  const ballCount = getByText(/ball-count/i);
  const strikeCount = getByText(/strike-count/i);
  expect(+strikeCount.textContent).toEqual(playerDisplayed.strikes);
  expect(+ballCount.textContent).toEqual(playerDisplayed.balls);
})

test('should be updated when user records activity on Dashboard', () => {
    const playerDisplayed = { name: 'player2', balls:0, strikes:0 , atBat: true };
    const { getByText, rerender } = render(<Display player={playerDisplayed} />);
    const ballCount = +getByText(/ball-count/i).textContent;
    const strikeCount = +getByText(/strike-count/i).textContent;
    const updatedPlayerDisplayed = { name: 'player2', balls:2, strikes:1 , atBat: true };
    rerender(<Display player={updatedPlayerDisplayed} />)
    const updatedBallCount = +getByText(/ball-count/i).textContent;
    const updatedStrikeCount = +getByText(/strike-count/i).textContent;
    expect(updatedBallCount).toEqual(ballCount + 2);
    expect(updatedStrikeCount).toEqual(strikeCount + 1);
})