import FormGuestBook from "./components/FormGuestBook";
import GuestList from "./components/GuestList";
import { useState, useEffect, useRef } from "react";
import Counter from "./components/Counter";
import FormGuestBookAll from './components/FormGuestBookAll'

export default function App() {

  const [formData, setFormData] = useState({
    name: "Admin",
    address: "Bandung"
  })

  const [guests, setGuests] = useState([])

  function handleSubmit() {
    const newGuest = {
      name: formData.name,
      address: formData.address,
    }

    setGuests((prevData) => ([
      ...prevData,
      newGuest
    ]))

    setFormData({
      name: "",
      address: ""
    })
  }

  // handle data persistent
  useEffect(() => {
    if(!hasLoaded.current) return
    sessionStorage.setItem("guests", JSON.stringify(guests))
  }, [guests])

  // load sessionStorage once component loaded
  const hasLoaded = useRef(false)
  useEffect(() => {
    if(hasLoaded.current) return
    const savedGuests = sessionStorage.getItem("guests")
    console.log("savedGuests", savedGuests)
    if(savedGuests) {
      setGuests(JSON.parse(savedGuests))
    } 
    hasLoaded.current = true
  }, [])

  return (
    <>
    <main className="bg-gray-100 min-h-screen">
      <div className="py-10 flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600">Guest Book List</h1>
      </div>

      <section id="content">
        {/* Form */}
        <FormGuestBook data={formData} onUpdateData={setFormData} onSubmitForm={handleSubmit} />

        {/* Table for print guests */}
        <GuestList data={guests} />
      </section>
    </main>
    </>
  );
}
