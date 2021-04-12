import './Comment.css';

const Comment = (props) => {
    return (
        <li>
            <p>{props.title}</p>
            <span>{props.content}</span>
        </li>
    );
}

export default Comment;