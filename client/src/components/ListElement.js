// Simple "list element" component

import React from 'react';
// For generating keys to list elements, to get rid of React's warning
import { v1 as uuidv1 } from 'uuid';

const ListElement = (props) => {
    return (
        <li style={style} key={uuidv1()}>{props.children}</li>
    );
}

const style = {
    fontSize: 18
}

export default ListElement;