// import React, { useEffect, useState } from 'react';

// export default function Staff() {
//   const [staffData, setStaffData] = useState([]);

//   // Fetch the staff details when the component loads
//   useEffect(() => {
//     const fetchStaffDetails = async () => {
//       try {
//         const response = await fetch('/api/staff'); // Adjust the API route if needed
//         const data = await response.json();
//         setStaffData(data);
//       } catch (error) {
//         console.error('Error fetching staff data:', error);
//       }
//     };

//     fetchStaffDetails();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-5xl font-bold text-purple-900 text-center mb-8">Staff List</h1>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg">
//           <thead>
//             <tr className="bg-purple-800 text-white">
//               <th className="py-3 px-6 text-left">ID</th>
//               <th className="py-3 px-6 text-left">Name</th>
//               <th className="py-3 px-6 text-left">Email</th>
//               <th className="py-3 px-6 text-left">Role</th>
//               <th className="py-3 px-6 text-left">Contact</th>
//             </tr>
//           </thead>
//           <tbody>
//             {staffData.map((staff) => (
//               <tr key={staff.id} className="border-b">
//                 <td className="py-3 px-6">{staff.id}</td>
//                 <td className="py-3 px-6">{staff.name}</td>
//                 <td className="py-3 px-6">{staff.email}</td>
//                 <td className="py-3 px-6">{staff.role}</td>
//                 <td className="py-3 px-6">{staff.contact}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }





import React, { useEffect, useState } from 'react';

export default function Staff() {
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the staff details when the component loads
  useEffect(() => {
    const fetchStaffDetails = async () => {
        setLoading(true); // Set loading state to true
        try {
          const response = await fetch('/api/staff/get'); // Ensure this is correct
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          
          const data = await response.json();
          setStaffData(data);
        } catch (error) {
          setError(error.message);
          console.error('Error fetching staff data:', error); // Log to console for debugging
        } finally {
          setLoading(false); // Set loading state to false
        }
      
    };

    fetchStaffDetails();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-purple-900 text-center mb-8">Role Assignments</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-purple-800 text-white">
             
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-left">Task to do</th>
             
              
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff) => (
              <tr key={staff._id} className="border-b">
                
                <td className="py-3 px-6">{staff.Staffmembername}</td>
                <td className="py-3 px-6">{staff.stafftype}</td>
                <td className="py-3 px-6">{staff.task}</td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
