import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";



const Navbar
 = () => {
  const {logOut,user}= useContext(AuthContext)
  
  const handleLogOut=()=>{
    logOut()
    .then(res=>{
     
    }).catch((error)=>console.log(error))
  }
  return (
    <div className="navbar bg-accent rounded-md ">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Rayans</a>
    </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
          <Link to='/product-cart'>  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></Link>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>
        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
     {
      user?.email ?  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user?.photoURL? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}/>
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
        <button onClick={()=>document.getElementById('my_modal_1').showModal()}>Profile</button>
<dialog id="my_modal_1" className="modal flex justify-center items-center">
<div className="modal-box">
  <h3 className="font-bold text-lg">Hello!</h3>
  <p className="py-4">Press ESC key or click the button below to close</p>
  <div className="modal-action">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn">Close</button>
    </form>
  </div>
</div>
</dialog>
        </li>
        <li><a>Settings</a></li>
        <li><button onClick={handleLogOut}>Logout</button></li>
      </ul>
    </div>:''
     }
    </div>
  </div>
  )
};

export default Navbar
;
