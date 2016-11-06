/**
 * Created by Stone on 2016/10/22.
 */
/*
 * 1.shouldComponentUpdate
 * */
class CounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.color !== nextProps.color) {
            console.log('color change');
            return true;
        }

        if (this.state.count !== nextState.count) {
            console.log('_state change');
            return true;
        }
        return false;
    }

    handleClick() {
        this.setState(state=>({ count: state.count + 1 }));
    }

    render() {
        return (
            <button color={this.props.color}
                    onClick={ this.handleClick}>
                Count: {this.state.count}
            </button>
        )
    }
}

ReactDOM.render(
    <CounterButton color='red'/>,
    document.querySelector('#root1')
);

class CounterButton2 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }

    render() {
        return (
            <button
                color={this.props.color}
                onClick={() => this.setState(state => ({count: state.count + 1}))}>
                Count: {this.state.count}
            </button>
        )
    }
}

ReactDOM.render(
    <CounterButton2 color='red'/>,
    document.querySelector('#root2')
);




