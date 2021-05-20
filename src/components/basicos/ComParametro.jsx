import React from 'react';

export default (props) => {
    // props é somente leitura!
    return (
        <>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </>
    );
}
