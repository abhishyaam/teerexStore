import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../components';
import { TeeRexState } from '../../context';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
  useNavigate: jest.fn(),
}));

jest.mock('../../context', () => ({
  ...jest.requireActual('../../context'),
  TeeRexState: jest.fn(() => {}),
  filterDispatch: jest.fn(),
}));

beforeEach(() => {
  TeeRexState.mockReturnValue({ state: { cart: [] } });
});

describe('<Header /> ', () => {
  it('renders store name', () => {
    const header = render(<Header />);
    expect(screen.getByText('TeeRex Store')).toBeInTheDocument();
  });

  it('should render searchbox', () => {
    const header = render(<Header />);
    expect(screen.getByTestId('test-searchbox')).toBeInTheDocument();
  });

  //   it('should handle search event', () => {
  //     const { findByPlaceholderText, findByLabelText } = render(<Header />);
  //     const searchInput = findByLabelText('search');
  //     fireEvent.change(searchInput, { target: { value: 'test' } });
  //     expect(searchInput.value).toBe('test');
  //   });

  it('should match snapshot', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
