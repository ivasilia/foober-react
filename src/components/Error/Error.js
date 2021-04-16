import { Component } from 'react';
import '../../App.css';

class Error extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            failure: false,
            exception: ''
        }
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    static getDerivedStateFromError(error) {
        return { failure: true, exception: error };
    }

    render() {

        if(this.state.failure) {
            return (
            <div>
                <div className="oval">
                    <p>Error thrown!!!</p>
                    <span>{this.state.exception}</span>
                </div>
            </div>
        );

        } else {
            return this.props.children;
        }
        
    }
}

export default Error;