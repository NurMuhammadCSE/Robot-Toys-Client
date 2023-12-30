import { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("ratings.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonial(data);
      });
  }, []);
  return <div>
    
  </div>;
};

export default Testimonial;
