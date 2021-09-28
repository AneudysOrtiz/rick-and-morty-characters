import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('<Card/>', () => {
    it('Should render with data', () => {
        const defaultProps = { data: { name: 'Rick', image: '', status: 'Alive', species: '' } };
        render(<Card {...defaultProps} />);

        const nameLabel = screen.getByText(/rick/i);
        expect(nameLabel).toBeInTheDocument();

        const status = screen.getByText(/alive/i);
        expect(status).toBeInTheDocument();
    })
});
