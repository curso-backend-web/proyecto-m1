import request from 'supertest';
import { getRoutesListCtrl } from '../../controller/routes.js';
import router from '../../routes/routes.js';

describe('test api routes',()=>{
    test('should respond to /api/routes', async ()=>{
        const response = await request(router).get('/');

        expect(response.header['content-type']).toContain('application/json');
        expect(response.statusCode).toBe(200);
       //kk expect(router.get).toBeCalledWith('/',getRoutesListCtrl);
    })

})