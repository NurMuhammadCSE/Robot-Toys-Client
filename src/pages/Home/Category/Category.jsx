import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  const [allToys, setAllToys] = useState([]);
  const categories = [
    "Educational and Learning Toys",
    "Science and Exploration Toys",
    "Creative Arts and Crafts",
    "Imaginative Play",
  ];

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
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

        <div className="my-10">
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
                            <button className="btn btn-primary">
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
