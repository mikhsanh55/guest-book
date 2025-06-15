import { useState, useEffect } from "react";
import FormGuestBook from './components/FormGuestBook'

export default function App() {
  

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="py-10 flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600">Guest Book List</h1>
      </div>

      <FormGuestBook />
    </main>
  );
}
