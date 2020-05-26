import React from 'react';

const Hello = () => {

    return React.createElement('div', { id: '1', className: 'divElement' }, React.createElement('h1', null, 'Ovo je proba JSX'))
}
export default Hello