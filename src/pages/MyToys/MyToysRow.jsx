import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MyToysRow = ({ toy, idx, handleDelete }) => {
  const { _id, name, pictureURL, sellerEmail, subCategory } = toy;
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={pictureURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{subCategory}</td>
      <td>{sellerEmail}</td>
      <th>
        <button className="btn btn-warning">
          <Link to={`/updateToy/${_id}`}>Update</Link>
        </button>
      </th>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-error">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyToysRow;
