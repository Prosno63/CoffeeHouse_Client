
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import Navbar from './Navbar';

import Footer from './Footer';

const AddCoffee = () => {

    const handleAdd = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const Brand = form.brandName.value;
        const description = form.description.value;
        const Price = form.price.value;
        const PhotoUrl = form.photo.value;


        const newCoffee = { name, Brand, description, Price, PhotoUrl };

        console.log(newCoffee);

        //send data to server

        fetch(' https://coffee-store-server-nlogatvug-istiaks-projects.vercel.app/coffee', {
            method: 'POST',
            headers: {

                'content-type': 'application/json'

            },
            body: JSON.stringify(newCoffee)
        })



            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    Swal.fire(
                        'Coffee Added to Cart!',
                        'You clicked the button!',
                        'success'
                    )
                    form.reset();
                }
            })

    }
    return (



        <div>

            <Navbar></Navbar>
        
            <h1 className='text-center font-bold text-3xl lg:text-6xl m-4'>Add Coffee</h1>

            <form onSubmit={handleAdd} className='bg-slate-400 m-5 rounded-lg'>

                <div className='flex flex-col lg:flex lg:flex-row gap-x-4 p-2 justify-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Brand Name</span>

                        </label>
                        <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>

                        </label>
                        <input type="text" name="description" placeholder="description" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>

                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo URL</span>

                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full max-w-xs" />

                    </div>

                </div>
                <input type="submit" value="Add Coffee" className='btn btn-block mb-4' />


            </form>

            <Footer></Footer>

            

           

        </div>
    );
};

export default AddCoffee;