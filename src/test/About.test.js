import {render, screen} from '@testing-library/react'
import About from '../components/Login'

describe('Login Component', () => {

    test('Section is inside document', ()=> {
        render(<About />);
        const section = screen.getByTitle('main section');
        expect(section).toBeInTheDocument();
    });
});