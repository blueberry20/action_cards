import React, { Component } from "react";
import boxImg from "./img/cover.jpg";
import "./App.css";
import Slider from "./components/slider";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Animal Action Cards</h1>
                </header>
                <section id="mainSection">
                    <div className="flex">
                        <div className="flexColumn col-25">
                            <h2>Fun</h2>
                            <h2>Engaging</h2>
                            <h2>Activity</h2>
                        </div>
                        <div className="flexColumn col-50">
                            <img id="boxImg" src={boxImg} alt="package cover" />
                        </div>
                        <div className="flexColumn col-25" />
                    </div>
                </section>
                <section id="slideshowSection">
                    <Slider />
                </section>
            </div>
        );
    }
}

export default App;
