import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

 const Admin = () => {
//     // "name": "admin",
//   "email": "admin@gmail.com",
//   "password": "123456"
 const {setIsAdmin}=useContext(AdminContext)
const handleAdmin=e=>{
    
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    const adminInfo = {
      name,
      email,
      password
    };

    fetch("/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(adminInfo)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
            setIsAdmin(true);
          alert("Admin Login Successful!");
        } else {
          alert("Name, Email or Password is wrong!");
        }
      });
}

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen py-10">
        <div className="hero-content flex-col w-full">  
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <div className="card-body">
               <form onSubmit={handleAdmin} className="space-y-3">
                <h2 className="text-2xl font-bold text-center mb-4">Admin Registration</h2>
                
                <label className="label">Name</label>
                <input type="text" className="input input-bordered w-full" placeholder="Enter your name" name="name" required />
                
                <label className="label">Email</label>
                <input type="email" className="input input-bordered w-full" placeholder="Email" name="email" required />
                
                <label className="label">Password</label>
                <input type="password" className="input input-bordered w-full" placeholder="Enter your Password" name="password" required />

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary w-full">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;