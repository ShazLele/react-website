/**
 * Created by Stone on 2016/10/22.
 */

var UserGreeting = React.createClass({

    componentDidMount: function() {

    },
    render: function() {
        return <h1>Welcome back!</h1>
    }
});


function GuestGreeting(props) {
    return <h1>Please Sign up</h1>
}

var Greeting = React.createClass({
        getInitialState: function() {
            return {
                isLoggedIn: true
            }
        },
        componentDidMount: function() {
            console.log('Greeting is ready');
        },
        handle: {
            click: function() {
                console.log(this);
                this.setState(prevState=>({ isLoggedIn: !prevState.isLoggedIn }))
            }
        },
        render: function() {
            console.log('render');
            let greeting = <UserGreeting />;
            if (!this.state.isLoggedIn) {
                greeting = <GuestGreeting />
            }
            return (
                <div>
                    {greeting}
                    <button onClick={this.handle.click.bind(this)}>LoggedIn</button>
                </div>
            )
        }
    })
    ;

ReactDOM.render(
    <Greeting />,
    document.querySelector("#root1")
);

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>登录</button>
    )
}

function LoginOutBuuton(props) {
    return (
        <button onClick={props.onClick}>注销</button>
    )
}

function TestMsg(props){
    if(!props.show)
    {
        return null;
    }
    else{
        return <h1> has prop show message</h1>
    }
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            showMsg: false
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLoginOutClick = this.handleLoginOutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true, showMsg: true })
    }

    handleLoginOutClick() {
        this.setState({ isLoggedIn: false, showMsg: false })
    }

    render() {
        let button = <LoginButton onClick={this.handleLoginClick}/>;
        if (this.state.isLoggedIn) {
            button = <LoginOutBuuton onClick={this.handleLoginOutClick}/>;
        }
        return (
            <div>
                <h1>{this.state.isLoggedIn ? (<span>欢迎</span>) : (<span>请登录</span>)}</h1>
                {this.state.showMsg && <h2>show message</h2>}
                {button}
                <TestMsg show={false}/>
                <TestMsg show={true}/>
            </div>
        )
    }

}

ReactDOM.render(
    <LoginControl />,
    document.querySelector("#root2")
);

