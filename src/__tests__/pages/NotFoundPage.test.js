import { render, screen } from '@testing-library/react';
import NotFoundPage from '../../pages/NotFoundPage';

describe('<NotFoundPage />', () => {
  it('should render', () => {
    const { container, queryByText } = render(<NotFoundPage />);
    expect(queryByText('404 Page Not Found')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<NotFoundPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
