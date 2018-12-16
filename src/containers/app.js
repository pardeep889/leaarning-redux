import React, {Component} from 'react';
import { connect } from "react-redux";
import { movieslist,dirList } from '../actions/index';
import { bindActionCreators } from "redux";
import MoviesList from '../components/moviesList'
class App extends Component {

    componentWillMount(){
        // console.log(this.props);
        this.props.movieslist();
        this.props.dirList();
    }
   
    render(){
        // console.log(this.props)
        return(
            <div>                
                <MoviesList {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        data: state.movies
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getMovies: () => {
//             dispatch(movieslist())
//         },
//         getdir: () => {
//             dispatch(dirList())
//         }
//     }
// }

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        movieslist,
        dirList
    },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(App);