import { UserDetailsProps } from '../types/custom-types';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const UserDetails = (props: UserDetailsProps) => (
  <div className="blue-theme">
    <Row>
      <Col xs={1} >
        <Image src={props.userProfilePicture} roundedCircle className="user-profile-img" />
      </Col>
      <Col md="auto" className="picture-heading">
        {props.username}
      </Col>
    </Row>
  </div>
);

export default UserDetails;