import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddToy = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
    data.price = parseFloat(data.price);
    data.rating = parseFloat(data.rating);
    data.availableQuantity = parseFloat(data.availableQuantity);

    fetch("https://robot-toys-server.vercel.app/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="my-14 bg-base-100 mx-16">
      <SectionTitle heading={"Add A Toy"}></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Toy Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <span className="text-red-600">toyName is required</span>
            )}
          </label>

          <label className="form-control w-full ml-5">
            <div className="label">
              <span className="label-text">Toy Photo url</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              {...register("pictureURL", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.pictureURL && (
              <span className="text-red-600">Photo URL is required</span>
            )}
          </label>
        </div>
        <div className="flex">
          <label className="form-control w-full my-3">
            <div className="label">
              <span className="label-text">Seller Name</span>
            </div>
            <input
              type="text"
              defaultValue={user?.displayName}
              {...register("sellerName", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            {errors.sellerName && (
              <span className="text-red-600">sellerName is required</span>
            )}
          </label>
          <label className="form-control w-full my-3 ml-5">
            <div className="label">
              <span className="label-text">Seller Email</span>
            </div>
            <input
              type="email"
              defaultValue={user?.email}
              {...register("sellerEmail", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            {errors.sellerEmail && (
              <span className="text-red-600">sellerEmail is required</span>
            )}
          </label>
        </div>
        <div className="flex">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            {errors.price && (
              <span className="text-red-600">price is required</span>
            )}
          </label>
          <label className="form-control w-full ml-5">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <input
              type="number"
              {...register("rating", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            {errors.rating && (
              <span className="text-red-600">rating is required</span>
            )}
          </label>
        </div>

        <div className="flex my-3">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Quantity</span>
            </div>
            <input
              type="number"
              {...register("availableQuantity", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            {errors.availableQuantity && (
              <span className="text-red-600">quantity is required</span>
            )}
          </label>
          <label className="form-control w-full ml-5">
            <div className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </div>
            <select
              {...register("subCategory", { required: true })}
              className="select select-bordered"
            >
              <option value="">Select a category</option>
              <option value="Educational and Learning Toys">
                Educational and Learning Toys
              </option>
              <option value="Science and Exploration Toys">
                Science and Exploration Toys
              </option>
              <option value="Creative Arts and Crafts">
                Creative Arts and Crafts
              </option>
              <option value="Imaginative Play">Imaginative Play</option>
            </select>
            {errors.subCategory && (
              <span className="text-red-600">Category is required</span>
            )}
          </label>
        </div>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
          {errors.description && (
            <span className="text-red-600">description is required</span>
          )}
        </label>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-ghost bg-[#EB7BC0]">
            Add A Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
