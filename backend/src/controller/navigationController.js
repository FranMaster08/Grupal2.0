const model = require('../model')
const navigationController ={
    getHome : async (req, res , next) => {
        try {   
            const results = await model.User.findAll()
            res.status(200).json(results)
        } catch (error) {
            res.status(400)
        }
    }
}

module.exports =navigationController