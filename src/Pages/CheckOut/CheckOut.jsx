import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const {title, _id, price, img} = service;
  const {user} = useContext(AuthContext);
  
  const handleBookService  = event => {
     event.preventDefault();
     const form = event.target;
     const name = form.name.value;
     const date = form.date.value;
     const email = user?.email;
     const booking = {
      customerName: name,
      service_img: img,
      service_date: date,
      service_id : _id,
      price: price,
      service_title : title,
      customerEmail: email
     }
     console.log(booking);

     fetch('https://car-doctor-server-three-gilt.vercel.app/bookings', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',

        },
        body: JSON.stringify(booking)
     })
     .then(res => res.json())
     .then(data => {
      console.log(data);
      if(data.insertedId){
        alert('service booked successfully')
      }
     })
  }

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold ">Book Car Repair Service:  {title}</h2>
          <div className="card-body">
            <form onSubmit={handleBookService}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  defaultValue={user?.displayName}
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Date"
                  name="date"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input
                  type="text"
                  placeholder="due amount"
                  defaultValue={'$' + price}
                  name="due"
                  className="input input-bordered"
                />
              </div>
            </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-error text-white bg-red-600"
                  type="submit"
                  value="Order Confirm"
                />
              </div>
            </form>
          </div>
        </div>
  
  );
};

export default CheckOut;