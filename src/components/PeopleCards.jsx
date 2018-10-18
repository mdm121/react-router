import React from 'react';
import { Link } from 'react-router-dom';

const PeopleCards = (props) => {
    return (
        <div 
            className="card m-3 align-items-center justify-content-center text-align-center" 
            style={{width: '18rem', textAlign: 'center' }}>
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <h5 className="card-text" >{props.age}</h5>
                    <p className="card-text">{props.gender}</p>
                    <Link className="btn btn-danger" to={`/people/${props.id}`} >View My Profile!</Link>
                </div>
        </div>
    )
}

export default PeopleCards;