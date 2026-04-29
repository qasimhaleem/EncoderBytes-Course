import React, {useState, useEffect} from 'react'

const Home = () => {
    const [records, setRecords] = useState([])
        async function getData() {
            const rec = await fetch('https://api.github.com/users')
            const data = await rec.json();
            setRecords(data)
        }
    useEffect(()=> {   
        getData();
        }
    ,[])
    console.log(records)
  return (
    <>

   <div className="flex flex-col mt-8">
  <div className="py-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
      <div className="overflow-hidden border border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {records.map((items) => {
            return(
            
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                {items.id}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                {items.login}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                {items.node_id}
              </td>
            </tr>
            );
            }) }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    {/* {records.map((any) => {
        console.log(any.login)
    })} */}
    
    
    </>
  )
}

export default Home