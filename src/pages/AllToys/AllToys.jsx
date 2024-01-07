import { useEffect, useState, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const AllToys = () => {
  const [loading, setLoading] = useState(true);
  const allToys = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (allToys) {
      setLoading(false);
    }
  }, [allToys]);

  const handleViewDetails = (toyId) => {
    if (user && user?.email) {
      navigate(`/details/${toyId}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="overflow-x-auto mb-10">
      <SectionTitle
        heading={"All Toys"}
        subHeading={"Toys are children's words and play is their language."}
      ></SectionTitle>

      {loading ? (
        <div>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : allToys && allToys.length > 0 ? (
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
      ) : (
        <p>No toys found</p>
      )}
    </div>
  );
};

export default AllToys;
