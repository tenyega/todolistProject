import { Key, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Add from '../pages/Add';
import Tasks from '../pages/Tasks';


function ToDoList() {
    // const { search } = props;
     const [resToDo, setResToDo] = useState([]);
     useEffect(() => {
        //Runs only on the first render
     
          
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/todo');
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
    
    
     console.log(resToDo)
    const [components, setComponents] = useState<JSX.Element[]>([]);
    const [isVisible, setIsVisible] = useState(false);


     const addComponent = () => {
         setComponents([...components, <Add />]);
         (document.getElementById('btn') as HTMLButtonElement).disabled = true;
         (document.getElementById('btn') as HTMLButtonElement).style.backgroundColor = 'gray';
    }; 
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
        

  return (
      <>
      <div className="flex justify-center">
              <button id='btn' onClick={addComponent} className="px-4 py-2  gap-10  text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Add</button>
              <NavLink  to="/important" className="px-4  gap-10 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Important Tasks</NavLink>

          </div>
         
          <div className='float-center' onChange={toggleVisibility} > <Tasks /></div>
          <div>
              {components}
          </div>
        <div className="flex gap-5 px-5 py-10 ">
          
        <div className="flex flex-row items-center justify-center min-h-screen gap-5 px-5 py-20 bg-gray-100 flex-wrap">
                  {resToDo.map((data: { id: Key | null | undefined, title: string, date: string, desc: string, priority: string, status: string }) => (
                data.title!='' && (!isVisible)&&
                <div
                key={data.id}
                className="w-full flex flex-row max-w-md p-5  pl-10 text-center bg-white border rounded-lg shadow-md border-neutral-300">
                <h4 className="mb-2 text-xl pr-20 font-semibold text-gray-800">
                    {data.title}
                </h4>
                                 
                    <NavLink data-info={data.id} to="/edit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Edit</NavLink>
                    <NavLink data-info={data.id} to="/delete" className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">Delete</NavLink>

                </div>

            ))}
        </div>

    
    </div>
      
     
        </>
    );
}
export default ToDoList;