import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const AllToys = () => {
  const allToys = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleViewDetails = (toyId) => {
    // Check if the user is logged in (you need to implement this logic)
    if (user && user?.email) {
      // Redirect to the Details Page
      navigate(`/details/${toyId}`);
    } else {
      // Redirect to the login page
      navigate("/login");
    }
  };
  return (
    <div className="overflow-x-auto my-14">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Seller</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {allToys.map((toy, i) => (
            <tr key={toy._id}>
              <td>{i + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={toy.pictureURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{toy.name}</div>
                  </div>
                </div>
              </td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.availableQuantity}</td>
              <td>{toy.sellerName}</td>
              <th>
                <button
                  onClick={() => handleViewDetails(toy._id)}
                  className="btn btn-success"
                >
                  View Details
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
