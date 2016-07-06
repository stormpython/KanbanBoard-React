import React from 'react';
import KanbanBoard from './KanbanBoard';

let cardsList = [

];

React.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
