import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
  const {_id, title, img, price} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={img} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="flex justify-between p-10">
      <div>
      <h2 className="card-title">{title}</h2>
      <p className="text-xl text-red-500">Price: ${price}</p>
      </div>
      <div>
      <button className="btn btn-circle btn-outline btn-error">
       <Link to={`/checkout/${_id}`}> <FaArrowRight></FaArrowRight></Link>
</button>
      </div>
    </div>
  </div>
  );
};

export default ServiceCard;