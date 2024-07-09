import { Key, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { NavLink } from "react-router-dom";

export default function Important() {

    const [resToDo, setResToDo] = useState([]);
    let compteur = 1;
    useEffect(() => {
        //Runs only on the first render
        async function fetchData() {
            try {
                const response = await fetch('/db.json/todo');
                const datas = await response.json(); 
                if (datas) {
                    setResToDo(datas);

                }
            } catch (err) {
                setResToDo([]);
            }
        }
     fetchData();  
     }, []);
  
        
    return (<>
        <NavBar />
        
        <h1 className="text-center">Welcome to Important Tasks </h1>
        <div className="flex  flex-col gap-5 px-5 py-10 ">
          
          <div className="flex flex-row items-center justify-center min-h-screen gap-5 px-5 py-20 bg-gray-100 flex-wrap">
  
            {resToDo.map((data: { id: Key | null | undefined, title: string, date: string, desc: string, priority: string, status: string })  =>
                data.priority === 'high' ? (
                   
                    <div
                    key={data.id}
                    className="w-full max-w-md p-5 text-center bg-white border rounded-lg shadow-md border-neutral-300">
                        <h4 className="mb-2 text-xl font-semibold text-gray-800">
                            {data.title}
                        </h4>
                        <h3 className="mb-1 text-gray-600 text-md"> {data.date}</h3>
                            <h3 className="text-gray-600 text-md">Description: {data.desc}</h3>
                            <h3 className="text-gray-600 text-md">Priority: {data.priority}</h3>
                            <h3 className="text-gray-600 text-md">Status: {data.status}</h3>
                            <NavLink data-info={data.id} to="/edit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Edit</NavLink>
                        <NavLink data-info={data.id} to="/delete" className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">Delete</NavLink>
                        <h2> { compteur++}</h2>

                    </div>
                   
                ) : null
              )}
            </div>
            </div>
    </>)
}