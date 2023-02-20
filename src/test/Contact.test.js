import {render, screen} from '@testing-library/react'
import Contact from '../components/Contact'

describe('Contact Component', () => {

    test('Section is inside document', ()=> {
        render(<Contact />);
        const section = screen.getByTitle('main section');
        expect(section).toBeInTheDocument();
    });

    test('Map is inside document', ()=> {
        render(<Contact />);
        const divmap = screen.getByTitle('divmap');
        expect(divmap).toBeInTheDocument();
    });

    test('Address is inside document', ()=> {
        render(<Contact />);
        const paddress = screen.getByTitle('paddress');
        expect(paddress).toBeInTheDocument();
    });

    test('Link is inside document', ()=> {
        render(<Contact />);
        const amailaddress = screen.getByTitle('mailaddress');
        expect(amailaddress).toBeInTheDocument();
    });

    test('Form is inside document', ()=> {
        render(<Contact />);
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

});