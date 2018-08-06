import React, { Component } from "react";
import arrowLeft from "../img/arrow-left.png";
import arrowRight from "../img/arrow-right.png";
import bunny from "../img/bunny.jpg";
import horse from "../img/horse.jpg";
import seal from "../img/seal.jpg";
import ant from "../img/ant.jpg";
import bird from "../img/bird.jpg";
import camel from "../img/camel.jpg";
import cat from "../img/cat.jpg";
import cheepmunk from "../img/cheepmunk.jpg";
import cheetah from "../img/cheetah.jpg";
import chicken from "../img/chicken.jpg";
import crab from "../img/crab.jpg";
import crocodile from "../img/crocodile.jpg";
import elephant from "../img/elephant.jpg";
import fish from "../img/fish.jpg";
import flamingo from "../img/flamingo.jpg";
import fox from "../img/fox.jpg";
import frog from "../img/frog.jpg";
import gorilla from "../img/gorilla.jpg";
import hyena from "../img/hyena.jpg";
import penguin from "../img/penguin.jpg";
import pig from "../img/pig.jpg";
import polar_bear from "../img/polar_bear.jpg";
import rooster from "../img/rooster.jpg";
import snake from "../img/snake.jpg";
import turtle from "../img/turtle.jpg";
// import Slide from "./slide.js";
import anime from "animejs";
//import { Slide } from "react-slideshow-image";
import Arrow from "./arrow.js";
import ImageSlide from "./imageSlide.js";

const imgUrls = [
    ant,
    bird,
    bunny,
    camel,
    cat,
    cheepmunk,
    cheetah,
    chicken,
    crab,
    crocodile,
    elephant,
    fish,
    flamingo,
    fox,
    frog,
    gorilla,
    horse,
    hyena,
    penguin,
    pig,
    polar_bear,
    rooster,
    seal,
    snake,
    turtle
];

class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        return (
            <div id="carousel">
                <div
                    className="iconLeft directionIcon"
                    onClick={this.previousSlide}
                >
                    <img src={arrowLeft} alt="arrow right" />
                </div>
                <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
                <div
                    className="iconRight directionIcon"
                    onClick={this.nextSlide}
                >
                    <img src={arrowRight} alt="arrow right" />
                </div>
            </div>
        );
    }
}

export default Slider;
