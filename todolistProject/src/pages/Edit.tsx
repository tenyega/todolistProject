import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useEffect, useState } from 'react';

interface ResToDo {
    id: number;
    title: string;
    date: Date;
    desc: string;
    priority: string;
    status: string;
}

export default function Edit() {
    let params = useParams();
    

    
    const [resToDo, setResToDo] = useState<ResToDo |any>({});
    useEffect(() => {
        //Runs only on the first render
     
          
        async function fetchData() {
            try {
                const response = await fetch('/db.json/todo'+params.id);
                const datas = await response.json(); 
                if (datas) {
                    setResToDo(datas);

                }
            } catch (err) {
                // setResToDo([]);
            }
        }
     fetchData();


         console.log('datas ', JSON.stringify(resToDo))
 
    }, []);
  


    const submit = async (e:any) => {
        e.preventDefault();        try {
            const response = await fetch('/db.json/todo'+params.id,{
                method: 'DELETE',
                body: JSON.stringify(resToDo),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const datas = await response.json(); 
            if (datas) {
                setResToDo(datas);
            }
        } catch (err) {
            // setResToDo();
        }
    }

    const misejaour = async () => {
      


        try {
        const response = await fetch('/db.json/todo'+params.id,{
                method: 'PUT',
                body: JSON.stringify(resToDo)

        });
        const datas = await response.json(); 
        if (datas) {
            setResToDo(datas);
            

        }
    } catch (err) {
        setResToDo([]);
    }
}

   

   return (
    <>
        <NavBar />

        <div className="flex flex-col items-center">
            <h1 className="text-center text-2xl font-bold mb-5">
                Inside Edit page {params.id}
            </h1>
            {resToDo ? ( resToDo.title!='' &&
                <div className="flex flex-col items-start gap-5 px-5 py-10 border border-gray-300 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold">To-Do Details:</h2>
                    <p><strong>Title:</strong> {resToDo.title}</p>
                    <p><strong>Description:</strong> {resToDo.desc}</p>
                    <p><strong>Status:</strong> {resToDo.status}</p>
                    <button   onClick={submit} type="submit" className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Delete</button>

                </div>
            ) : (
                <p className="text-center">Loading...</p>
            )}

<h2 className="text-xl font-semibold mt-10">Edit</h2>
            <form className="flex flex-col gap-4 mt-5 w-full max-w-md" onSubmit={misejaour}>
                <div className="flex flex-col">
                    <label htmlFor="title" className="mb-1">Title</label>
                    <input type="text" name="title" id="title" className="border border-gray-300 rounded px-2 py-1"  value={resToDo.title}               onChange={(e) => setResToDo({ ...resToDo, title: e.target.value })}

 />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="desc" className="mb-1">Description</label>
                    <textarea id="desc" name="desc" className="border border-gray-300 rounded px-2 py-1"  value={resToDo.desc}  onChange={(e) => setResToDo({ ...resToDo, desc: e.target.value })} ></textarea>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="status" className="mb-1">Statut</label>
                    <select name="status" id="status" className="border border-gray-300 rounded px-2 py-1">
                        <option value="pending">pending</option>
                        <option value="End">completed</option>
                    </select>
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Mettre à jour la modification</button>
            </form>
        </div>
        
    </>
);
}