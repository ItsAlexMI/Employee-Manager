import React, { useState } from 'react';
import Swal from 'sweetalert2';

const EmployeeForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'position') {
            setPosition(value);
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, position }),
            });

            if (response.ok) {
                setName('');
                setEmail('');
                setPosition('');

                Swal.fire({
                    icon: 'success',
                    title: 'Registro exitoso',
                    text: 'El usuario ha sido registrado exitosamente',
                  
                    confirmButtonColor: '#64748b',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo registrar el usuario',
                    confirmButtonColor: '#64748b',
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    

    return (
        <form onSubmit={handleSubmit} className="mt-52 border p-4 rounded shadow-lg border-gray-300 w-2/3 mx-auto flex items-center">
        <img src="https://ouch-cdn2.icons8.com/lSUEblB4cfrIfurGPyGKIyWr1aAJoU6_iIGXj5Fhswk/rs:fit:368:314/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODkz/LzM2ZGE3MTlhLTA0/YmQtNGVlMy1hMmJm/LTZmY2ZiZmUwOGNk/Zi5wbmc.png" alt="employee" className="w-64 h-auto mr-10 bg-slate-200 p-4 border border-sky-100 rounded" />
        <div className="w-full"> 
            <h2 className="text-2xl font-bold mb-4 text-slate-600">Add Employee</h2>
            <label className="block mb-2 text-lg font-semibold text-slate-500">
                Name:
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"  
                />
            </label>
            <label className="block mb-2 text-lg font-semibold text-slate-500">
                Email:
                <input
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
            </label>
            <label className="block mb-2 text-lg font-semibold text-slate-500">
                Position:
                <input
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="text"
                    name="position"
                    value={position}
                    onChange={handleInputChange}
                />
            </label>
            <button className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 border-b-4 border-slate-700 hover:border-slate-500 rounded w-full" type="submit">Submit</button>
        </div>
    </form>
        
    )

    
}

export default EmployeeForm;
