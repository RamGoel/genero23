// import classes from "./Technical.module.css";
// import TechnicalLists from "../TechnicalDetail/TechnicalLists";
import LiteraryData from "../../../EventsData/LiteraryData";
import { useEffect } from "react";
import EventCard from "../../../Atoms/cards/EventCard1/EventCard";

import "./LiteraryList.css"
import Navbar from "../../../Atoms/navbar/NavCopy";
import Footer from "../../../Atoms/footer/Footer";

const LiteraryList = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // console.log(CulturalData);

    return (
        <div className="bd">
            <Navbar />

            <div className="event-padded">

            <h1 style={{textAlign:"center"}}>Literary</h1>
            
            <div className="grid-container">
                {LiteraryData.map((list,index) => {
                    // {console.log(list.heading)}
                    return (
                        <EventCard
                            key={list.id}
                            serial={index+1}
                            imgSrc={list.imgSrc}
                            propStyle={{height:'200px'}}
                            name={list.heading}
                            redirectLink={list.redirectLink}
                        />
                    );
                })}
            </div>

            <Footer />
            </div>
        </div>
    );
};

export default LiteraryList;
