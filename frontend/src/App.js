import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [dataCadet, setDataCadet] = useState([]);
  const [formDataCadet, setFormDataCadet] = useState({
    Name: '',
    Surname: '',
    GroupNumber: '',
    Subscription: '',
    Category: ''
  });

  const [dataInstructor, setDataInstructor] = useState([]);
  const [formDataInstructor, setFormDataInstructor] = useState({
    Name: '',
    Surname: '',
    Category: '',
    carId: ''
  });

  const [dataFleet, setDataFleet] = useState([]);
  const [formDataFleet, setFormDataFleet] = useState({
    Plate: '',
    Brand: '',
    Model: '',
    Fuel: '',
    Transmission: ''
  });

  const ShowAllDataCadet = () => {
    axios.get('http://localhost:3000/cadet')
      .then(response => {
        setDataCadet(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const ShowAllDataInstructor = () => {
    axios.get('http://localhost:3000/instructor')
      .then(response => {
        setDataInstructor(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const ShowAllDataFleet = () => {
    axios.get('http://localhost:3000/fleet')
      .then(response => {
        setDataFleet(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleInputChangeCadet = (event) => {
    setFormDataCadet({
      ...formDataCadet,
      [event.target.name]: event.target.value
    });
  }

  const handleInputChangeInstructor = (event) => {
    setFormDataInstructor({
      ...formDataInstructor,
      [event.target.name]: event.target.value
    });
  }

  const handleInputChangeFleet = (event) => {
    setFormDataFleet({
      ...formDataFleet,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmitCadet = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/cadet', formDataCadet)
      .then(response => {
        console.log(response.data);
        ShowAllDataCadet();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleSubmitInstructor = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/instructor', formDataInstructor)
      .then(response => {
        console.log(response.data);
        ShowAllDataInstructor();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleSubmitFleet= (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/fleet', formDataFleet)
      .then(response => {
        console.log(response.data);
        ShowAllDataFleet();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleDeleteCadet = (id) => {
    axios.delete(`http://localhost:3000/cadet/${id}`)
      .then(response => {
        console.log(response.data);
        ShowAllDataCadet();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleDeleteInstructor = (id) => {
    axios.delete(`http://localhost:3000/instructor/${id}`)
      .then(response => {
        console.log(response.data);
        ShowAllDataInstructor();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleDeleteFleet = (id) => {
    axios.delete(`http://localhost:3000/fleet/${id}`)
      .then(response => {
        console.log(response.data);
        ShowAllDataFleet();
      })
      .catch(error => {
        console.log(error);
      });
  }

  // ALL INSTRUCTORS + CARS

  const [instructors, setInstructors] = useState([]);

  const handleClick = async () => {
    const response = await fetch('http://localhost:3000/all/instructors');
    const data = await response.json();
    setInstructors(data);
  };

  // CADETS CARS AND INSTRUCTORS

  const [thirdRequestData, setThirdRequestData] = useState([]);

  const thirdHandleClick = async () => {
    const response = await fetch('http://localhost:3000/all/instructors/cars/cadets');
    const data = await response.json();
    setThirdRequestData(data);
  };

  // INSTRUCTORS CARS BY ID

  const [instructorId, setInstructorId] = useState('');
  const [fleets, setFleets] = useState([]);
  const [error, setError] = useState('');

  const handleCarsSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/all/${instructorId}/fleets`);
      setFleets(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching fleets');
      setFleets([]);
    }
  };

  // USE EFFECT

  useEffect(() => {
    ShowAllDataCadet();
    ShowAllDataInstructor();
    ShowAllDataFleet();
  }, []);

  return (
    <div className="App">
      <div className="tables">
        <div className="cadet_table">
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
          {dataCadet.map(item => (
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item.Surname}</td>
              <td>{item.GroupNumber}</td>
              <td>{item.Subscription}</td>
              <td>{item.Category}</td>
              <td><button className='delete_btn' onClick={() => handleDeleteCadet(item.id)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmitCadet}>
        <label>
        Name:
          <input type="text" name="Name" value={formDataCadet.Name} onChange={handleInputChangeCadet} />
        </label>
        <label>
        Surname:
          <input type="text" name="Surname" value={formDataCadet.Surname} onChange={handleInputChangeCadet} />
        </label>
        <label>
        GroupNumber:
          <input type="number" name="GroupNumber" value={formDataCadet.GroupNumber} onChange={handleInputChangeCadet} />
        </label>
        <label>
        Subscription:
          <input type="text" name="Subscription" value={formDataCadet.Subscription} onChange={handleInputChangeCadet} />
        </label>
        <label>
        Category:
          <input type="text" name="Category" value={formDataCadet.Category} onChange={handleInputChangeCadet} />
        </label>
        <button type="submit">Add Item</button>
      </form>
      </div>





    <div className="instructorBlock">

    <h2>Instructors</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Category</th>
            <th>carId</th>
          </tr>
        </thead>
        <tbody>
          {dataInstructor.map(item => (
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item.Surname}</td>
              <td>{item.Category}</td>
              <td>{item.carId}</td>
              <td><button className='delete_btn' onClick={() => handleDeleteInstructor(item.id)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmitInstructor}>
        <label>
        Name:
          <input type="text" name="Name" value={formDataInstructor.Name} onChange={handleInputChangeInstructor} />
        </label>
        <label>
        Surname:
          <input type="text" name="Surname" value={formDataInstructor.Surname} onChange={handleInputChangeInstructor} />
        </label>
        <label>
        Category:
          <input type="text" name="Category" value={formDataInstructor.Category} onChange={handleInputChangeInstructor} />
        </label>
        <label>
        Car ID:
          <input type="text" name="carId" value={formDataInstructor.carId} onChange={handleInputChangeInstructor} />
        </label>
        <button type="submit">Add Item</button>
      </form>

    </div>










    <div className="fleetBlock">

<h2>Fleets</h2>
  <table className="data-table">
    <thead>
      <tr>
        <th>Plate</th>
        <th>Brand</th>
        <th>Model</th>
        <th>Fuel</th>
        <th>Transmission</th>
      </tr>
    </thead>
    <tbody>
      {dataFleet.map(item => (
        <tr key={item.id}>
          <td>{item.Plate}</td>
          <td>{item.Brand}</td>
          <td>{item.Model}</td>
          <td>{item.Fuel}</td>
          <td>{item.Transmission}</td>
          <td><button className='delete_btn' onClick={() => handleDeleteFleet(item.id)}>X</button></td>
        </tr>
      ))}
    </tbody>
  </table>
  <form onSubmit={handleSubmitFleet}>
    <label>
    Plate:
      <input type="text" name="Plate" value={formDataFleet.Plate} onChange={handleInputChangeFleet} />
    </label>
    <label>
    Brand:
      <input type="text" name="Brand" value={formDataFleet.Brand} onChange={handleInputChangeFleet} />
    </label>
    <label>
    Model:
      <input type="text" name="Model" value={formDataFleet.Model} onChange={handleInputChangeFleet} />
    </label>
    <label>
    Fuel:
      <input type="text" name="Fuel" value={formDataFleet.Fuel} onChange={handleInputChangeFleet} />
    </label>

    <label>
    Transmission:
      <input type="text" name="Transmission" value={formDataFleet.Transmission} onChange={handleInputChangeFleet} />
    </label>
    <button type="submit">Add Item</button>
  </form>

</div>
</div>



<div className="requests_block">

      <div className="request">
      <h3>Add name</h3>
      <button onClick={handleClick}>Show Instructors and their Cars</button>
      <table className="data-table">
        <thead>
          <tr>
            <th>Instructor ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Car Plate</th>
            <th>Car Brand</th>
            <th>Car Model</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map(instructor => (
            <tr key={instructor.id}>
              <td>{instructor.i_id}</td>
              <td>{instructor.i_Name}</td>
              <td>{instructor.i_Surname}</td>
              <td>{instructor.Plate}</td>
              <td>{instructor.Brand}</td>
              <td>{instructor.Model}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>


      <div className="request">
      <h3>Add name</h3>
      <button onClick={thirdHandleClick}>Show Instructors, Cars, and Cadets</button>
      <table className="data-table">
        <thead>
          <tr>
            <th>Instructor ID</th>
            <th>Instructor Name</th>
            <th>Instructor Surname</th>
            <th>Car Plate</th>
            <th>Car Brand</th>
            <th>Car Model</th>
            <th>Cadet Name</th>
            <th>Cadet Surname</th>
            <th>Cadet Category</th>
          </tr>
        </thead>
        <tbody>
          {thirdRequestData.map(item => (
            <tr key={item.id}>
              <td>{item.i_id}</td>
              <td>{item.i_Name}</td>
              <td>{item.i_Surname}</td>
              <td>{item.f_Plate}</td>
              <td>{item.f_Brand}</td>
              <td>{item.f_Model}</td>
              <td>{item['c_Name']}</td>
              <td>{item['c_Surname']}</td>
              <td>{item['c_Category']}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>

      <div className="request">
        <h3>Add name</h3>
      <input type="text" value={instructorId} onChange={(e) => setInstructorId(e.target.value)} />
      <button onClick={handleCarsSearch}>Search</button>
      {error && <p>{error}</p>}
      {fleets.length > 0 ? (
        <table className="data-table">
          <thead>
            <tr>
              <th>Plate</th>
              <th>Brand</th>
              <th>Model</th>
            </tr>
          </thead>
          <tbody>
            {fleets.map((fleet) => (
              <tr key={fleet.id}>
                <td>{fleet.Plate}</td>
                <td>{fleet.Brand}</td>
                <td>{fleet.Model}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No fleets found</p>
      )}
      </div>
      </div>
    </div>
  );
}

export default App;
