import {render, screen} from '@testing-library/react'
import About from '../components/About'

describe('About Component', () => {

    test('Section is inside document', ()=> {
        render(<About />);
        const section = screen.getByTitle('main section');
        expect(section).toBeInTheDocument();
    });

    test('Greetings is inside document', ()=> {
        render(<About />);
        const h1 = screen.getByTitle('greetings');
        expect(h1).toBeInTheDocument();
    });

    test('Introduce is inside document', ()=> {
        render(<About />);
        const pintroduce = screen.getByTitle('introduce');
        expect(pintroduce).toBeInTheDocument();
    });

    test('Links are inside document', ()=> {
        render(<About />);
        const divlinks = screen.getByTitle('links');
        expect(divlinks).toBeInTheDocument();
    });

    test('Name are inside document', ()=> {
        render(<About />);
        const myname = screen.getByText(/Bryan/i);
        expect(myname).toBeInTheDocument();
    });

});