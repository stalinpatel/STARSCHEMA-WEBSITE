import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/admin/leads`)
      .then((res) => {
        setLeads(res.data.leads);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // ----------------------------
  // GENERATE CHART DATA FROM REAL LEADS
  // ----------------------------

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  // Count leads per month
  const monthCount = new Array(12).fill(0);

  leads.forEach((lead) => {
    const created = new Date(lead.createdAt);
    const monthIndex = created.getMonth(); // 0–11
    monthCount[monthIndex]++;
  });

  // Prepare chartData based on real data
  const chartData = months.map((m, index) => ({
    month: m,
    leads: monthCount[index],
  }));

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-6 rounded-xl shadow hover:scale-105 duration-200">
          <h3 className="text-lg">Total Leads</h3>
          <p className="text-4xl font-bold">{leads.length}</p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-xl shadow hover:scale-105 duration-200">
          <h3 className="text-lg">New Leads (This Month)</h3>
          <p className="text-4xl font-bold">
            {monthCount[new Date().getMonth()]} 
          </p>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-xl shadow hover:scale-105 duration-200">
          <h3 className="text-lg">Learners</h3>
          <p className="text-4xl font-bold">456</p>
        </div>

        <div className="bg-red-500 text-white p-6 rounded-xl shadow hover:scale-105 duration-200">
          <h3 className="text-lg">Pending</h3>
          <p className="text-4xl font-bold">10</p>
        </div>

      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Leads Trend (This Year)</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="leads" stroke="#2563eb" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Leads Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Leads</h2>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Course</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {leads.slice(0, 5).map((lead) => (
              <tr key={lead._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.email}</td>
                <td className="p-3">{lead.phone}</td>
                <td className="p-3">{lead.course || "N/A"}</td>
                <td className="p-3">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
