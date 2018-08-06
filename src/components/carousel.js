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
import { Carousel } from "react-bootstrap";

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
    }

    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            width={900}
                            height={500}
                            alt="900x500"
                            src="/carousel.png"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width={900}
                            height={500}
                            alt="900x500"
                            src="/carousel.png"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width={900}
                            height={500}
                            alt="900x500"
                            src="/carousel.png"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Slider;
