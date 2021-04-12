import './Comment.css';

const Comment = (props) => {
    return (
        <li className="list-item">
            <p>{props.title}</p>
            <span>{props.content}</span>
        </li>
    );
}

export default Comment;