
const BookingRow = ({booking}) => {
  const {service_date, service_title, price, service_img} = booking;
  //customerName, customerEmail, 
  return (
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          
            <div className="avatar">
              <div className="rounded w-12 h-12">
                {service_img &&  <img src={service_img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
          
        </td>
        <td>{ service_title } </td>
        <td>{ service_date }  </td>
        <td>${price}  </td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
  );
};

export default BookingRow;