import React from 'react';
import { Container } from 'react-bootstrap';
import './PostCard.css'
const PostCard = () => {
    return (
        <Container>
            
<div className="fb-cards-designs">
    <div className="fb-clone-card">
            <div className="fb-card-main-content">
                <div className="fb-card-header">
                    <div className="user-post-info">
                        <div className="user-thumb">
                            <img src="https://i.ibb.co/St6QD00/DSC-0003.jpg" className="img-responsive" />
                        </div>
                        <div className="user-information">
                            <p>Nazirul Islam</p>
                            <small>1 hr</small>
                        </div>
                    </div>
                    <div className="post-action">
                      
                        <i class="fa fa-ellipsis-h"></i>
                    </div>
                </div>

                <div className="fb-card-body simple-text-card simple-image-card">
                    <p>Isn't It Beautiful?</p>
                    <div className="images-container">
                        <img src="https://raw.githubusercontent.com/karthikricssion/facebook-card-design/master/assets/images/sample_joker_poster.jpg" className="img-responsive" />
                    </div>
                </div>

            </div>

            <div className="fb-card-like-comment-holder">
                <div className="fb-card-like-comment">
                    <div className="likes-emoji-holder">
                        <span>14 Likes</span>
                    </div>
                    <div className="like-comment-holder">
                        <span>10 Comments</span>
                    </div>
                </div>
            </div>

            <div className="fb-card-actions-holder">
                <div className="fb-card-actions">
                    <div className="fb-btn-holder">
                        <a href="#"><i className="fa fa-thumbs-up"></i> Like</a>
                    </div>
                    <div className="fb-btn-holder">
                        <a href="#"><i className="far fa-comment-alt"></i> Comment</a>
                    </div>
                    <div className="fb-btn-holder">
                        <a href="#"><i className="fa fa-share-square"></i> Share</a>
                    </div>
                </div>
            </div>

            <div className="fb-card-comments">
                <div className="comment-input-holder">
                    <div className="user-thumb">
                        <img src="https://i.ibb.co/St6QD00/DSC-0003.jpg" className="img-responsive" />
                    </div>
                    <div className="comment-input">
                        <div className="comment-box" placeholder="Write a comment..." contenteditable="true" placeholder="write a comment"></div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
   
        </Container>
    );
};

export default PostCard;