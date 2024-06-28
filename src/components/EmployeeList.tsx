import React, { useState, useEffect } from "react";

interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
}

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/employees/all");
      if (response.ok) {
        const data: Employee[] = await response.json();
        setEmployees(data);
      } else {
        throw new Error("Error fetching employees");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteEmployee = async (id: number) => {
    try {
      console.log('Employee ID:', id); // Verifica si el ID se pasa correctamente a la función
  
      const response = await fetch(`http://localhost:5000/api/employees/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Empleado eliminado exitosamente');
        fetchEmployees();
      } else {
        throw new Error("Error deleting employee");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  
  return (
    <div>
      <form className="mt-52 border p-4 rounded shadow-lg border-gray-300 w-2/3 mx-auto flex items-center ">
      <img src="https://ouch-cdn2.icons8.com/zV2ytkiBiCENTyWByYHaFNOeTivWEwDbHQw6v7WM8Po/rs:fit:368:234/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTk5/Lzk5YWY2OTJmLWE0/YWQtNDU2Mi1iYmEx/LTkyNjNlMWRkMGU5/Yi5wbmc.png" alt="employee" className="w-80 h-auto  bg-slate-200 rounded p-4" />

        <div className="w-full"> 
        <h1 className="text-xl font-bold mb-4 text-slate-700 ml-20">List of Employees</h1>
        <table className="w-9/12 border border-solid border-slate-500  shadow-lg rounded ml-20">
          <thead>
            <tr className="border-b border-slate-500">
              <th className="p-2 border-r border-slate-500">Name</th>
              <th className="p-2 border-r border-slate-500">Email</th>
              <th className="p-2 border-r border-slate-500">Position</th>
            </tr>
          </thead>
          <tbody>
          {employees.map((employee) => (
  <tr key={employee.id} className="border-b border-slate-500">
    <td className="p-2 border-r border-dashed border-slate-500 text-slate-500 font-semibold">
      {employee.name}
    </td>
    <td className="p-2 border-r border-dashed border-slate-500 text-slate-500 font-semibold">
      {employee.email}
    </td>
    <td className="p-2 border-r border-dashed border-slate-500 text-slate-500 font-semibold">
      {employee.position}
    </td>
    <td className="p-2 border-r border-dashed border-slate-500 text-slate-500 font-semibold">
    <button
  type="button"
  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
  onClick={() => {
    console.log('Employee ID:', employee.id);
    deleteEmployee(employee.id);
  }}
>
  Delete
</button>
    </td>
  </tr>
))}

          </tbody>
        </table>
      </div>
      </form>
    </div>
  );
};

export default EmployeeList;
