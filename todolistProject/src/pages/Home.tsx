import NavBar from "../components/NavBar";
import ToDoList from "../components/TodoList";

export default function Home() {
    const date = new Date().toISOString().slice(0,22);
    return (
        <>  <div className="relative h-screen w-full">
            <NavBar />
            <h1 className="text-center"> TODO LIST</h1>
            <h2 className="text-center">{date}</h2>
            
            <ToDoList />
            </div>
       </>
    )
}