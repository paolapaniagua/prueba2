import React, {useState}  from 'react';
import Workspace from '../../components/workspace/Workspace';
import TrushBin from '../../components/TrushBin/TrushBin';

const Home = () => {

//definir state
const [mostrarboard, mostrarBoard] = useState(true);

    return(
        <React.Fragment>
            {mostrarboard ? 
                (<Workspace
                    mostrarBoard={mostrarBoard}
                />) 
                : 
                (<TrushBin
                    mostrarBoard={mostrarBoard}
                />)}
                )
        </React.Fragment>
    )
}

export default Home;