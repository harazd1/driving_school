import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    Title: '',
    ProjectType: '',
    PageCount: '',
    Price: ''
  });

  const ShowAllData = () => {
    axios.get('http://localhost:3000/catalog')
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
    axios.post('http://localhost:3000/catalog', formData)
      .then(response => {
        console.log(response.data);
        ShowAllData();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/catalog/${id}`)
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
      <h2>CATALOG</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Project Type</th>
            <th>Page Count</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.Title}</td>
              <td>{item.ProjectType}</td>
              <td>{item.PageCount}</td>
              <td>{item.Price}</td>
              <td><button className='delete_btn' onClick={() => handleDelete(item.id)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="Title" value={formData.Title} onChange={handleInputChange} />
        </label>
        <label>
          Project Type:
          <input type="text" name="ProjectType" value={formData.ProjectType} onChange={handleInputChange} />
        </label>
        <label>
          Page Count:
          <input type="number" name="PageCount" value={formData.PageCount} onChange={handleInputChange} />
        </label>
        <label>
          Price:
          <input type="number" name="Price" value={formData.Price} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;
