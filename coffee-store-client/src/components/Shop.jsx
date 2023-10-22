import React from 'react';

const Shop = () => {
    return (
        <div>
            <p className='text-3xl lg:text-6xl font-bold text-center mb-5'>Our other outlets</p>
            <div className='flex flex-col pl-5 pr-5 lg:flex-row justify-center gap-4'>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.ibb.co/7JhYmp6/out1.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl lg:text-4xl">Dhanmondi 32 </h2>
                    <p>Fueling Your Daily Grind with Every Sip</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Visit Us</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.ibb.co/sbSCVbS/out2jpeg.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl lg:text-4xl">Mirpur 10</h2>
                    <p>"Awaken Your Senses with Every Sip."</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Visit Us</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.ibb.co/sbSCVbS/out2jpeg.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl lg:text-4xl">Uttara, Sector 8</h2>
                    <p>"Where Every Sip is a Hug in a Mug"</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Visit Us</button>
                    </div>
                </div>
            </div>

            </div>
            
        </div>
    );
};

export default Shop;