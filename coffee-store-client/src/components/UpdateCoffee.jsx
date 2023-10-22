import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from './Navbar';


const UpdateCoffee = () => {

    const Coffee = useLoaderData();
    const { _id, name, Brand, description, Price, PhotoUrl } = Coffee;
    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const Brand = form.brandName.value;
        const description = form.description.value;
        const Price = form.price.value;
        const PhotoUrl = form.photo.value;


        const updatedCoffee = { name, Brand, description, Price, PhotoUrl };

        console.log(updatedCoffee);

        //send data to server

        fetch(` https://coffee-store-server-nlogatvug-istiaks-projects.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'

            },
            body: JSON.stringify(updatedCoffee)
        })



            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Update Successful!',
                        'You clicked the button!',
                        'success'
                    )
                   
                }
              
            })

    }

    return (
        <div>
            <Navbar></Navbar>

            <h1 className='text-center font-bold text-3xl lg:text-6xl m-4'>Update Coffee</h1>

            <div className='m-8 border'>

                <form onSubmit={handleUpdateCoffee} className='bg-green-700'>

                    <div className='flex flex-col lg:flex lg:flex-row gap-x-4 p-2 justify-center'>
                        <div className="form-control w-full max-w-xs items-center">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Name</span>

                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Brand Name</span>

                            </label>
                            <input type="text" name="brandName" defaultValue={Brand} placeholder="Brand Name" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Description</span>

                            </label>
                            <input type="text" name="description" defaultValue={description} placeholder="description" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Price</span>

                            </label>
                            <input type="text" name="price" defaultValue={Price} placeholder="Price" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Photo URL</span>

                            </label>
                            <input type="text" name="photo" defaultValue={PhotoUrl} placeholder="Photo URL" className="input input-bordered w-full max-w-xs" />

                        </div>

                    </div>
                    <input type="submit" value="Update Coffee" className='btn btn-block p-2 mb-3' />


                </form>

            </div>



        </div>
    );
};

export default UpdateCoffee;