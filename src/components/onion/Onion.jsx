import React,{useEffect,useState} from 'react'

function Onion() {
    let [products,setProducts]=useState([]);

    const getProducts=async()=>{
      let reponse=await fetch("https://forkify-api.herokuapp.com/api/search?q=onion")
      let data=await reponse.json();
      setProducts(data.recipes);
    }
    useEffect(()=>{
      getProducts();
    },[])
    
      return (
        
    <div className='row'>
    
    {products.map( (ele)=>{
      return <div className='col-md-4' key={ele.id}>
        <h2>{ele.title}</h2>
        <img src={ele.image_url} className='w-100' />
      </div>
    
    })
    
    }
    </div> 
      )
    }
    
export default Onion