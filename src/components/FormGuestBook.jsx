import { useEffect, useState } from "react";
export default function FormGuestBook() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [guestList, setGuestList] = useState([]);

    function submitHandler(ev) {
        ev.preventDefault(); // stop form behaviour to load the current page
        // alert('Hola Im ' + name);
        const newGuest = {
            name: name,
            address: address
        };
        
        // add new guest to guest list
        setGuestList((oldGuestList) => {
           return [...oldGuestList, newGuest];
        });

        // reset input
        setName("");
        setAddress("");
    }

    return (
        <>
        <div className="flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-600">Form Guest Book</h2>
                <form onSubmit={submitHandler}>
                    <div className="my-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" id="name" className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className="my-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input type="text" id="address" className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setAddress(e.target.value)} value={address} />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Simpan</button>
                </form>
            </div>
            {
                guestList.length > 5 && (
                    <>
                        <br /><br />
                        <p className="text-red-800 bg-red-100 p-2">Tamu sudah melebihi kapasitas, yaitu berjumlah {guestList.length}</p>
                    </>
                )
            }
            <br /><br />
            {/* Print guest list */}
            <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
            <table className="min-w-full table-auto border border-gray-300 bg-white">
                <thead className="bg-grey-200">
                    <tr>
                        <th className="border px-4 py-2 text-center">No</th>
                        <th className="border px-4 py-2 text-center">Name</th>
                        <th className="border px-4 py-2 text-center">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        guestList.map((item, i) => {
                            return (
                            <tr key={i}>
                                <td className="border px-4 py-2 text-center">{ ++i }</td>
                                <td className="border px-4 py-2 text-center">{item.name}</td>
                                <td className="border px-4 py-2 text-center">{item.address}</td>
                            </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>

        </>
    );
}