import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, User, Mail, Phone } from "lucide-react";

export default function AdminLeads() {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/leads/admin`);
    console.log("res", res.data);
    setLeads(res.data);
  };

  const deleteLead = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/leads/admin/${id}`);
    fetchLeads();
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Leads Dashboard</h1>

      {/* Table Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">All Leads</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Source</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {leads?.length > 0 ? (
                leads.map((lead) => (
                  <tr
                    key={lead._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3 flex items-center gap-2">
                      <User size={16} />
                      {lead.name}
                    </td>

                    <td className="p-3 flex items-center gap-2">
                      <Mail size={16} />
                      {lead.email}
                    </td>

                    <td className="p-3 flex items-center gap-2">
                      <Phone size={16} />
                      {lead.phone}
                    </td>

                    <td className="p-3">{lead.course}</td>
                    <td className="p-3">{lead.source}</td>

                    <td className="p-3 text-center">
                      <button
                        onClick={() => deleteLead(lead._id)}
                        className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center p-6 text-gray-500 italic"
                  >
                    No leads found.
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
