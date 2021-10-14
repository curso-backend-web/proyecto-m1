import cities from '../data/cities.js';

class cityModel{
    getCities(){
        return cities;
    }
}

export default new cityModel();