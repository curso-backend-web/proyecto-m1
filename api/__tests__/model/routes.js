import model from '../../model/routes.js';
import {expect, jest} from '@jest/globals';
import routes from '../../data/routes.json';

const mockRoutes = [{
    "departure_airport_iata": "BCN",
    "arrival_airport_iata": "CMN",
}]

test('getRoutesList should return mockRoutes with origin="BCN"', async ()=>{
    const spyRoutes = jest.spyOn(routes,'filter').mockImplementation(()=>mockRoutes)
    const result = await model.getRoutesList('BCN','');

    expect(spyRoutes).toHaveBeenCalled();
    expect(result).toBe(mockRoutes);
})