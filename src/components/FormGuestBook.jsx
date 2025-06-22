export default function FormGuestBook({ data, onUpdateData, onSubmitForm }) {
    const { name, address } = data

    function handleChange(e) {
        const {name, value} = e.target

        onUpdateData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        onSubmitForm()
    }

    return (
        <>
        <div className="flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-600">Form Guest Book</h2>
                <form className="mb-4" onSubmit={handleSubmit}>
                    <div className="my-4">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input value={name} name="name" onChange={(e) => handleChange(e)} type="text" className="w-full px-4 py-2 border border-gray-400" />
                    </div>
                    <div className="my-4">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">
                            Address
                        </label>
                        <input value={address} name="address" onChange={e => handleChange(e)} type="text" className="w-full px-4 py-2 border border-gray-400" />
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Simpan</button>
                </form>
            </div>
        </div>
        </>
    )
}