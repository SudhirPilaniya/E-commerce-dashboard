import React, { useEffect , useState} from 'react'
import { Link } from 'react-router-dom';

const ProductList  = () => {

  const [products,setProducts] = useState([]);
  useEffect(()=>{
    getProduct();
  },[])
  
  const getProduct=async ()=>{
    let result = await fetch('http://localhost:5000/product-list');
    result = await result.json();
    setProducts(result);
    
  }
  console.log("products",products)

  const deletehandle =async(id)=>{
      // console.log(id);
      let result = await fetch(`http://localhost:5000/product/${id}`,{
        method:'delete'
      });
      result = await result.json();
      // console.log(result,"is deleted")
      getProduct();
      alert("Record deleted")
  }

  const searchhandle = async (e)=>{
    const key = e.target.value;
    let result = await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if(result){
      setProducts(result)
    }
  }

  return (
    <div>
      <h1>Products</h1>
      <input type="text" className='search-input-box' placeholder="Search Product" onChange={searchhandle}></input>
      <table>
  <tr>
    <th>S.No.</th>
    <th>Name</th>
    <th>Price</th>
    <th>Company</th>
    <th>Category</th>
    <th>Delete</th>
    <th >Update</th>
  </tr>

  {
        products.map((item,index)=>
        <tr key={item._id}>
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td>{item.company}</td>
        <td>{item.category}</td>
        <td> <button onClick={()=>deletehandle(item._id)} >Delete</button> </td>
        <td> <Link to={"/update/"+(item._id)}  className='update-link' >Update</Link> </td>
      </tr>          
        )
      }

 
</table>

      

    </div>
  )
}

export default ProductList;