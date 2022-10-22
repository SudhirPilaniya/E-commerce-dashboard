import React , {useState} from 'react'

const Add = () => {

  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [company,setCompany] = useState("");
  const [category,setCategory] = useState("");
  const [error , setError] = useState(false);
  const addproducthandle = async () =>{

    if(!name || !price || !category || !company){
      setError(true);
      return false;
    }


    // console.log({name,price,company,category})
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch('http://localhost:5000/add-product',{
      method:'post',
      body:JSON.stringify({name,price,company,userId,category}),
      headers:{

        'Content-Type':'application/json'
      }
    });
    result = await result.json();
    console.log(result);
  }

  return (
    <div className="signin-container">
    <h1>Add Product</h1>
    <input
      className="input-box-signin"
      type="text"
      placeholder="Enter Name"
      onChange={(e) => setName(e.target.value)}
      value={name}
    />
    {error && !name && <span className='error-message'>Please enter valid name</span>}
    <input
      className="input-box-signin"
      type="text"
      placeholder="Enter Price"
      onChange={(e) => setPrice(e.target.value)}
      value={price}
    />
    {error && !price && <span className='error-message'>Please enter valid price</span>}
    <input
      className="input-box-signin"
      type="text"
      placeholder="Enter Category"
      onChange={(e) => setCategory(e.target.value)}
      value={category}
    />
    {error && !category && <span className='error-message'>Please enter valid category</span>}
    <input
      className="input-box-signin"
      type="text"
      placeholder="Enter Company"
      onChange={(e) => setCompany(e.target.value)}
      value={company}
    />
    {error && !company && <span className='error-message'>Please enter valid company</span>}
    <button className="input-box-signin" onClick={addproducthandle}>
      Add Product
    </button>
  </div>
  )
}

export default Add;