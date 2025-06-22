import { useEffect, useState } from "react";
export default function FormGuestBook() {

    const [name, setName] = useState("admin")
    const [address, setAddress] = useState("bandung")
    const [guests, setGuests] = useState([])

    async function onSubmit(e) {
        e.preventDefault()

        // javascript object
        const newGuest = {
            "name": name,
            "address": address
        }

        // update newguest ke guest state
        await setGuests((oldData) => {
            // spread operator
            return [...oldData, newGuest]
        })

        
    }

    useEffect(() => {
        console.log("latestGuests", guests)
    }, [guests])

    return (
        <>
        <div className="flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-600">Form Guest Book</h2>
                <form className="mb-4">
                    <div className="my-4">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input onChange={ (e) => setName(e.target.value) } type="text" value={name} className="w-full px-4 py-2 border border-gray-400" />
                    </div>
                    <div className="my-4">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">
                            Address
                        </label>
                        <input type="text" onChange={ (e) => setAddress(e.target.value) } value={address} className="w-full px-4 py-2 border border-gray-400" />
                    </div>
                    <button onClick={onSubmit} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Simpan</button>
                </form>

                <h4>Guest List</h4>
                <ul>
                    {
                        guests.map((item, index) => {
                            return (
                                <li key={index}>{ item.name } dan alamatnya: { item.address }</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

        </>
    );
}