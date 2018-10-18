import React from 'react';
import FilmCards from './FilmCards';

class Films extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => {
            this.setState({
                films: obj
            })
        })
    }

    renderFilms() {
        return this.state.films.map((film) => {
            return <FilmCards 
                        key={film.id}
                        id={film.id} 
                        title={film.title} 
                        description={film.description}
                        rd={film.release_date}
                        score={film.rt_score}
                        producer={film.producer}
                        director={film.director} />
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-wrap justify-content-around" id="showFilms">
                    { this.renderFilms() }
                </div>
            </React.Fragment>
        )
    }
}

export default Films;