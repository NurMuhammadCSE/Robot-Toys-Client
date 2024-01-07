import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://robot-toys-server.vercel.app/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <div className="my-14">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What our customers say"}
      ></SectionTitle>
      <div className="flex justify-center flex-wrap items-center gap-10">
        {loading ? (
          // Loading spinner or message
          <div>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          testimonials.map((item) => (
            <div key={item.name} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <Rating
                  style={{ maxWidth: 250 }}
                  value={item.rating}
                  readOnly
                />
                <p>{item.description}</p>
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt="User Avatar"
                    />
                  </div>
                </div>
                <h2 className="card-title">{item.name}</h2>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Testimonial;
