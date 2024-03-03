import React,{ useState, useEffect } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaBars } from "react-icons/fa";
import HomeDetails from "./HomeDetails";
import Services from "./Services";
import Clients from "./Clients";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts"
const HomePage = () => {

    const [view, setView] = useState("Home");
    const [showsidebar, setLoadSideBar] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress(progress + 10); // Increase the progress by 10% every 1 second
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [progress]);

    const handleUserClick = () => {
        setLoadSideBar(!showsidebar);
    }

    const handleClick = (e) => {
        setView(e);
    }

    return (
        <>
            <div className="contaimer-fluid ">
                <div className="row back-color">
                    <div className="col-md-1">
                        <div className="bar-hw" onClick={handleUserClick}><FaBars /></div>
                    </div>
                    <div className="col-md-10"></div>
                </div>
                <div className="row">
                    {showsidebar && (
                        <>
                            <div className="col-md-3">
                                <ul>
                                    <ProgressBar animated now={progress} />
                                    <li className={view === "Home" ? "active" : null} onClick={() => { handleClick("Home") }}>Home</li>
                                    <li className={view === "Services" ? "active" : null} onClick={() => { handleClick("Services") }}>Services</li>
                                    <li className={view === "Clients" ? "active" : null} onClick={() => { handleClick("Clients") }}>Clients</li>
                                    <li className={view === "AboutUs" ? "active" : null} onClick={() => { handleClick("AboutUs") }}>AboutUs</li>
                                    <li className={view === "Contacts" ? "active" : null} onClick={() => { handleClick("Contacts") }}>Contacts</li>
                                </ul>
                            </div>
                            <div className="col-md-9">
                                {view === "Home" && <HomeDetails />}
                                {view === "Services" && <Services />}
                                {view === "Clients" && <Clients />}
                                {view === "AboutUs" && <AboutUs />}
                                {view === "Contacts" && <Contacts />}
                            </div>
                        </>
                    )}
                </div>

            </div>
        </>
    )
}

export default HomePage