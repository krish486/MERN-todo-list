import { deleteDataApi, postApi, updateDataApi } from "../apis/AllApi"

export const handleSubmit = async ({
    data,
    e,
    fetchData,
    setData,
    editId,
    setEditId
}) => {

    e.preventDefault();

    try {

        if (editId) {

            // UPDATE CONFIRM
            const isConfirm = window.confirm(
                "Do you really want to update this task?"
            );

            if (!isConfirm) return;

            await updateDataApi(editId, data);

            console.log("Updated Successfully");

        } else {

            // CREATE CONFIRM
            const isConfirm = window.confirm(
                "Do you want to create this task?"
            );

            if (!isConfirm) return;

            await postApi(data);

            console.log("Created Successfully");
        }

        // Refresh Data
        fetchData();

        // Reset Form
        setData({
            name: "",
            description: ""
        });

        // Reset Edit Mode
        setEditId(null);

    } catch (err) {
        console.log("Error in handleSubmit ->", err);
    }
};



export const deleteData = async (id, fetchData) => {
    try {

        const isConfirm = window.confirm(
            "Do you really want to delete this task?"
        );

        if (!isConfirm) return;

        const res = await deleteDataApi(id);

        console.log("Deleted Successfully");

        // refresh data
        fetchData();

    } catch (err) {
        console.log("Error in deleteData ->", err);
    }
};




export const updateData = async (id, fetchData, setData) => {
    try {

        const isConfirm = window.confirm(
            "Do you really want to update this task?"
        );

        if (!isConfirm) return;
        setData(data)

        await updateDataApi(id);

        console.log("UPDATE Successfully");

        // refresh data
        fetchData();

    } catch (err) {
        console.log("Error in deleteData ->", err);
    }
}