import React from 'react';
import Aux from '../../hoc/Auxiliary';
const Layout = (props) =>(
    <Aux>
        <div>
            toolbar ,sidebar,backdrop
        </div>
        <main>
            {props.children}
        </main>

    </Aux>
    
);
export default Layout;