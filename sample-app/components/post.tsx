import UserDetails from "../components/user-details"
import PostDescription from "../components/post-description"
import Comments from "../components/comments"
import PostItem from "../components/post-item"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { PostProps } from '../types/custom-types';

const Post = (props: PostProps) => (
    <Row>
        <Col>
            <Card>
                <Card.Header><UserDetails username={props.post.author} userProfilePicture={props.post.authorLogo} /></Card.Header>
                <Card.Body>
                    <PostItem picture={props.post.photo} pictureHeading={props.post.pictureHeading} setPostsFunction={props.setPostsFunction}
                        liked={props.post.liked} likes={props.post.likes} postId={props.post.id} />
                    <PostDescription description={props.post.description} tags={props.post.tags} />
                    <Comments comments={props.post.comments} />
                </Card.Body>
            </Card>
        </Col>
    </Row>
);

export default Post;