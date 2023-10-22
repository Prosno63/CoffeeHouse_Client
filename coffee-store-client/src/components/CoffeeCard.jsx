import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

  const { _id, name, Brand, description, Price, PhotoUrl } = coffee;

  const handleDelete = _id => {

    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {


        fetch(` https://coffee-store-server-nlogatvug-istiaks-projects.vercel.app/coffee/${_id}`, {
          method: 'DELETE'

        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Coffee has been deleted.',
                'success'
              )
              const remaining = coffees.filter(cof => cof._id != _id);
              setCoffees(remaining);

            }
          })
      }
    })

  }

  return (


  
      <div className="card card-side bg-base-100 shadow-xl gap-2 border flex flex-col lg:flex items-center justify-between">

        <div>

        <figure><img className=" rounded-lg" src={PhotoUrl} alt="Movie" /></figure>

        </div>


        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="flex gap-x-1 lg:flex btn-group gap-y-2">

              <Link to={`/viewCoffee/${_id}`}>
                <button className="btn btn-active">View</button>
              </Link>

              <Link to={`updateCoffee/${_id}`}>
                <button className="btn">Update</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-red-800 text-white">Delete</button>
            </div>
          </div>
        </div>
      </div>


  );
};

export default CoffeeCard;