import initializeButtonListener from './initializeButtonListener';

const updateCount = jest.fn();

describe('initializeButtonListener', () => {
  it('listens for click events', () => {
    document.body.innerHTML = '<button type="button" data-increment>Click Me!</button>';

    initializeButtonListener(updateCount);

    const button = document.querySelector('button');
    button?.click();

    expect(updateCount).toHaveBeenCalled();
  });
});
