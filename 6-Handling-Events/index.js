/**
 * Created by Stone on 2016/10/22.
 */

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        console.log('submit');
        event.preventDefault();
    }

    render() {
        return (
            <form ref="form-login" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="登陆"/>
                </div>
            </form>
        )
    }
}

ReactDOM.render(
    <LoginForm />,
    document.querySelector("#root1")
);

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState=>(
        {
            isToggleOn: !prevState.isToggleOn
        }
        ))
    }

    render() {
        return (
            <button onClick={this.handleClick} className="btn btn-lg btn-danger">{this.state.isToggleOn ? "ON" : "OFF"}</button>
        )
    }
}

ReactDOM.render(
    <Toggle />,
    document.querySelector("#root2")
);

class Toggle2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      
        this.setState(prevState=>(
        {
            isToggleOn: !prevState.isToggleOn
        }
        ))
    }

    render() {
        return (
            <button onClick={(e)=>this.handleClick(e)} className="btn btn-lg btn-danger">{this.state.isToggleOn ? "ON" : "OFF"}</button>
        )
    }
}

ReactDOM.render(
    <Toggle2 />,
    document.querySelector("#root3")
);