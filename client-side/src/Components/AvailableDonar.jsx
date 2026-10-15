 import { useLoaderData } from "react-router";

const AvailableDonar = () => {
  const users = useLoaderData();

  const bloodGroups = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ];

  const bloodGroupCount = bloodGroups.map((group) => ({
    group,
    count: users.filter((user) => user.group === group).length,
  }));

  console.log(users);

  return (
    <div className="p-6">

      {/* Blood Group Count */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-6">
          Available Donar
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          {bloodGroupCount.map((item) => (
            <div
              key={item.group}
              className="border rounded-lg px-6 py-4 shadow"
            >
              <h3 className="text-xl font-bold">
                {item.group}
              </h3>

              <p>
                {item.count} Donor
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Donor Information */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">
          Donor Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {users.map((user) => (
            <div
              key={user._id}
              className="border rounded-xl p-5 shadow-md"
            >
              <h3 className="text-xl font-bold mb-3">
                {user.name}
              </h3>

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>Blood Group:</strong> {user.group}
              </p>

              <p>
                <strong>Contact:</strong> {user.contact}
              </p>

              <p>
                <strong>Location:</strong> {user.location}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default AvailableDonar;