import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/5TSrdWQ/images.jpg" className="w-full rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Try Us. We are Better than Usual</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-slate-400">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;