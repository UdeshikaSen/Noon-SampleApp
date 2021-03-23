import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Post from './post';
import { LayoutProps, LayoutState, PostType } from '../types/custom-types';

/**
 * The main layout of the application.
 */
class Layout extends Component<LayoutProps, LayoutState> {

    constructor(props: LayoutProps) {
        super(props);
        this.state = {
            activePage: 'home',
            posts: props.posts,
        };
    }

    /**
     * Changing state based on the clicked page name.
     * @param eventKey The eventKey value when navbar is clicked.
     */
    private handlePageClick = (eventKey: any) => {
        console.log(eventKey);
        const eventKeyString: string = String(eventKey);
        let clickedPage: "home" | "favorites" = "home";

        if (eventKeyString === "home" || eventKeyString === "favorites") {
            clickedPage = eventKeyString;
        }

        this.setState({ activePage: clickedPage })
        // Populate posts in the clicked page.
        this.setPosts(clickedPage);

        window.scrollTo(0, 0)
    }

    /**
     * Get posts from the sever to change 'posts' state of the clicked page.
     * @param clickedPage The current page.
     */
    private setPosts = (clickedPage: "home" | "favorites" = this.state.activePage) => {
        var fetchPosturl = 'http://localhost:3000/posts';

        if (clickedPage === "favorites") {
            fetchPosturl = fetchPosturl + '?liked=true'
        }

        // Api call
        fetch(fetchPosturl)
            .then(response => response.json())
            .then(result => {
                console.log("UPDATING POSTS OF" + clickedPage)
                this.setState({ posts: result })
            })
            .catch(error => {
                console.log('Error' + error);
            });
    }

    render() {
        return <Container >
            <Row className="d-none d-md-block d-lg-block d-xl-block">
                <Col>
                    <Navbar className="justify-content-center color-nav" variant="dark" expand="lg" fixed="top">
                        <Nav activeKey={this.state.activePage} onSelect={this.handlePageClick} >
                            <Nav.Item className="web-nav-home">
                                <Nav.Link eventKey="home"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="web-nav-fav">
                                <Nav.Link eventKey="favorites"><FontAwesomeIcon icon={faHeart} /> Favorites</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
            <Row className="nav-gap d-none d-md-block d-lg-block d-xl-block" />
            {this.state.posts.map((post) => {
                console.log(post);
                return <Post key={String(post.id) + String(post.liked ? "linked" : "unliked")} post={post} setPostsFunction={this.setPosts}></Post>
            })}
            <Row className="nav-gap d-sm-block d-md-none" />
            <Row className="d-sm-block d-md-none">
                <Col>
                    <Navbar className="justify-content-center color-nav" variant="dark" fixed="bottom">
                        <Nav activeKey={this.state.activePage} onSelect={this.handlePageClick} >
                            <Nav.Item className="mobile-nav-home">
                                <Nav.Link eventKey="home"><FontAwesomeIcon icon={faHome} /></Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mobile-nav-fav">
                                <Nav.Link eventKey="favorites"><FontAwesomeIcon icon={faHeart} /></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>;
    }
}

export default Layout;