import { PostDescriptionProps } from '../types/custom-types';


const PostDescription = (props: PostDescriptionProps) => (
  <div className="card border-light mb-3" >
    <p> {props.description} </p>
    <p className="blue-theme"> {props.tags} </p>
  </div>
);

export default PostDescription;