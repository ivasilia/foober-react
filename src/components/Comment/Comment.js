import './Comment.css';

const Comment = (props) => {
    return (
        <li className="list-item">
            <div> 
                <p>{props.title}</p>
            <span>{props.content}</span>
            </div>
            
        </li>
    );
}

export default Comment;