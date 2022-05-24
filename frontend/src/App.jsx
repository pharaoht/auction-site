import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [formData, setFormData] = useState({
    product_name: '',
    desc: '',
    photo1: '',
    auction_start: '',
  })

  const formChangeHandler = (event) => setFormData({ ...formData, [event.target.name]: event.target.value })

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const formInfo = new FormData();
    formInfo.append('product_name', formData.product_name);
    formInfo.append('product_desc', formData.desc);
    formInfo.append('image', formData.photo1);
    formInfo.append('auction_start', formData.auction_start);

    fetch('http://localhost:4000/products/create-new-product/',
      {
        method: 'POST',
        body: formInfo
      }
    )
  }

  return (
    <div className="App">
      <form onSubmit={formSubmitHandler}>
        <div><input name='product_name' type='text' onChange={formChangeHandler} /></div>
        <div><textarea name='desc' onChange={formChangeHandler}></textarea></div>
        <div><input name='auction_start' type='date' onChange={formChangeHandler} /></div>
        <div><input name='photo1' type='file' onChange={formChangeHandler} /></div>
        <div><input type='submit' />Submit</div>
      </form>
    </div>
  );
}

export default App;
