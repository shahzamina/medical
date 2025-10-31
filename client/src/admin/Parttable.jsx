import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
const Parttable = () => {
      const [parts, setParts] = useState([]);

        const fetchParts = async () => {
    try {
      const res = await fetch("http://localhost:5000/");
      const data = await res.json();
      setParts(data);
    } catch (error) {
      console.error("Error fetching parts:", error);
    }
  };

  useEffect(() => {
    fetchParts();
  }, []);


  return (
    <div>
       {/* ✅ Parts Table */}
      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
          All Parts
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-3 py-2">Image</th>
                <th className="border border-gray-300 px-3 py-2">Part #</th>
                <th className="border border-gray-300 px-3 py-2">Manufacturer</th>
                <th className="border border-gray-300 px-3 py-2">Modality</th>
                <th className="border border-gray-300 px-3 py-2">Product</th>
                <th className="border border-gray-300 px-3 py-2">Modal</th>
              </tr>
            </thead>
            <tbody>
              {parts.length > 0 ? (
                parts.map((part) => (
                  <tr key={part._id} className="text-center hover:bg-gray-100">
                    <td className="border border-gray-300 px-3 py-2">
                      {part.image ? (
                        <img
                          src={`http://localhost:5000${part.image}`}
                          alt={part.partNumber}
                          className="w-16 h-16 object-cover mx-auto rounded"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">{part.partNumber}</td>
                    <td className="border border-gray-300 px-3 py-2">{part.manufacturer}</td>
                    <td className="border border-gray-300 px-3 py-2">{part.modality}</td>
                    <td className="border border-gray-300 px-3 py-2">{part.product}</td>
                    <td className="border border-gray-300 px-3 py-2">{part.modal || "-"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No parts added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
  
    </div>
  )
}

export default Parttable
