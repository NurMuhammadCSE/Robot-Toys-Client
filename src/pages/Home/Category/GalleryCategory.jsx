import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
  }, []);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-8">Shop by Category</h2>
      <Tabs>
        <div className="flex justify-center items-center mb-4">
          <TabList className="flex gap-4">
            {categories.map((category, index) => (
              <Tab key={index} className="cursor-pointer">
                {category}
              </Tab>
            ))}
          </TabList>
        </div>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            <h3 className="text-3xl font-bold mb-6">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allToys
                .filter((toy) => toy.subCategory === category)
                .slice(0, 6) // Show up to 6 toys for each category
                .map((toy, i) => (
                  <div
                    key={i}
                    className="overflow-hidden bg-[#fff] shadow-lg rounded-md"
                  >
                    <img
                      src={toy.pictureURL}
                      alt={toy.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-bold mb-2">{toy.name}</h2>
                      <p className="text-gray-700">{toy.description}</p>
                      <div className="mt-4">
                        <span className="text-gray-600">
                          Price: ${toy.price}
                        </span>
                        <span className="block mt-2 text-gray-600">
                          Rating: {toy.rating}
                        </span>
                      </div>
                      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Category;
