import User from "../models/userModels.js";

export const addUser = async (req, res) => {
    try {
        await User.create(req.body)
        res.status(201).json('member added')
    }catch(err){
        res.send(err.message);
    }
};