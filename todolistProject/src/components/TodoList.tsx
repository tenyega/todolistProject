import { Key, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Add from '../pages/Add';
import Tasks from '../pages/Tasks';
interface Data {
        id: number;
        title: string;
        date: Date;
        desc: string;
        priority: string;
        status: string;
    }
interface Datas {
    datas: Data[];
}
export default function ToDoList() {
    
    const [searchTxt, setSearchTxt] = useState('');
    const [components, setComponents] = useState<JSX.Element[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const [datas, setDatas] = useState<Datas | any>();

    const [shouldFetch, setShouldFetch] = useState(false);

    const [resToDo, setResToDo] = useState([]);
    
  
   
    
     useEffect(() => {
      //this code runs only when shouldFetch is true (false by default) which means we have typed something in our search bar        
        async function fetchData() {
            try {
                const response = await fetch('/db.json/todo');
                setDatas(await response.json()) ; 
                if (datas) {
                    setResToDo(datas);

                }
            } catch (err) {
                setResToDo([]);
            }
        }
         fetchData();
         //Sets the shouldFetch to false after each fetch data. 
         if (shouldFetch) {
            fetchData();
            setShouldFetch(false);
        }
    }, [shouldFetch]);
    
  
  
    // this functions adds the component Add to the main HomePage without routing it to a different page. 
    const addComponent = () => {
         // here the spread operator is used to expand the array 'components' into its individual elements.This ensures that when creating a new array, all existing elements of components are included.
         setComponents([...components, <Add />]);
         (document.getElementById('btn') as HTMLButtonElement).disabled = true;
         (document.getElementById('btn') as HTMLButtonElement).style.backgroundColor = 'gray';
    }; 


    // this fuction just set the visibility to true ones our radio button is changed. 
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        if (datas) {
            console.log('SearchtedString is ' +searchTxt)
            const filtered = datas.filter((item: { title: string; }) => item.title.toLowerCase().includes(searchTxt));
            setResToDo(filtered);
            console.log(resToDo)
        }
    }, [datas]);

    const handleChange = async(e: { target: { name: any; value: any; }; }) => {
        const value = e.target.value;
        setSearchTxt(value)
        setShouldFetch(true);
      
    }
 

  return (
      <>
    {/* display of search bar and assigning the value of the input to searchTxt at each hit */}
        <div className="absolute top-200 right-0 p-4">
            <input
            type="text"
            id="title"
            name="title"
            placeholder="Search the word"
            onChange={handleChange}
            className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
          {/* Two buttons at the header area of the Homepage to display the add and important button and it called the addComponent function which inturn adds the component Add to our homepage and at the same time disactives the button and changes its background color*/}
        <div className="flex justify-center">
            <button id='btn' onClick={addComponent} className="px-4 py-2  gap-10  text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Add</button>
            <NavLink  to="/important" className="px-4  gap-10 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Important Tasks</NavLink>

        </div>
         
          {/* Here the radio button for the tasks is rendred with a onchange Funtion  to change the variable isVisible to true */}
        <div className='float-center' onChange={toggleVisibility} > <Tasks /></div>
          
          {/* Here our Add component is rendred if present  */}
        <div>
              {components}
        </div>


          {/* This div containes the tags to show the main content of our homepage after verifying the condition if the data.title is not null and our isVisible is also  false   */}
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
                                    
                        <NavLink data-info={data.id} to={`/edit/${data.id}`} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Edit</NavLink>
                      
                    </div>

                ))}
            </div>
        </div>
      
     
        </>
    );
}
