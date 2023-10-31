import React, { useState} from 'react';

const Encargado = React.createContext();
function Encargadofacu({children}) {
    const [encargado, setEncargado] = useState(null);
    return (
        <Encargado.Provider value={{encargado, setEncargado}}>
            {children}
        </Encargado.Provider>
    );
}

export default Encargadofacu