// src/challenges/BossLevel4.jsx
import { useState, useEffect, useRef } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore);
      
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default function BossLevel4() {
  
  const [tasks, setTasks] = useLocalStorage("kanban-tasks", [
    { id: 1, text: "Learn React", status: "todo" },
    { id: 2, text: "Build a Project", status: "doing" }
  ]);

  const [newTaskText, setNewTaskText] = useState("");
  
  const inputRef = useRef(null);

  function addTask() {
    if (!newTaskText) return;
    const newTask = {
      id: Date.now(),
      text: newTaskText,
      status: "todo" 
    };
    setTasks([...tasks, newTask]);
    setNewTaskText("");
    inputRef.current.focus();
  }

  function moveTask(taskId, newStatus) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(taskId) {
    const filtered = tasks.filter(t => t.id !== taskId);
    setTasks(filtered);
  }

  const getTasksByStatus = (status) => tasks.filter(t => t.status === status);

  return (
    <div style={{ padding: '20px', border: '4px solid lime', marginTop: '30px', backgroundColor: '#222', color: 'white' }}>
      <h1>👹 Boss Level 4: The Kanban Board</h1>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input 
          ref={inputRef}
          type="text" 
          placeholder="New Task..." 
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          style={{ padding: '10px', flexGrow: 1 }}
        />
        <button onClick={addTask} style={{ padding: '10px 20px', background: 'lime', border: 'none', cursor: 'pointer' }}>
          ADD
        </button>
      </div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
        
        <Column 
          title="To Do" 
          tasks={getTasksByStatus("todo")} 
          bgColor="#e74c3c"
          onMove={(id) => moveTask(id, "doing")}
          onDelete={deleteTask}
        />

        <Column 
          title="Doing" 
          tasks={getTasksByStatus("doing")} 
          bgColor="#f1c40f"
          onMove={(id) => moveTask(id, "done")}
          onBack={(id) => moveTask(id, "todo")}
          onDelete={deleteTask}
        />

        <Column 
          title="Done" 
          tasks={getTasksByStatus("done")} 
          bgColor="#2ecc71"
          onBack={(id) => moveTask(id, "doing")}
          onDelete={deleteTask}
        />

      </div>
    </div>
  );
}

// ----------------------------------------------------
// 3. SUB-COMPONENT: A Single Column
// ----------------------------------------------------
// I extracted this to keep the code clean!
function Column({ title, tasks, bgColor, onMove, onBack, onDelete }) {
  return (
    <div style={{ flex: 1, background: '#333', padding: '10px', borderRadius: '8px' }}>
      <h3 style={{ borderBottom: `4px solid ${bgColor}`, paddingBottom: '5px' }}>{title}</h3>
      
      {tasks.map(task => (
        <div key={task.id} style={{ background: '#444', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>
          <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>{task.text}</p>
          
          <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between' }}>
            {/* BACK BUTTON (Only if onBack prop exists) */}
            {onBack && <button onClick={() => onBack(task.id)}>⬅️</button>}
            
            <button onClick={() => onDelete(task.id)} style={{ background: 'red', color: 'white' }}>X</button>

            {/* NEXT BUTTON (Only if onMove prop exists) */}
            {onMove && <button onClick={() => onMove(task.id)}>➡️</button>}
          </div>
        </div>
      ))}
    </div>
  );
}