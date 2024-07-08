import HeroSection from "../components/hero";
import NavBar from "../components/NavBar";

export default function Home() {
    const date = new Date().toISOString().slice(0,22);
    return (
        <>
            <NavBar />
            <h1 className="text-center"> TODO LIST</h1>
            <h2 className="text-center">{date}</h2>
       </>
    )
}