import { useState, useEffect, useContext } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { signup, login, fetchTasks, addTask, deleteTask, updateTask } from './api';
import AuthContext from './context/AuthContext';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const { token, login: authLogin, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setTasks([])
    navigate('/');
  };

  useEffect(() => {
    if (token) {
      fetchTasks(token)
        .then(data => setTasks(data))
        .catch(err => console.error("Error fetching tasks:", err));
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchTasks(token)
        .then(data => setTasks(data))
        .catch(err => console.error("Error fetching tasks:", err));
    }
  }, [tasks]);

  const handleLogin = async (userData) => {
    try {
      const response = await login(userData);
      const newToken = response.token;
      authLogin(newToken);
      if (newToken) {
        navigate("/tasks");
      }
    } catch (error) {
      console.error("Server responded with error:", error.response?.data || error.message);
    }
  };

  const handleSignup = async (userData) => {
    try {
      const response = await signup(userData)
      const newToken = response.token
      authLogin(newToken);
      navigate("/tasks");
    } catch (err) {
      console.error("Error signing up:", err);
    }
  };


  const handleAddTask = async (task) => {
    try {
      const newTask = await addTask(task, token);
      setTasks([...tasks, newTask]);
    } catch (err) {
      console.error(err);
    }
  };


  const handleDeleteTask = async (_id) => {
    try {
      await deleteTask(_id, token);
      setTasks(tasks.filter((task) => task._id !== _id));
    } catch (err) {
      console.error(err);
    }
  };


  const handleToggleCompleted = async (_id) => {
    const taskToUpdate = tasks.find(task => task._id === _id);
    const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };
    try {
      await updateTask(updatedTask, token);
      setTasks(tasks.map(task => task._id === _id ? updatedTask : task));
    } catch (err) {
      console.error(err);
    }
  };


   const handleUpdateTask = async (updatedTask)=>{
    try {
      await updateTask(updatedTask, token)
      setTasks(tasks.map(((task)=>
        task._id === updatedTask._id ? updatedTask : task
      )))
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
      <Header 
        title='Task Managemnt System'
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask} 
      />
      <Routes>
        <Route 
          path='/' 
          element={<Login onLogin={handleLogin} />}
        />
        <Route 
          path='/signup' 
          element={<Signup onSignup={handleSignup} />}
        />
        <Route 
          path='/tasks'
          element={
            <>
              { showAddTask && <AddTask onAdd={handleAddTask} /> }
              {tasks.length > 0 ? 
                <Tasks tasks={tasks} 
                  onDelete={handleDeleteTask} 
                  onToggle={handleToggleCompleted}
                  onUpdate={handleUpdateTask} />
              : 'No tasks to show'}
              <Footer onLogout={handleLogout} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
