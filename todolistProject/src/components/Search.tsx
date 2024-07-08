import { useState } from "react";

export default function Search() {

    const [search, setSearch] = useState('');
    const handleChange = async(e: { target: { name: any; value: any; }; }) => {
        const value = e.target.value;
        console.log(value)


            const url = `http://localhost:3000/todo`;
          
          
             try{
              const res = await fetch(url);
              const data = await res.json();
        
          
              if (data.Response === 'False') {
                setSearch(' ');
              } else {
                setSearch(value)
              }
            } catch(err) {
             
              console.log(err);
            }
            
          
    
        }
     
    
    return (
        <>
        
  <div className="absolute top-0 right-0 p-4">
    <input
      type="text"
      id="title"
      name="title"
      placeholder="Search the word"
      onChange={handleChange}
      className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>

        </>
    )
}