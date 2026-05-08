const ListModel = require("../models/list.model");




let createListController = async (req, res) => {
    try {
        let { name, description } = req.body;

        if (!name || !description) {
            return res.status(400).json({
                message: "All fields required"
            })
        }

        let newList = new ListModel({
            taskName: name,
            description,
        })

        await newList.save();

        return res.status(201).json({
            message: "List created successfully",
            data: newList,
        })

    }
    catch (err) {
        console.log("Error in API--->", err)
        res.status(500).json({
            message: "internal server error"
        })
    }
}


let getListController = async (req, res) => {
    try {

        let list = await ListModel.find();

        if (!list.length) {
            return res.status(204).json({
                message: "List fetched successfully",
                data: list,
            })
        }

        return res.status(200).json({
            message: "List fetched successfully",
            data: list,
        })

    }
    catch (err) {
        console.log("Error in API--->", err)
        res.status(500).json({
            message: "internal server error"
        })
    }
}


let updateListController = async (req, res) => {
    try {

        let listID = req.params.id;

        if (!listID) {
            return res.status(400).json({
                message: "list ID require"
            })
        }


        console.log("this is req-body", req.body)

        let { name, description } = req.body;

        if (!name || !description) {
            return res.status(400).json({
                message: "All fields required"
            })
        }

        let updatePost = await ListModel.findByIdAndUpdate(listID, {
            taskName: name,
            description,
        }, {
            new: true,
        });

        return res.status(201).json({
            message: "List Updated successfully",
            UpdatedData: updatePost,
        })

    }
    catch (err) {
        console.log("Error in API--->", err)
        res.status(500).json({
            message: "internal server error"
        })
    }
}


let deleteListController = async (req, res) => {
    try {

        let listID = req.params.id;

        if (!listID) {
            return res.status(400).json({
                message: "list ID require"
            })
        }


        await ListModel.findByIdAndDelete(listID)


        return res.status(201).json({
            message: "List deleted successfully",
        })

    }
    catch (err) {
        console.log("Error in API--->", err)
        res.status(500).json({
            message: "internal server error"
        })
    }
}





module.exports = {
    createListController,
    getListController,
    updateListController,
    deleteListController
}