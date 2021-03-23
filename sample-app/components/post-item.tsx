import React, { Component } from 'react';
import { PostItemProps, PostItemState } from '../types/custom-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

/**
 * Components for the post body with like button.
 */
class PostItem extends Component<PostItemProps, PostItemState> {

    private id: number;
    private layoutSetPostsCallback: CallableFunction;

    constructor(props: PostItemProps) {
        super(props);
        this.state = {
            liked: props.liked,
            likes: props.likes,
            picture: props.picture,
            pictureHeading: props.pictureHeading
        };

        this.id = props.postId;
        this.layoutSetPostsCallback = props.setPostsFunction;
    }
   
    /**
     * Handle liking and unliking of a post item
     */
    private handleFavoriteClick = () => {
        // API call
        var updatePosturl = 'http://localhost:3000/posts/' + this.id + '/';

        fetch(updatePosturl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'liked': !this.state.liked, 'likes': (this.state.likes + (!this.state.liked ? 1 : -1)) })
        })
            .then(response => this.layoutSetPostsCallback())    // Rather than changing relevant states of this component, active page is reloaded with fresh posts. 
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return <div>
            <div className="image-container">
                <img className="card-img-top img-rounded" src={this.state.picture}></img>

                <div className="image-footer">
                    <Container>
                        <Row>
                            <Col className="picture-heading">
                                {this.state.pictureHeading}
                            </Col>
                            <Col>
                                <div className= {this.state.liked? "favIconClicked":"favIcon"} onClick={this.handleFavoriteClick} >
                                    <FontAwesomeIcon icon={faHeart} size="lg" />
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
            <p className="blue-theme"><FontAwesomeIcon icon={faHeart}  color="blue"/> {this.state.likes} likes</p>

        </div >;
    }
}

export default PostItem;

