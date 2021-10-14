import model from '../model/routes.js';

export const getRoutesListCtrl = async (req,res)=>{

    try {
        const {origin,destination} =req.query;
        
        const result = await model.getRoutesList(origin,destination);

        if(!result.length){
            throw new Error('no routes matching');
        } else {
            res.json(result);
        }

    } catch (error) {
        res.status(400).json({message: error.message});
    }

}