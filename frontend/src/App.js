import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    Name: '',
    Surname: '',
    GroupNumber: '',
    Subscription: '',
    Category: ''
  });

  const ShowAllData = () => {
    axios.get('http://localhost:3000/cadet')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/cadet', formData)
      .then(response => {
        console.log(response.data);
        ShowAllData();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/cadet/${id}`)
      .then(response => {
        console.log(response.data);
        ShowAllData();
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    ShowAllData();
  }, []);

  return (
    <div className="App">
      <h2>Cadets</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>GroupNumber</th>
            <th>Subscription</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item.Surname}</td>
              <td>{item.GroupNumber}</td>
              <td>{item.Subscription}</td>
              <td>{item.Category}</td>
              <td><button className='delete_btn' onClick={() => handleDelete(item.id)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <label>
        Name:
          <input type="text" name="Name" value={formData.Name} onChange={handleInputChange} />
        </label>
        <label>
        Surname:
          <input type="text" name="Surname" value={formData.Surname} onChange={handleInputChange} />
        </label>
        <label>
        GroupNumber:
          <input type="number" name="GroupNumber" value={formData.GroupNumber} onChange={handleInputChange} />
        </label>
        <label>
        Subscription:
          <input type="text" name="Subscription" value={formData.Subscription} onChange={handleInputChange} />
        </label>
        <label>
        Category:
          <input type="text" name="Category" value={formData.Category} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;
