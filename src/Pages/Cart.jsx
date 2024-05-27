import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../Redux/slice/cartSlice'
import { Link, useNavigate } from 'react-router-dom'


const Cart = () => {
  const ourCart = useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    if(ourCart?.length>0){
      setCartTotal(ourCart?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
    }else{
        setCartTotal(0)
      }
  },[ourCart])
  const handleDecrement = (product)=>{
    if(product.quantity>1){
        dispatch(decQuantity(product.id))
    }else{
       dispatch(removeCartItem(product.id))
    }
  }
  const checkout = ()=>{
    dispatch(emptyCart())
    navigate('/')
    alert('Ordre placed Successfully.ThankYou for shopping with us!')
  }
  return (
    <>
      <Header/>
      <div className='container' style={{marginTop:'150px'}}>
        {
          ourCart?.length>0?
          <div className="cart">
          <h1>Cart Summary</h1>
          <div className="row mt-4">
            <div className="col-lg-8">
              <table className="table shadow">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    ourCart?.map((product,index)=>(
                      <tr key={product?.id}>
                    <td>{index + 1}</td>
                    <td>{product?.title.slice(0,20)}.......</td>
                    <td><img width={'50px'} src={product?.thumbnail} alt="" /></td>
                    <td>
                      <div className="d-flex">
                        <button onClick={()=>handleDecrement(product)} className='btn fw-bolder'>-</button>
                        <input value={product?.quantity} style={{width:'50px'}} className='fw-bolder me-1 ms-1' type="text" readOnly />
                        <button onClick={()=>dispatch(incQuantity(product?.id))} className='btn fw-bolder'>+</button>
                      </div>
                    </td>
                    <td>${product?.totalPrice}</td>
                    <td>
                      <button onClick={()=>dispatch(removeCartItem(product?.id))}  className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
                    </td>
                  </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className="float-end">
                <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-2'>Empty Cart</button>
                <Link to={'/'} className='btn btn-primary'>Shop More</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="border-rounded shadow p-3">
                <h4>Total Amount : <span className='text-danger'>{cartTotal}</span></h4>
              </div>
              <div className="d-grid">
                <button onClick={checkout} className='btn btn-success'>Checkout</button>
              </div>
            </div>
          </div>
        </div>
        :
        <div style={{height:'60vh'}}className='d-flex align-items-center justigy-content-center flex-column'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png" alt="" width={'500px'} height={'400px'}/>
          <h3 className='text-danger'>Your Cart is empty !</h3>
        </div>
        }
        
      </div>
    </>
  )
}

export default Cart