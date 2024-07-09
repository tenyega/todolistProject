import  { useState } from 'react';

export default function MyForm() {
  
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState({
      title: '',
      date: '',
      desc: '',
      priority: '',
      status:''
  });

  //here at each change in the form input the value is taken in the pair of key, value and the value of the formdata is set with its current state and the new value. 
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const response = await fetch('https://localhost:3000/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setMsg('Task added successfully');
      // the task is added to the form vis Fetch in POST method and then the input fields of the form is cleared 
      setFormData({   title: '',
        date: '',
          desc: '',
          priority: '',
         status:''});
    } else {
      
      console.error('Form data submission failed');
    }
    console.log('Form data submitted:', formData);
  };

    return (
      <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">ADD NEW TASK</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">Description</label>
            <textarea
              id="desc"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
         </div>
          <div className='flex flex-row gap-5'>
        
            <div className='w-1/2'>
                <label className="block text-sm font-medium text-gray-700" htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value=""></option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
              
                </select>
            </div>
            <div className='w-1/2'>
                <label className="block text-sm font-medium text-gray-700" htmlFor="date">Status</label>
                      <input
                        
                  type="status"
                  id="status"
                  name="status"
                  value="pending"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      
                        disabled
                />
          </div>
    
          
          </div>
              


          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
              </button>
              {msg}
        </form>
      </div>
            </div>
            </>
  );
};


