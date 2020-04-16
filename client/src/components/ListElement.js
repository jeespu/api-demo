import React from 'react';
// For generating keys to list elements, to get rid of React's warning
import { v1 as uuidv1 } from 'uuid';

const ListElement = (props) => {
    return (
        <li key={uuidv1()}>{props.children}</li>
    );
}

export default ListElement;