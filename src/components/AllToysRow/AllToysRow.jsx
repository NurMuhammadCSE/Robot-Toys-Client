const AllToysRow = ({ toy }) => {
  const { image, seller, name, subCategory, price, quantity } = toy;
  return (
    <div>
      <tbody>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">Hart Hagerty</div>
              </div>
            </div>
          </td>
          <td>{subCategory}</td>
          <td>{price}</td>
          <td>{quantity}</td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
    </div>
  );
};

export default AllToysRow;
