import { home } from '.';
import { homePage } from '../js/test-helpers/fixtures/layout';

describe('home page', () => {
  it('renders the home page correctly', () => {
    expect(home()).toEqual(homePage);
  });
});
