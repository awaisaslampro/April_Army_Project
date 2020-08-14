import React, { Component } from 'react';
import $ from 'jquery';
import jquery from 'jquery';
import { Link } from 'react-router-dom';
import '../../../layout/style/UploadFanArt.css';


$('document').ready(function () {

    $('.chatter-close, #cancel_discussion').click(function () {
        $('#new_discussion').slideUp();
    });
    $('#new_discussion_btn').click(function () {
        $('#new_discussion').slideDown();
        $('#title').focus();
    });

    // $("#color").spectrum({
    //     color: "#333639",
    //     preferredFormat: "hex",
    //     containerClassName: 'chatter-color-picker',
    //     cancelText: '',
    //     chooseText: 'close',
    //     move: function(color) {
    //         $("#color").val(color.toHexString());
    //     }
    // });



});



class UploadFanArt extends Component {
    render() {
        return (
            <>
                {/* <button id="new_discussion_btn">discussion button</button> */}

                <div className="newDiscussionTopDivider">
                    <div id="new_discussion" className="uploadFanArtContainer" style={{ display: 'none' }}>
                        <div className="chatter_loader dark" id="new_discussion_loader" style={{ display: 'none' }}>
                            <div></div>
                        </div>
                        <form className="chatter_form_editor" style={{ display: 'block' }}>

                            <div className="discussionTopHeader">
                                <div className="mr-auto">
                                    {/* Title */}
                                    <input type="text" className="form-controll uploadfanArtInput " id="title" name="title" placeholder="Enter Title" style={{height: '50px' }}>
                                    </input>
                                </div>
                                {/* Category */}
                                <div className="" >
                                    <select id="chatter_category_id" className="form-controll uploadfanArtInputType" name="chatter_category_id">
                                        <option value="5">Image</option>
                                        <option value="10">Video</option>

                                    </select>
                                </div>

                                <div className="">
                                    <i class="fa fa-close chatter-close" ></i>
                                </div>
                            </div>

                            {/* Body */}
                            <div id="uploadEditor">

                                {/* <label id="tinymce_placeholder" style={{display:'block'}}>Type your discussion here...</label> */}

                                <textarea className="" placeholder="Description..."></textarea>
                                <div id="mceu_12" className="mce-tinymce mce-container mce-panel" hidefocus="1" tabindex="-1"
                                    role="application" style={{ visibility: 'hidden', borderWidth: '1px' }}>
                                </div>
                    
                                <div className="md-form">

                                    <div className="file-field">
                                        <div style={{ lineHeight: '2rem' }} className="fanArtUploadbtn uploadFanArtonHover">
                                            <span>Select File</span>
                                            <input type="file" name="file"></input>
                                        </div>

                                        <div className="file-path-wrapper">
                                            <input type="text" className="file-path validate" placeholder="Upload file"></input>
                                        </div>
                                    </div>

                                    <small>only jpg, png, gif, mp4 files are allowed. Maximum file size 20MB for videos & 20MB for images</small>
                                </div>





                                {/* Add Thumbnail */}

                                <div className="md-form md-form1">

                                    <div className="file-field">
                                        <div style={{ lineHeight: '2rem' }} className="fanArtUploadbtn uploadFanArtonHover">
                                            <span>Select Thumbnail</span>
                                            <input type="file" name="file"></input>
                                        </div>

                                        <div className="file-path-wrapper">
                                            <input type="text" className="file-path validate" placeholder="Upload thumbnail image"></input>
                                        </div>
                                    </div>

                                    <small>only jpg, png files are allowed. Recommended 320x180 . Maximum file size 2MB</small>
                                </div>

                            </div>


                            <div id="uploadFanArt_footer">
                                <button id="submit_discussion" className="uploadFanArtSubmit_btn uploadFanArtonHover">
                                    <i className="fa fa-thumbs-up"></i> Submit</button>

                                <a href="/forms" id="cancel_discussion" className="btn btn-default pull-right" style={{ display: "none" }}>Cancel</a>
                                <div style={{ clear: 'both' }}></div>
                            </div>
                        </form>
                    </div>
                </div>

            </>
        );
    }
}
export default UploadFanArt;