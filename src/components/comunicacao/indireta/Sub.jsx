import React from 'react';

export default (props) => {
    function acao() {
        props.clicar(Math.random(), 'Gerado');
    }

    return (
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    );
};
