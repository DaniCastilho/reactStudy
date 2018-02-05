import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBM4jiJ2GF8h7Ox794PBu0hS45VsSdQp7k';

//create a new component. This component should produce
//some HTML

const App = () => {
    return(
        <div>
            <SearchBar />
        </div>
    )  
};


//Take this component's generate HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
