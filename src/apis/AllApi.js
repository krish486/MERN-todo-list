import axios from "axios"


export let postApi = async (data) => {
    try {
        let res = await axios.post("https://mern-todo-list-ervs.onrender.com/api/lists/create", data)
        console.log("POST-API----->", res.data.data)
        return res.data.data
    }
    catch (err) {
        console.log("Error in PostAPI---", err)
    }
}



export let getDataApi = async () => {
    try {
        let res = await axios.get("https://mern-todo-list-ervs.onrender.com/api/lists")
        return res.data
    }
    catch (err) {
        console.log("Error in getDataApi---", err)
    }
}




export let updateDataApi = async (id, data) => {
    try {
        await axios.put(`https://mern-todo-list-ervs.onrender.com/api/lists/update/${id}`, data)
    }
    catch (err) {
        console.log("error in updateDataApi", err)
    }
}




export let deleteDataApi = async (id) => {
    try {
        await axios.delete(`https://mern-todo-list-ervs.onrender.com/api/lists/delete/${id}`)
    }
    catch (err) {
        console.log("Error in deleteDataAPI---", err)
    }
}
