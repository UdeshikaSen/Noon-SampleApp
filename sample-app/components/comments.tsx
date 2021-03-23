import { CommentsProps } from '../types/custom-types';


const Comments = (props: CommentsProps) => (

  <div className="grey-theme" >
    View {props.comments.length} comments
  </div>
);

export default Comments;