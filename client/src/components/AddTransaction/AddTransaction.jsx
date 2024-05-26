import axios from "axios"
import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const AddTransaction = () => {
  // const  = ["Product A", "Product B", "Product C"];
  const [predefinedProducts,setdata]=useState([]);
  const nevigate=useNavigate();
  function getdata(){
      axios.get("http://localhost:8000/client/products",{withCredentials:true})
  .then((resoponse)=>{
      console.log(resoponse.data.productWithStats);
      if(resoponse.data.user===""){
          toast.error("login first");
          nevigate("/login");
        }
      setdata(resoponse.data.productWithStats);
  }).catch((error)=>{
    toast.error("error while loading product");
      console.log(error);
  })
  }
  useEffect(getdata,[]);
  const [transaction, setTransaction] = useState({
    tnxId: '',
    cost: '',
    products: [],
    customerName: '',
    customerPhone: '',
    customerCountry: '',
    customerEmail: '',
    customerOccupation: '',
    transactionDate:'',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setTransaction((prev) => ({
        ...prev,
        products: checked
          ? [...prev.products, value]
          : prev.products.filter((product) => product !== value),
      }));
    } else {
      setTransaction({ ...transaction, [name]: value });
    }
    console.log(transaction.products);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(transaction);
    axios.post("http://localhost:8000/management/addTransaction",{
      tnxId: transaction.tnxId,
      cost: transaction.cost,
      products: transaction.products,
      customerName:transaction.customerName,
      customerPhone:transaction.customerPhone,
      customerCountry:transaction.customerCountry,
      customerOccupation:transaction.customerOccupation,
      customerEmail:transaction.customerEmail,
      date:transaction.transactionDate,
    },{withCredentials:true})
    .then((response)=>{
      toast.success("Transaction added successfully");
      setTransaction({
        tnxId: '',
        cost: '',
        products: [],
        customerName: '',
        customerPhone: '',
        customerCountry: '',
        customerEmail: '',
        customerOccupation: '',
        });
        nevigate("/transaction");
        }).catch((error)=>{
          toast.error("Error adding transaction");
          console.log(error);
        })
    // Add your submission logic here
  };

  return (
    <div className="max-w-md mx-auto rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white">Transaction ID</label>
          <input
            type="text"
            name="tnxId"
            value={transaction.tnxId}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white">Transaction Date</label>
          <input
            type="date"
            name="transactionDate"
            value={transaction.transactionDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white">Cost</label>
          <input
            type="number"
            name="cost"
            value={transaction.cost}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black
            rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white">Products</label>
          {predefinedProducts.map((product) => (
            <div key={product._id} className="flex items-center">
              <input
                type="checkbox"
                name="products"
                value={product._id}
                checked={transaction.products.includes(product._id)}
                onChange={handleChange}
                className="mr-2 text-black"
              />
              <span>{product.name}</span>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <label className="block text-white">Customer Name</label>
          <input
            type="text"
            name="customerName"
            value={transaction.customerName}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white">Customer Phone</label>
          <input
            type="tel"
            name="customerPhone"
            value={transaction.customerPhone}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white">Customer Country</label>
          <input
            type="text"
            name="customerCountry"
            value={transaction.customerCountry}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white">Customer Email</label>
          <input
            type="email"
            name="customerEmail"
            value={transaction.customerEmail}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white">Customer Occupation</label>
          <input
            type="text"
            name="customerOccupation"
            value={transaction.customerOccupation}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
