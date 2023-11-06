import React from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Bio from "../../components/Bio";
import Footer from "../../components/Footer";
import "./index.css";

function Index() {
    return (
        <div>
            <Header />
            <Navigation />
            <Bio />
            <Footer />
        </div>
    );
}

export default Index;

