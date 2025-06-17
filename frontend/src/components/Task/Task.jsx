import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    effort: "",
    dueDate: "",
  });
  const [editId, setEditId] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(false);

  // Axios instance for FastAPI backend
  const api = axios.create({
    baseURL: "https://django-backend2.onrender.com", // Adjust if your FastAPI isn't prefixed with /api
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });

  useEffect(() => {
    if (!user?.token) {
      navigate("/");
    } else {
      fetchTasks();
    }
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, effort, dueDate } = formData;

    const due = new Date(dueDate);
    const today = new Date();
    due.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (!title || isNaN(effort) || due <= today) {
      alert("Please enter a valid title, numeric effort, and future due date");
      return;
    }
    const payload = {
      title: formData.title,
      description: formData.description,
      effort: parseInt(formData.effort), // ✅ Ensure number
      due_date: formData.dueDate, // ✅ Use backend-compatible key
    };

    try {
      setLoading(true);
      if (editId) {
        await api.put(`/tasks/${editId}`, payload);
      } else {
        await api.post("/tasks/", payload); // No userId here
      }
      setFormData({ title: "", description: "", effort: "", dueDate: "" });
      setEditId(null);
      fetchTasks();
    } catch (err) {
      alert("Task submission failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      alert("Delete failed");
    }
  };

  const handleEdit = (task) => {
    setFormData({
      title: task.title,
      description: task.description || "",
      effort: task.effort,
      dueDate: task.dueDate?.split("T")[0] || "",
    });
    setEditId(task.id);
  };



  const handleExport = async () => {
    try {
      const response = await api.get("/tasks/export/", {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "tasks.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      alert("Export failed");
    }
  };


  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully");
    navigate("/"); 
  };

  return (
    <div className="p-6 max-w-3xl mx-auto  ">
      <h2 className="text-2xl font-bold mb-4">Manage Tasks</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Task Title"
          required
          className="input w-full"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea w-full"
        />
        <input
          name="effort"
          type="number"
          value={formData.effort}
          onChange={handleChange}
          placeholder="Effort in days"
          required
          className="input w-full"
          min="0"
        />
        <input
          name="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={handleChange}
          required
          className="input w-full"
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Saving..." : editId ? "Update Task" : "Create Task"}
        </button>
      </form>

      <div className="mb-4 text-right">
        <button onClick={handleExport} className="btn bg-blue-300">
          Export to Excel
        </button>
        <button onClick={handleLogout} className="btn bg-black text-white ">
           Logout
        </button>
      </div>

      <div>
        {tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="border p-4 rounded mb-2 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">{task.title}</h3>
                <p>{task.description}</p>
                <p>
                  <strong>Effort:</strong> {task.effort} day(s)
                </p>
                <p>
                  <strong>Due:</strong>{" "}
                  {task.due_date
                    ? new Date(task.due_date).toLocaleDateString()
                    : "No due date"}
                </p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(task)} className="btn btn-sm">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Task;
