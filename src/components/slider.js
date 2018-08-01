import React, { Component } from "react";
import anime from "animejs";
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

class Slider extends Component {
    constructor(props) {
        super(props);

        this.imageNames = [
            ant,
            bird,
            bunny,
            camel,
            cat,
            cheepmunk
        ];

            // cheetah,
            // chicken,
            // crab,
            // crocodile,
            // elephant,
            // fish,
            // flamingo,
            // fox,
            // frog,
            // gorilla,
            // horse,
            // hyena,
            // penguin,
            // pig,
            // polar_bear,
            // rooster,
            // seal,
            // snake,
            // turtle

        this.state = {
            leftImg: ant,
            currentImg: bird,
            rightImg: bunny,
            currentIndex: 1,
            leftSlidePosition: "-1200px"
        };

        this.changeCards = this.changeCards.bind(this);
    }

    handleRightArrowClick() {
        // let animateObj = {
        //     leftImg: "-350px",
        //     currentImg: "-150px",
        //     rightImg: "50%",
        //     rightImgNext: "1200px"
        // };
        //
        //  for (let prop in animateObj) {
        //     anime({
        //         targets: `#${prop}`,
        //         translateX: "-600px",
        //         easing: "easeInQuad"
        //     });

        let slidingAnimation = anime({
            targets: ".slideImgWrapper",
            translateX: "-1200px"
        });

        // let slidingAnimation = anime({
        //     targets: "#rightSlide",
        //     left: "0"
        // });

        // anime({
        //     targets: "#currentSlide",
        //     left: "-1200px"
        // });

        this.setState({
            leftImg: this.imageNames[this.state.currentIndex + 2]
        });

        var promise = slidingAnimation.finished.then(this.changeCards);
    }

    changeCards() {
        console.log("change cards");

        this.setState({ leftSlidePosition: "translateX(2400px)" });

        //this.setState({ currentImg: this.state.rightImg });
        // this.setState({
        //     rightImg: this.imageNames[this.state.notVisibleRightIndex]
        // });
        // this.setState({
        //     rightImgNext: this.imageNames[this.state.notVisibleRightIndex]
        // });
        this.setState({ currentIndex: this.state.currentIndex + 1 });
    }

    render() {
        return (
            <div className="slideWrapper">
                <div id="currentSlide" className="slideImgWrapper">
                    <img
                        id="currentImg"
                        className="slide_img"
                        src={this.state.currentImg}
                        alt=""
                    />
                    <div
                        className="iconRight directionIcon"
                        onClick={this.handleRightArrowClick.bind(this)}
                    >
                        <img src={arrowRight} alt="arrow right" />
                    </div>
                    <div
                        className="iconLeft directionIcon"
                        onClick={this.handleRightArrowClick.bind(this)}
                    >
                        <img src={arrowLeft} alt="arrow left" />
                    </div>
                </div>

                <div
                    id="leftSlide"
                    className="slideImgWrapper"
                    style={{ transform: this.state.leftSlidePosition }}
                >
                    <img
                        id="leftImg"
                        className="slide_img"
                        src={this.state.leftImg}
                        alt=""
                    />
                    <div
                        className="iconRight directionIcon"
                        onClick={this.handleRightArrowClick.bind(this)}
                    >
                        <img src={arrowRight} alt="arrow right" />
                    </div>
                    <div
                        className="iconLeft directionIcon"
                        onClick={this.handleRightArrowClick.bind(this)}
                    >
                        <img src={arrowLeft} alt="arrow left" />
                    </div>
                </div>

                <div id="rightSlide" className="slideImgWrapper">
                    <img
                        id="rightImg"
                        className="slide_img"
                        src={this.imageNames[2]}
                        alt=""
                    />
                    <div
                        className="iconRight directionIcon"
                        onClick={this.handleRightArrowClick.bind(this)}
                    >
                        <img src={arrowRight} alt="arrow right" />
                    </div>
                    <div
                        className="iconLeft directionIcon"
                        onClick={this.handleRightArrowClick.bind(this)}
                    >
                        <img src={arrowLeft} alt="arrow left" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;
