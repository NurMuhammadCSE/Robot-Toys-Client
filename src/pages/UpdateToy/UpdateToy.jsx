import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { useNavigate, useParams, useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const toyDetails = useLoaderData();
  const { id } = useParams();
  console.log(toyDetails, id);

  const {
    name,
    price,
    rating,
    description,
    pictureURL,
    subCategory,
    availableQuantity,
    _id,
  } = toyDetails;

  const onSubmit = (data) => {
    console.log(data);
    data.price = parseFloat(data.price);
    data.rating = parseFloat(data.rating);
    data.availableQuantity = parseFloat(data.availableQuantity);

    fetch(`http://localhost:5000/updateToy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          reset();
          navigate("/");
          Swal.fire({
            title: "Updated!",
            text: "Your file has been Updated.",
            icon: "success",
          });
          // update state
          //   const remaining = bookings.filter((booking) => booking._id !== id);
          //   const updated = bookings.find((booking) => booking._id === id);
          //   updated.status = "confirm";
          //   const newBookings = [updated, ...remaining];
          //   setBookings(newBookings);
        }
      });
  };
  return (
    <div>
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
                defaultValue={name}
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
                defaultValue={pictureURL}
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
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="number"
                defaultValue={price}
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
                defaultValue={rating}
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
                defaultValue={availableQuantity}
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
                defaultValue={subCategory}
              >
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
              defaultValue={description}
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
              Update A Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
