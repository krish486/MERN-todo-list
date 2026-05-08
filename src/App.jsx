import React, { useEffect } from 'react'
import List from './components/List'
import { handleSubmit } from './hooks/APIhooks'
import { useState } from 'react'
import { getDataApi } from './apis/AllApi'
import { deleteData } from './hooks/APIhooks'

const App = () => {
  const [data, setData] = useState({
    name: "",
    description: ""
  })


  const [editId, setEditId] = useState(null)

  const [dbData, setDbData] = useState([])


  const fetchData = async () => {
    let db = await getDataApi();
    setDbData(db.data);
  }

  useEffect(() => {

    fetchData();

  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-zinc-950 flex items-center justify-center p-6">
      <div className="h-[vh] w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left Section */}
        <div className="h-[90vh] bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <h1 className="text-5xl font-black text-white mb-3 tracking-tight">
            Todo List
          </h1>

          <p className="text-zinc-400 mb-8 text-lg">
            Organize your chaos. Humans really turned remembering tasks into a full-time industry.
          </p>

          <form onSubmit={e => handleSubmit({ data, e, fetchData, setData, editId, setEditId })} className="space-y-6">

            {/* Input */}
            <div className="flex flex-col gap-2">
              <label className="text-zinc-300 font-medium">
                Task Name
              </label>

              <input
                onChange={(e) => {
                  setData((prev) => ({ ...prev, name: e.target.value }))
                }}
                value={data.name}
                type="text"
                placeholder="Enter task name..."
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder:text-zinc-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 transition-all duration-300"
              />
            </div>

            {/* Textarea */}
            <div className="flex flex-col gap-2">
              <label className="text-zinc-300 font-medium">
                Description
              </label>

              <textarea
                onChange={(e) => {
                  setData((prev) => ({ ...prev, description: e.target.value }))
                }}
                value={data.description}
                placeholder="Enter task description..."
                rows="6"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder:text-zinc-500 outline-none resize-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all duration-300"
              ></textarea>
            </div>

            {/* Button */}
            <button
              className="w-full cursor-pointer bg-violet-600 hover:bg-violet-700 active:scale-[0.98] transition-all duration-300 text-white font-bold py-4 rounded-xl shadow-lg shadow-violet-900/30 border border-violet-500/20"
            >
              + Add Task
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="h-[90vh] bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 shadow-2xl overflow-hidden">

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              Tasks
            </h2>

            <span className="bg-violet-600/20 text-violet-400 px-4 py-2 rounded-full text-sm font-semibold border border-violet-500/30">
              {dbData?.length} Active
            </span>
          </div>

          <div className="h-[90%] bg-black p-6 rounded-xl">

            <div className="max-w-5xl mx-auto h-full">

              <div className="h-full overflow-y-auto pr-2 space-y-5 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">

                {dbData?.map((elem) => (
                  <List
                    key={elem._id}
                    data={elem}
                    fetchData={fetchData}
                    deleteData={deleteData}
                    setData={setData}
                    editId={editId}
                    setEditId={setEditId}
                  />
                ))}

              </div>

            </div>

          </div>
        </div>

      </div >
    </div >
  )
}

export default App
