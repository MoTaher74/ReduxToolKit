import ProductCard from "./ProductCard";


const Home =()=>{
return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
        {Array(12).fill('').map((_, i) => (<ProductCard key={i} />))}

    </div>

)
}

export default Home ;