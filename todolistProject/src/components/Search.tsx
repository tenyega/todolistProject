
export default function Search() {

  // const [searchTxt, setSearchTxt] = useState('');
  // const [datas, setDatas] = useState([]);
  // const [compteurMot, SetCompteurMot] = useState(0);
    const handleChange = async(e: { target: { name: any; value: any; }; }) => {
        const value = e.target.value;
        console.log(value)


            // const url = `http://localhost:3000/todo`;
          

  
              // const res = await fetch(url);
              // setDatas(await res.json()) ;
        
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
      
        {/* <p>On a trouvé {compteurMot} mot</p> */}
       
        </>
    )
}