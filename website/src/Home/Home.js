import {React} from 'react';
import './Home.css';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Home() {
    return (
        <div>
        <Navbar />
        <div className="home">
        </div>
        <Footer />
        </div>
    );
}
