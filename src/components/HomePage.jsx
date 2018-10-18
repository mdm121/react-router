import React from 'react';
import Logo from './assets/logo.png';

const HomePage = (props) => {
    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid justify-content-center">
                <img 
                className="card-img-top p-3" 
                src={Logo}
                alt="logo"
                style={{ width: "1100px", height: "400px" }} />
                <h1 className="d-flex justify-content-center display-4">Home Page</h1>
            </div>
        </React.Fragment>
    )

};

export default HomePage;
