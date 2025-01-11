import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PeopleList from './PeopleList';
import { people } from '../mock/person.mock';



describe('<PeopleList />', () => {
    it('Should render a list of products', () => {
        render(<PeopleList people={people} />);
        const products = screen.getAllByRole('listitem');
        
        expect(products).toHaveLength(4);
    });

    it('should match snapshot', () => {
        render(<PeopleList people={people} />);
        expect(screen.getByRole('list')).toMatchSnapshot();
    });
});