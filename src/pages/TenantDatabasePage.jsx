import React from 'react'

const TenantDatabasePage = () => {

    const data = [
        { id: 89746474874, name: 'John Doe', age: 28, gender: 'Male', dateCreated: 'Jan 4, 2024', apartmentName: 'The corner store' },
        { id: 89746474873, name: 'Jane Smith', age: 32, gender: 'Female', dateCreated: 'Jan 4, 2024', apartmentName: 'Mountain store' },
        { id: 89746474872, name: 'John Doe', age: 28, gender: 'Male', dateCreated: 'Jan 4, 2024', apartmentName: 'Apt 1' },
        { id: 89746474871, name: 'Jane Smith', age: 32, gender: 'Female', dateCreated: 'Jan 4, 2024', apartmentName: 'Apt 2' },
        { id: 89746474870, name: 'John Doe', age: 28, gender: 'Male', dateCreated: 'Jan 4, 2024', apartmentName: 'Apt 1' },
        { id: 89746474869, name: 'Jane Smith', age: 32, gender: 'Female', dateCreated: 'Jan 4, 2024', apartmentName: 'Apt 2' },
        
        // Add more users here...
      ];
    
  return (
    <div className='w-[1920px] m-14 h-[800px]'>
        <div className='font-semibold text-2xl mb-10'>Tenants Database</div>
        <div className="overflow-x-auto ">
          <table className="divide-y divide-gray-200 w-full">
            <thead className="bg-white">
              <tr>
                <th className="px-6 py-3 text-left text-lg font-medium  text-black tracking-wider">User ID</th>
                <th className="px-6 py-3 text-left text-lg font-medium text-black  tracking-wider">User Name</th>
                <th className="px-6 py-3 text-left text-lg font-medium text-black tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-lg font-medium text-black  tracking-wider">Gender</th>
                <th className="px-6 py-3 text-left text-lg font-medium text-black  tracking-wider">Date Created</th>
                <th className="px-6 py-3 text-left text-lg font-medium text-black  tracking-wider">Apartment Name</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 w-full">
              {data.map((user, index) => (
                <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-500">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">{user.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">{user.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">{user.dateCreated}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">{user.apartmentName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default TenantDatabasePage