import { math } from '.';
import {
  add2Plus2Page, subtract2Minus2Page, multiply2Times2Page, divide2DividedBy2Page,
} from '../js/test-helpers/fixtures/layout';

describe('math page', () => {
  it('renders the "add" page correctly', () => {
    expect(math('add', '2 + 2 = 4')).toEqual(add2Plus2Page);
  });

  it('renders the "subtract" page correctly', () => {
    expect(math('subtract', '2 - 2 = 0')).toEqual(subtract2Minus2Page);
  });

  it('renders the "multiply" page correctly', () => {
    expect(math('multiply', '2 &times; 2 = 4')).toEqual(multiply2Times2Page);
  });

  it('renders the "divide" page correctly', () => {
    expect(math('divide', '2 &divide; 2 = 1')).toEqual(divide2DividedBy2Page);
  });
});
