import React from 'react'

const List = ({ data, fetchData, deleteData, setData, editId, setEditId }) => {

    const handleEdit = (item) => {

        setData({
            name: item.taskName,
            description: item.description
        })

        setEditId(item._id)
    }


    return (
        <div className="space-y-5">

            {/* Card */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 hover:border-violet-500/40 transition-all duration-300 h-[125px] flex flex-col justify-between">

                <div className="flex items-start justify-between gap-4">

                    <div className="flex-1 overflow-hidden">
                        <h3 className="text-xl font-semibold text-white mb-2 truncate">
                            {data.taskName}
                        </h3>

                        <p className="text-zinc-400 leading-relaxed overflow-hidden text-ellipsis max-h-[96px]">
                            {data.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">

                        <button
                            onClick={() => {
                                handleEdit(data)
                            }}
                            className="cursor-pointer bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-lg transition-all duration-300"
                        >
                            Update
                        </button>

                        <button
                            onClick={() => {
                                deleteData(data._id, fetchData)
                            }}
                            className="cursor-pointer bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-all duration-300"
                        >
                            Delete
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
