import React from 'react';

class Person extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            person: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(person => {
                this.setState({ person })
            })
    }

    render() {
        return(
            <div 
                className="card m-3 align-items-center justify-content-center text-align-center" 
                style={{width: '18rem', textAlign: 'center' }}>
                <div className="card-body">
                    <h4 className="card-title">{this.state.person.name}</h4>
                    <h5 className="card-text" 
                        id="director">{`Gender: ${this.state.person.gender}`}</h5>
                    <h5 className="card-text">{`Age: ${this.state.person.age}`}</h5>
                    <h6 className="card-text" >{`Eye Color: ${this.state.person.eye_color}`}</h6>
                    <h6 className="card-text">{`Hair Color: ${this.state.person.hair_color}`}</h6>
                    <a className="card-text btn btn-warning m-3" 
                        href={this.state.person.url}>View My URL Profile</a>
                </div>
            </div>
        )
    }
}

export default Person;