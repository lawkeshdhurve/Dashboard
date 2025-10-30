

import React from "react";
import {
  BarChart3,
  FolderOpen,
  LayoutDashboard,
  PlusCircle,
  Search,
  User,
} from "lucide-react";

export default function App() {
  const projects = [
    {
      name: "Nelsa web development",
      manager: "Om prakash sao",
      date: "May 26, 2023",
      status: "Completed",
      progress: 100,
    },
    {
      name: "Datascale AI app",
      manager: "Neilson mando",
      date: "Jun 20, 2023",
      status: "Delayed",
      progress: 35,
    },
    {
      name: "Media channel branding",
      manager: "Tiruvelly priya",
      date: "Jul 13, 2023",
      status: "At risk",
      progress: 85,
    },
    {
      name: "Corlax iOS app development",
      manager: "Matte hannery",
      date: "Dec 20, 2023",
      status: "Completed",
      progress: 100,
    },
    {
      name: "Website builder development",
      manager: "Sukumar rao",
      date: "Mar 15, 2024",
      status: "On going",
      progress: 50,
    },
  ];

  return (
    <div className="flex h-screen bg-[#f7f1eb] text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-[#121212] text-white flex flex-col p-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
          <h1 className="font-bold text-lg">Promage</h1>
        </div>

        <button className="flex items-center justify-center gap-2 bg-orange-500 py-2 px-3 rounded-lg hover:bg-orange-600 transition">
          <PlusCircle className="w-5 h-5" />
          Create new project
        </button>

        <nav className="mt-10 flex flex-col gap-4">
          <a href="#" className="flex items-center gap-3 text-orange-400">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-orange-300">
            <FolderOpen className="w-5 h-5" /> Projects
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-orange-300">
            <BarChart3 className="w-5 h-5" /> Tasks
          </a>
        </nav>
      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white px-4 py-2 rounded-full w-72">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search for anything..."
                className="ml-2 outline-none text-sm w-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div>
                <p className="text-sm font-semibold">Alex meian</p>
                <p className="text-xs text-gray-500">Product manager</p>
              </div>
            </div>
          </div>
        </header>

        {/* Overview Cards */}
        <section className="grid grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total revenue", value: "$53,00989", change: "+12%" },
            { title: "Projects", value: "95 /100", change: "-10%" },
            { title: "Time spent", value: "1022 /1300 Hrs", change: "+8%" },
            { title: "Resources", value: "101 /120", change: "+2%" },
          ].map((card, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow">
              <p className="text-sm text-gray-500">{card.title}</p>
              <h3 className="text-2xl font-bold mt-2">{card.value}</h3>
              <p
                className={`text-xs mt-1 ${
                  card.change.startsWith("+") ? "text-green-600" : "text-red-500"
                }`}
              >
                {card.change} from last month
              </p>
            </div>
          ))}
        </section>

        {/* Project Summary */}
        <section className="bg-white p-6 rounded-2xl shadow mb-8">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-semibold">Project summary</h3>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-2">Name</th>
                <th>Project manager</th>
                <th>Due date</th>
                <th>Status</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-2">{p.name}</td>
                  <td>{p.manager}</td>
                  <td>{p.date}</td>
                  <td>{p.status}</td>
                  <td>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                      <div
                        className={`h-2.5 rounded-full ${
                          p.progress < 50
                            ? "bg-red-500"
                            : p.progress < 100
                            ? "bg-yellow-400"
                            : "bg-green-500"
                        }`}
                        style={{ width: `${p.progress}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Overall Progress */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-2">Overall Progress</h3>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-orange-500">72%</h2>
              <p className="text-sm text-gray-500 mt-1">Completed</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
