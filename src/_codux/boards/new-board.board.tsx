import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Heading Component',
    Board: () => (
        <div>
            <h1>This is a New Heading</h1>
        </div>
    ),
});
