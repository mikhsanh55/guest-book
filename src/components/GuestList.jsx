function GuestList({ data }) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h1 className="text-xl font-bold text-blue-600 mb-4">
          Guest List {data.length > 0 && `(${data.length})`}
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-sm text-gray-700">
                <th className="w-12 px-2 py-2 border">No</th>
                <th className="px-2 py-2 border">Name</th>
                <th className="px-2 py-2 border">Address</th>
                <th className="px-2 py-2 border">Sign.</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-2 py-2 border text-center">{index + 1}</td>
                  <td className="px-2 py-2 border">{item.name}</td>
                  <td className="px-2 py-2 border">{item.address}</td>
                  <td className="px-2 py-2 border text-center">📝</td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center text-gray-400 py-4">
                    No guests yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GuestList;