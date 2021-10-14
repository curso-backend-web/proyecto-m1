import { getRoutesListCtrl } from "../../controller/routes.js";
import model from '../../model/routes.js';
import {jest} from '@jest/globals';

let modelSpy = jest.spyOn(model,'getRoutesList');

describe('test routes controller',() =>{
    let mockRequest, mockResponse, mockNext;
    beforeEach(()=>{
        mockRequest = {query:{origin:"SVO", destination:"BCN"}};
        mockResponse = { status: jest.fn().mockReturnThis(), json: jest.fn()}
        mockNext = jest.fn();
    })
    afterEach(()=>{
        jest.resetAllMocks();
    })
    test('getRoutesListCtrl should return json', async ()=>{
        await getRoutesListCtrl(mockRequest,mockResponse);

        expect(mockResponse.json).toHaveBeenCalledTimes(1);
    });
    
    test('getRoutesList should be called with params', async () =>{
        await getRoutesListCtrl(mockRequest,mockResponse);

        expect(modelSpy).toHaveBeenCalledWith('SVO','BCN');
    })

    test('getRoutesListCtrl should throw an error with message "no routes matching" when result length is 0',
         async () =>{
             try {
                modelSpy.mockImplementation(()=>Promise.resolve([]));
                await getRoutesListCtrl(mockRequest,mockResponse); 

             } catch (error) {
                 expect(error).toStrictEqual(Error("no routes matching"));
             }
         })
    test('should return status code 400 if result length is 0', async ()=>{
        modelSpy.mockImplementation(()=>Promise.resolve([]));
        await getRoutesListCtrl(mockRequest,mockResponse); 
        expect(mockResponse.status).toHaveBeenCalledWith(400);
    } )

})

