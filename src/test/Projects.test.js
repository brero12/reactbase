import {render, screen} from '@testing-library/react'
import Projects from '../components/Projects'

describe('Projects Component', () => {

    test('Section is inside document', ()=> {
        render(<Projects />);
        const section = screen.getByTitle('project section');
        expect(section).toBeInTheDocument();
    });

    test('Paragraph is inside document', ()=> {
        render(<Projects />);
        const psummary = screen.getByTitle('summary');
        expect(psummary).toBeInTheDocument();
    });

    test('Project Maped in this document', ()=> {
        render(<Projects />);
        const divmaper = screen.getByTitle('project maps');
        expect(divmaper).toBeInTheDocument();
    });

});