const DonarForm = () => {
  const handleDonar = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const group = e.target.group.value;
    const contact = e.target.contact.value;
    const password = e.target.password.value;
    const location = e.target.location.value;
    console.log(name, email, password, contact);
    const user = { name, email, contact, password, group, location };
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        e.target.reset();
        if(data){
            alert('Successfully Registered')
        }
        else {
    alert(data.message);
  }

      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleDonar}>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter your name"
                  name="name"
                  required
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Contact info</label>
                <input
                  type="tel"
                  className="input"
                  placeholder="Enter Phone Number"
                  name="contact"
                  pattern="[0-9]{11}"
                  maxLength={11}
                  required
                />
                <label className="label">Age</label>
                <input
                  type="number"
                  className="input"
                  placeholder="Enter your Age"
                  required
                />
                <label className="label">Blood Group</label>
                <select className="select" name="group" required>
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                <label className="label">Area</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter your location"
                  name="location"
                  required
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  minLength={6}
                  required
                />
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonarForm;
