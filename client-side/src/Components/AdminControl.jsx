 import { useLoaderData, useNavigate } from "react-router";
import { useState, useContext } from "react";
import { AdminContext } from "../context/AdminContext";

const AdminControl = () => {
  const users = useLoaderData();

  const [userList, setUserList] = useState(users);

  const { setIsAdmin } = useContext(AdminContext);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this donor?"
    );

    if (!confirmDelete) {
      return;
    }

    fetch(`/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Donor deleted successfully!");

          setUserList((prevUsers) =>
            prevUsers.filter((user) => user._id !== id)
          );
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong!");
      });
  };

  const handleLogout = () => {
    setIsAdmin(false);
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Admin Dashboard
        </h2>

        <button
          onClick={handleLogout}
          className="btn btn-error"
        >
          Logout
        </button>

      </div>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow">

        <table className="table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Blood Group</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {userList.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.group}</td>
                <td>{user.contact}</td>
                <td>{user.location}</td>

                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AdminControl;