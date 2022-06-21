import HomePage from '../../pages/HomePage';
import { getByText, render, screen } from '@testing-library/react';
import { TeeRexState } from '../../context';
import { mockProducts } from '../../mock_constants';

jest.mock('../../context', () => ({
  ...jest.requireActual('../../context'),
  TeeRexState: jest.fn(() => {}),
  filterDispatch: jest.fn(),
}));

describe('<HomePage />', () => {
  it('should render <Filters/>', () => {
    TeeRexState.mockReturnValue({
      state: { products: [] },
      filtersState: { searchQuery: '' },
    });
    const { getByText } = render(<HomePage />);
    expect(getByText('Colors')).toBeInTheDocument();
  });

  it('should display message loading products when there are no products to display', () => {
    TeeRexState.mockReturnValue({
      state: { products: null },
      filtersState: { searchQuery: '' },
    });

    render(<HomePage />);
    // console.log(render(<HomePage />))
    expect(screen.getByText('Loading products...')).toBeInTheDocument();
  });

  it('should not break when searchQuery is null', () => {
    TeeRexState.mockReturnValue({
      state: { products: mockProducts },
      filtersState: { searchQuery: null },
    });
    const { queryAllByTestId } = render(<HomePage />);
    expect(queryAllByTestId('test-product-item').length).toEqual(3);
  });

  it('search should filter products by search word', () => {
    TeeRexState.mockReturnValue({
      state: { products: mockProducts },
      filtersState: { searchQuery: 'red' },
    });
    const { queryAllByTestId } = render(<HomePage />);
    expect(queryAllByTestId('test-product-item').length).toEqual(1);
  });

  it('search ');

  it('to match snapshot', () => {
    TeeRexState.mockReturnValue({
      state: { products: mockProducts },
      filtersState: { searchQuery: null },
    });

    const { container } = render(<HomePage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
