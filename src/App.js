import './config/firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import CreatePost from './components/CreatePost/CreatePost';
import Regitser from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import MyProfile from './components/MyProfile/MyProfile';

import { AuthProvider } from './contexts/authContext';
import Edit from './components/Edit/Edit';

//TODO: Guards

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <header>
                    <Nav />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/post" element={<CreatePost />} />
                        <Route path="/register" element={<Regitser />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/post-details/:id" element={<Details />} />
                        <Route path="/post-edit/:id" element={<Edit />} />
                        <Route path='/my-profile' element={<MyProfile/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </AuthProvider>
    );
}

export default App;
