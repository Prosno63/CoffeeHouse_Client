import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Footer from "./Footer";


const ViewCoffee = () => {
    const Coffee = useLoaderData();
    const { _id, name, Brand, description, Price, PhotoUrl } = Coffee;



    return (
        <div>

            <Navbar></Navbar>
            <div className="border m-4 align-middle">
            <div className="card m-4 bg-base-100 shadow-xl">
                <figure><img className="w-96 rounded-lg" src={PhotoUrl} alt="Album" /></figure>
                <div className="card-body">
                    <p className="font-bold text-4xl">{Brand}</p>
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className="text-3xl font-bold">{Price}</p>
                </div>
            </div>
            </div>
            <Slider></Slider>
            <Footer></Footer>

        </div>
    );
};

export default ViewCoffee;