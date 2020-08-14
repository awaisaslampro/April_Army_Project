import React, { Component } from 'react';
import '../../../layout/style/VideoStepper.css';
import { Button, Divider, Icon } from "semantic-ui-react";
import $ from "jquery";
import jquery from 'jquery';


class VideoStepper extends Component {
    render(
    ) {
        return (

            <div className="carousel-reviews broun-block" style={{marginTop:'103px'}}>
                <div className="">
                    <div className="row">
                        <div id="carousel-reviews" className="carousel slide col-md-12" data-ride="carousel">

                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="item1">

                                        <div className="zmin col-md-6 col-sm-8 col-8">
                                            <a href="https://www.youtube.com/watch?v=YXFGz8wsg7U" target="_blank"> <img src="assets/img/sunny.png" /></a>
                                        </div>

                                        <div className="zmin col-md-6 col-sm-8 col-8 ">
                                            <a href="https://www.youtube.com/watch?v=YXFGz8wsg7U" target="_blank"><img src="assets/img/sunny.png" /></a>
                                        </div>

                                        <div className="zmin col-md-6 col-sm-8 col-8 ">
                                            <a href="https://www.youtube.com/watch?v=YXFGz8wsg7U" target="_blank"><img src="assets/img/sunny.png" /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="item2">
                                        <div className="zmin col-md-6 col-sm-8 col-8">

                                            <a href="https://www.youtube.com/watch?v=YXFGz8wsg7U" target="_blank"><img src="assets/img/sunny.png" /></a>
                                        </div>
                                        <div className="zmin col-md-6 col-sm-8 col-8 ">
                                            <a href="https://www.youtube.com/watch?v=YXFGz8wsg7U" target="_blank"><img src="assets/img/sunny.png" /></a>

                                        </div>
                                        <div className="zmin col-md-6 col-sm-8 col-8 ">
                                            <a href="https://www.youtube.com/watch?v=YXFGz8wsg7U" target="_blank"><img src="assets/img/sunny.png" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a className="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a className="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default VideoStepper;
