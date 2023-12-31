import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  console.log(toyDetails);

  const {
    pictureURL,
    name,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    availableQuantity,
    description,
  } = toyDetails;
  return (
    <div>
      <div className="hero min-h-screen bg-base-300 my-14">
        <div className="hero-content flex-col lg:flex-row">
          <img src={pictureURL} className="max-w-xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold my-2 ml-10">{name}</h1>
            <p className="text-xl font-bold my-2 ml-10">{sellerName}</p>
            <p className="text-xl font-bold my-2 ml-10">{sellerEmail}</p>
            <p className="text-xl font-bold my-2 ml-10">
              Category: {subCategory}
            </p>
            <p className="text-xl font-bold my-2 ml-10">Price: ${price}</p>
            <p className="text-xl font-bold my-2 ml-10">Rating: {rating}</p>
            <p className="text-xl font-bold my-2 ml-10">
              Available Quantity: {availableQuantity}
            </p>
            <p className="py-6 font-bold ml-10">Description: {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
