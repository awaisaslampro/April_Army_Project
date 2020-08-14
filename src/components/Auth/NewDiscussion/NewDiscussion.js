import React, {Component} from 'react';
import $ from 'jquery';
import jquery from 'jquery';
import {Link} from 'react-router-dom';
import '../../../layout/style/NewDiscussion.css';


$('document').ready(function(){

    $('.chatter-close, #cancel_discussion').click(function(){
        $('#new_discussion').slideUp();
    });
    $('#new_discussion_btn').click(function(){
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



class NewDiscussion extends Component{
  render(){
    return(
   <>
{/* <button id="new_discussion_btn">discussion button</button> */}

<div className="newDiscussionTopDivider">
<div id="new_discussion" className="" style={{display:'none'}}>
    <div className="chatter_loader dark" id="new_discussion_loader" style={{display:'none'}}>
        <div></div>
        </div>
        <form className="chatter_form_editor"  style={{display:'block'}}>

            <div className="discussionTopHeader">
                <div className="mr-auto">
                    {/* Title */}
                    <input type="text" className="form-controll titleOfDiscussion" id="title" name="title" placeholder="Title of Discussion" style={{height:'50px'}}>           
                    </input>
                    </div>
                        {/* Category */}
                <div className="" >
                    <select id="chatter_category_id" className="form-controll" name="chatter_category_id">

                                <option value>Select a Category</option>
                                <option value="5">Rules</option>
                                <option value="10">Brand Members</option>
                                <option value="11">Music</option>
                                <option value="12">Merchandise</option>
                                <option value="13">General Discussion</option>

                                <option value="14">Game Development</option>
                                <option value="15">Music Production</option>
                                <option value="16">April Army-Features</option>
                                <option value="17">Bugs / Errors</option>
                                <option value="18">Dev/Maintenance</option>
                                <option value="19">Nice Weekend Wishes</option>
                                <option value="20">Livestream</option>
                        </select>
                        </div>
      
                    <div className="">
                    <i class="fa fa-close chatter-close" ></i> 
                        </div>
                    </div>

                    {/* Body */}
                    <div id="editor">

                    {/* <label id="tinymce_placeholder" style={{display:'block'}}>Type your discussion here...</label> */}
                    
                    <textarea className="" placeholder="Type your discussion here..."></textarea>
                    <div id="mceu_12" className="mce-tinymce mce-container mce-panel" hidefocus="1" tabindex="-1"
                    role="application" style={{visibility: 'hidden', borderWidth: '1px'}}>

                        <div id="mceu_12-body" className="mce-container-body mce-stack-layout">
                            <div id="mceu_13" className="mce-toolbar-grp mce-container mce-panel mce-stack-layout-item mce-first"
                            hidefocus="1" tabindex="-1" role="group">

                            <div id="mceu_13-body" className="mce-container-body mce-stack-layout">
                                <div id="mceu_14" className="mce-container mce-toolbar mce-stack-layout-item mce-first mce-last" role="toolbar">
                                </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    </div>


                    <div id="new_discussion_footer">
                        <input type="text" name="color" id="color" style={{display:'none'}}></input>
                        <div className="sp-replacer sp-light">
                            <div className="sp-preview">
                                <div className="sp-preview-inner" style={{backgroundColor: 'rgb(51, 54, 57)'}}></div>
                            </div>
                            <div className="sp-dd">▼</div>
                            </div>

                            <span className="select_color_text"><span className="selectionDiscussionColor">Select a color for this discussion</span>(Optional)</span>

                            <button id="submit_discussion" className="submit_discussion_btn"> 
                            <i className="fa fa-plus-circle"></i> Create Discussion</button>

                            <a href="/forms" id="cancel_discussion" className="btn btn-default pull-right" style={{display:"none"}}>Cancel</a>
                            <div style={{clear:'both'}}></div>
                           </div>
        </form>
        </div>
        </div>

   </>
    );
  }
}
export default NewDiscussion;