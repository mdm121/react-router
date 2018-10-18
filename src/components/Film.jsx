import React from 'react';

class Film extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            film: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(film => {
                this.setState({ film })
            })
    }

    render() {

        return(
            <div 
                className="card m-3 align-items-center justify-content-center text-align-center" 
                style={{width: '18rem', textAlign: 'center' }}>
                <div className="card-body">
                    <h4 className="card-title">{this.state.film.title}</h4>
                    <h5 className="card-text" 
                        id="director">{`Director: ${this.state.film.director}`}</h5>
                    <h5 className="card-text">{`Producer: ${this.state.film.producer}`}</h5>
                    <h6 className="card-text" type="text" >{`Released: ${this.state.film.release_date}`}</h6>
                    <h6 className="card-text">{`Score: ${this.state.film.rt_score}`}</h6>
                    <p className="card-text">{this.state.film.description}</p>
                </div>
            </div>
        )
    }
}

export default Film;