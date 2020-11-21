import React from 'react';
import Form from './common/form';
import {getMovie, saveMovie} from '../services/moviesServices';
import Joi from 'joi-browser';
import getGenres from '../services/genresServices';


class MovieForm extends Form {
    state = {
        data:{
            _id: '',
            title: '',
            genreId: '',
            numberInStock: '',
            dailyRentalRate: ''
        },
        genres: [],
        selectedGenre: '',
        errors: {},
    }
    schema = {
        _id: Joi.any(),
        title:Joi.string().required().label('Title'),
        genreId:Joi.string().required().label('Genre'),
        numberInStock:Joi.number().min(0).required().label('Stock'),
        dailyRentalRate:Joi.number().min(1).max(10).required().label('Rate'),
    }
    doSubmit=async ()=>{
        try {
            await saveMovie(this.state.data);
            this.props.history.push('/movies');
        }catch(ex)
        {
            if(ex.response && (ex.response.status>=400&&ex.response.status<500)) alert('something wrong');
        }
    }
    async componentDidMount(){
        const {movieid} = this.props.match.params;
        const {data} = await getGenres();
        this.setState({genres: [...data]});
        
        if(movieid) {
            const {data:result} = {...await getMovie(movieid)};
            let data = {...result};
            if(Object.keys(data).length===0) return this.props.history.replace('/notfound'); 
            data.genreId = data.genre._id;
            this.setState({selectedGenre:data.genreId})
            delete data.genre;
            this.setState({data });
        }
            
        
    }
    render() { 
        const {user} = this.props;
        const {genres, selectedGenre} = this.state;
        return ( 
            <form onSubmit = {this.handleSubmit} style = {this.styles}>
                <h1>Movie Form</h1>
                {this.renderInput('title', 'Title','text',!user)}
                {this.renderGroupSelect(genres, selectedGenre,'genreId','Genre', !user)}
                {this.renderInput('numberInStock', 'Stock','text',!user)}
                {this.renderInput('dailyRentalRate', 'Rate','text',!user)}
                {user&&this.renderButton('Save')}
            </form>
         );
    }
}
 
export default MovieForm;