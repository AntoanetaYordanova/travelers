import './config/firebaseConfig';

import { Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import CreatePost from './components/CreatePost/CreatePost';
import Regitser from './components/Register/Register';
import Login from './components/Login/Login';

import { AuthProvider } from './contexts/authContext';

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
                    </Routes>
                </main>
            </div>
        </AuthProvider>
    );
}

export default App;
