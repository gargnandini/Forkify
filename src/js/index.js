// Global app controller//
import axios from 'axios';

async function getResults(query) {
    const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
    console.log(res);
}
getResults('pizza');