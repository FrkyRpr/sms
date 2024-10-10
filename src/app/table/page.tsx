'use client'; // Marking as a client component

import { useState } from "react";
import Link from "next/link";

// Define Contact type
interface Contact {
  id: number;
  name: string;
  phoneNumber: string;
}

// Static array of contacts
const contactsData: Contact[] = [
  { id: 1, name: 'John Doe', phoneNumber: '123-456-7890' },
  { id: 2, name: 'Jane Smith', phoneNumber: '987-654-3210' },
];

const Table = () => {
  const [contacts, setContacts] = useState(contactsData); // Contact list state
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  // Handle contact updates
  const updateContact = (id: number) => {
    alert(`Update contact with ID: ${id}`);
  };

  // Handle contact deletion
  const deleteContact = (id: number) => {
    alert(`Delete contact with ID: ${id}`);
  };

  // Handle adding a new contact
  const addContact = () => {
    alert('Add new contact');
  };

  // Handle search functionality
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter contacts based on search term
    const filteredContacts = contactsData.filter(
      (contact) =>
        contact.name.toLowerCase().includes(value) ||
        contact.phoneNumber.includes(value)
    );

    setContacts(filteredContacts);
  };

  return (
    <main className="bg-pageBg bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Phone Numbers</h2>

          {/* Search bar */}
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <table className="min-w-full table-auto bg-gray-100 rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Phone Number</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact.id} className="border-b border-gray-300">
                  <td className="px-4 py-2">{contact.name}</td>
                  <td className="px-4 py-2">{contact.phoneNumber}</td>
                  <td className="px-4 py-2">
                    <div className="flex space-x-2">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        onClick={() => updateContact(contact.id)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => deleteContact(contact.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-4">
                  No contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={addContact}
          >
            Add Contact
          </button>
        </div>

        <div className="mt-4">
          <Link href="/" className="text-blue-500 underline hover:text-blue-700">
            Back to Login
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Table;
