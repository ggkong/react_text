import React, {Component} from 'react';

// 通过constructor来创建类组件，并且接受props父对象
class Form extends Component {
    constructor(props) {
        super(props);
        

        this.initialState = {
            name: '',
            job: ''
        };
        // 将类的initialState属性传输给类的state属性
        this.state = this.initialState;
    }

    handleChange = event => {
    	// 这里的name是指属性name和job  value指的是属性的值
        const { name, value } = event.target;

        // 将变化传输给State
        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state; 

        return (

            <form onSubmit={this.onFormSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} />
                <label>Job</label>
                <input 
                    type="text" 
                    name="job" 
                    value={job} 
                    onChange={this.handleChange} />

            	
                <button type="submit">
                    Submitkongge
                </button>
            </form>
        );
    }
}

export default Form;
