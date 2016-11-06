/**
 * Created by Stone on 2016/10/22.
 */
function tick1() {
    const element = (
        <div>
            <h1>Hello, world! Root1</h1>

            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.querySelector('#root1')
    );
}
tick1();
setInterval(tick1, 1000);


function Clock2(props) {
    return (
        <div>
            <h1>Hello, world! Root2</h1>

            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
}

function tick2() {
    ReactDOM.render(
        <Clock2 date={new Date()}/>,
        document.querySelector("#root2")
    )
}
tick2();
setInterval(tick2, 1000);

class Clock3 extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world! Root3 from Class</h1>

                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

function tick3() {
    ReactDOM.render(
        <Clock3 date={new Date()}/>,
        document.querySelector("#root3")
    )
}
tick3();
setInterval(tick3, 1000);

class Clock4 extends React.Component {
    constructor(props) {
        super(props);
        //default values
        this.state = {
            date: new Date()
        }
    }

    //loaded
    componentDidMount() {

        this.timerID = setInterval(()=>this.tick(), 1000)
    }

    //removed
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //set date to new value
    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world! Root4 from Class and date from state</h1>

                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
ReactDOM.render(
    <Clock4 />,
    document.querySelector("#root4")
);

//State Updates May Be Asynchronous


class UpdateState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
    }

    componentDidMount() {

    }

    changeCounter() {
        this.setState((prevState, props)=>({
            counter: ++prevState.counter
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.changeCounter.bind(this)}>点击+1</button>
            </div>
        )
    }
}

ReactDOM.render(
    <UpdateState />,
    document.querySelector("#root5")
);


class MergedUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: []
        };
    }

    componentDidMount() {
        $.post('/api/posts', data => {
            console.log(data);
            this.setState({
                posts: data.posts
            })
        });
        $.post('/api/comments', data => {
            this.setState({
                comments: data.comments
            })
        });
    }

    render() {
        return (
            <div>
                {this.state.posts.map((item, key)=>(
                    <h2 key={key}>
                        {item.name}
                    </h2>
                ))}
                {this.state.comments.map((item, key)=>(
                    <h2 key={key}>
                        {item.name}
                    </h2>
                ))}
            </div>
        )
    }
}

ReactDOM.render(
    <MergedUpdate />,
    document.querySelector("#root6")
);




