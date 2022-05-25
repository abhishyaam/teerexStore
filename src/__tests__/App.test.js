import { render } from '@testing-library/react';
import App from '../App';

jest.mock('react-router-dom');
jest.mock('../context', () => ({
  ...jest.requireActual('../context'),
  TeeRexState: jest.fn(() => {}),
}));

describe('<App/>', () => {
  it('should match snapshot', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
