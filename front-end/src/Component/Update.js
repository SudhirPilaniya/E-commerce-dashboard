import React , {useState,useEffect} from 'react'
import { useParams , useNavigate} from 'react-router-dom'
const Update = () => {

  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [company,setCompany] = useState("");
  const [category,setCategory] = useState("");
 const params = useParams();
 const navigate = useNavigate();
  useEffect(()=>{
    getProductDetail();
    console.log(params)
  },[])

  const getProductDetail = async ()=>{
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
  }

  const updateproducthandle = async ()=>{
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
      method:'put',
      body:JSON.stringify({name,price,company,category}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result = await result.json();
    alert("Record is updated")
    navigate('/products')
  }

  return (
    <div className="signin-container">
    <h1>Update Product</h1>
    <input
      className="input-box-signin"
      type="text"
      placeholder="Enter Name"
      onChange={(e) => setName(e.target.value)}
      value={name}
    />
    <input
      className="input-box-signin"
      type="text"
      placeholder="Enter Price"
      onChange={(e) => setPrice(e.target.value)}
      value={price}
    />
    <input
      className="input-box-signin"
      type="text"
      placeholder="Enter Category"
      onChange={(e) => setCategory(e.target.value)}
      value={category}
    />
    <input
      className="input-box-signin"
      type="text"
      placeholder="Enter Company"
      onChange={(e) => setCompany(e.target.value)}
      value={company}
    />
    <button className="input-box-signin" onClick={updateproducthandle}>
      Update Product
    </button>
  </div>
  )
}

export default Update;