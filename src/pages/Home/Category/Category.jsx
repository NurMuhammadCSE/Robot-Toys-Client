import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Category = () => {
  const [allToys, setAllToys] = useState([]);
  const categories = [
    "Educational and Learning Toys",
    "Science and Exploration Toys",
    "Creative Arts and Crafts",
    "Imaginative Play",
  ];
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const handleViewDetails = (toyId) => {
    // Check if the user is logged in (you need to implement this logic)
    if (user && user?.email) {
      // Redirect to the Details Page
      navigate(`/details/${toyId}`);
    } else {
      Swal.fire({
        title: "You are not logged in? ❌",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to the login page
          navigate("/login");
        }
      });
    }
  };

  useEffect(() => {
    fetch("https://robot-toys-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="my-14">
      <SectionTitle
        heading={"Category Showcase"}
        subHeading={"Discover a World of Robotic Toys"}
      ></SectionTitle>
      {/* <h2>Shop by Category</h2> */}
      <Tabs>
        <div className="flex justify-center items-center mb-4">
          <TabList className="flex gap-4">
            {categories.map((category, index) => (
              <Tab key={index}>{category}</Tab>
            ))}
          </TabList>
        </div>

        <div>
          {categories.map((category, index) => (
            <TabPanel key={index}>
              {/* <h3>{category}</h3> */}
              <div className="flex flex-wrap justify-center items-center gap-10">
                {allToys
                  .filter((toy) => toy.subCategory === category)
                  .map((filteredToy, i) => (
                    <div key={i} className="toy-card">
                      <div className="card w-96 bg-base-300 shadow-xl">
                        <figure className="px-10 pt-10">
                          <img
                            src={filteredToy.pictureURL}
                            alt={filteredToy.name}
                            className="rounded-xl"
                          />
                        </figure>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">{filteredToy.name}</h2>
                          <h2 className="card-title">${filteredToy.price}</h2>
                          <div className="card-actions">
                            <button
                              onClick={() => handleViewDetails(filteredToy._id)}
                              className="btn btn-success"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default Category;
