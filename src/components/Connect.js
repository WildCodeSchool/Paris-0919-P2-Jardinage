import React from 'react';

import Modali, { useModali } from 'modali';

import SignIn from './SignIn'
import '../App.scss';

function Connect() {
    const [signInModal, toggleSignInModal] = useModali({
        centered: true,
        closeButton: true,
        animated: true,
    });

    return (
        <div id="connect">
            <ul>
                <li><h1>PlantMe</h1></li>
            </ul>
            <ul className="sign">
                <li><button className="Connect-signin" href="" onClick={toggleSignInModal}>Sign in</button></li>
                <li><a href="">Sign up</a></li>
            </ul>
            <Modali.Modal {...signInModal}>
                <SignIn />
            </Modali.Modal>
        </div>
    );
}

export default Connect;
