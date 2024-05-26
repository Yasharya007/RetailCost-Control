import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const AddProduct = () => {
  const categories = [
    { value: 'shoes', label: 'shoes' },
    { value: 'clothing', label: 'clothing' },
    { value: 'accessories', label: 'accessories' },
    { value: 'misc', label: 'misc' },
  ]
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0].value);
  const nevigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add product logic here
    const toastId = toast.loading("Loading ...");
    axios.post("http://localhost:8000/management/addProduct",{
      name,
      price,
      description,
      category
    },{withCredentials:true})
    .then((response)=>{
      console.log(response);
      toast.success("Product added successfully")
      nevigate("/product")
    }).catch((error)=>{
      console.log(error);
      toast.error("error while adding product")
    }).finally(()=>{
      toast.dismiss(toastId)
    })
    // console.log({ name, price, description, category });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-white font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block  text-white font-bold mb-2">
          Price:
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="appearance-none border rounded w-full py-2 px-3 leading-tight text-black focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-white font-bold mb-2">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-white font-bold mb-2">
          Category:
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Add Product
      </button>
    </form>
  );
};

export default AddProduct