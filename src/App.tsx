import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {
    Navbar,
    Button,
    Text,
    Card,
    Radio
} from "@nextui-org/react";
import Author from "./author/pages/Author";
import Book from "./book/pages/book";
import Home from "./home/home";

function App() {
    return (
        <Router>
            <div>

                <Navbar>
                    <Navbar.Brand>
                        <Text b color="inherit" hideIn="xs">
                            Books Store
                        </Text>
                    </Navbar.Brand>
                    <Navbar.Content hideIn="xs">
                        <Link to="/">Home</Link>
                        <Link to="/books">Books</Link>
                        <Link to="/authors">Authors</Link>
                    </Navbar.Content>
                    <Navbar.Content></Navbar.Content>
                </Navbar>

                <Routes>

                    <Route path="/authors"
                        element={<Author/>}/>
                    <Route path="/books"
                        element={<Book/>}/>
                    <Route path="/"
                        element={<Home/>}/>

                </Routes>
            </div>
        </Router>
    );
}


export default App;
