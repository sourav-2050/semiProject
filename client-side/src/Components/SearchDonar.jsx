 import { useState } from "react";
import { useLoaderData } from "react-router";

const SearchDonar = () => {
  const users = useLoaderData();

  const [searchResult, setSearchResult] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    const group = e.target.group.value.trim();
    const location = e.target.location.value.trim();

    const result = users.filter(
      (user) =>
        user.group?.toLowerCase() === group.toLowerCase() &&
        user.location?.toLowerCase() === location.toLowerCase()
    );

    setSearchResult(result);
    setSearched(true);
  };

  return (
    <div>
      {/* Search Section */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col w-full">

          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <div className="card-body">

              <h2 className="text-2xl font-bold text-center mb-4">
                Search Donor
              </h2>

              <form onSubmit={handleSearch}>

                {/* Blood Group */}
                <label className="label">
                  Blood Group
                </label>

                <select
                  name="group"
                  className="select select-bordered w-full"
                  required
                >
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

                {/* Location */}
                <label className="label mt-3">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  className="input input-bordered w-full"
                  placeholder="Enter Location"
                  required
                />

                {/* Search Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-full mt-4"
                >
                  Search
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

      {/* Search Result  */}
      <div className="bg-base-500 min-h-screen p-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          Search Result
        </h2>

        {!searched ? (
          <p className="text-center">
            Search for a donor
          </p>
        ) : searchResult.length === 0 ? (
          <p className="text-center font-semibold">
            No donor found
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {searchResult.map((user) => (
              <div
                key={user._id}
                className="card bg-red-500 shadow-xl p-5"
              >

                <h3 className="text-xl font-bold mb-3">
                  {user.name}
                </h3>

                <p>
                  <strong>Blood Group:</strong> {user.group}
                </p>

                <p>
                  <strong>Location:</strong> {user.location}
                </p>

                <p>
                  <strong>Email:</strong> {user.email}
                </p>

                <p>
                  <strong>Contact:</strong> {user.contact}
                </p>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default SearchDonar;