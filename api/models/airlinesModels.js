import airlines from '../data/airlines.js';

// new Class
class ArilinesModel {

    // get
    getAllAirlines(){
        return airlines;
    }
}
export default new ArilinesModel();