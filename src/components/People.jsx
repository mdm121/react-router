import React from 'react';
import PeopleCards from './PeopleCards';

class People extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(obj => {
            this.setState({
                people: obj
            })
        })
    }

    renderPeople() {
        return this.state.people.map((person) => {
            return <PeopleCards 
                                key={person.id}
                                id={person.id} 
                                name={person.name} 
                                age={person.age}
                                gender={person.gender}
                                url={person.url} />;
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-wrap justify-content-around" id="showPeople">
                    { this.renderPeople() }
                </div>
            </React.Fragment>
        )
    }
}

export default People;