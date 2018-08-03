import React, { Component } from "react";

class Slide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.imageName}</div>;
    }
}

export default Slide;
