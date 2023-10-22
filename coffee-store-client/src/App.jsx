import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App() {


  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  return (

    <div>
      <Navbar></Navbar>
      <h1 className='text-3xl lg:text-6xl text-center mt-5'>CoffeeHouse</h1>
      <h1 className="text-center mb-5">Total {coffees.length} types of Coffee</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 m-10">
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}

          ></CoffeeCard>)
        }

        

      </div>

      <Footer></Footer>







    </div>
  )
}

export default App
