import axios from "axios"


export let postApi = async (data) => {
    try {
        let res = await axios.post("http://localhost:3000/api/lists/create", data)
        console.log("POST-API----->", res.data.data)
        return res.data.data
    }
    catch (err) {
        console.log("Error in PostAPI---", err)
    }
}



export let getDataApi = async () => {
    try {
        let res = await axios.get("http://localhost:3000/api/lists")
        return res.data
    }
    catch (err) {
        console.log("Error in getDataApi---", err)
    }
}




export let updateDataApi = async (id, data) => {
    try {
        await axios.put(`http://localhost:3000/api/lists/update/${id}`, data)
    }
    catch (err) {
        console.log("error in updateDataApi", err)
    }
}




export let deleteDataApi = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/api/lists/delete/${id}`)
    }
    catch (err) {
        console.log("Error in deleteDataAPI---", err)
    }
}
