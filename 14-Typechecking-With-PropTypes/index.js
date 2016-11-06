/**
 * Created by Stone on 2016/10/22.
 */
class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello,{this.props.name}</h1>
        )
    }
}

Greeting.propTypes = {
    name: React.PropTypes.string
};

ReactDOM.render(
    <Greeting name="greeting"/>,
    document.getElementById("root1")
);

class MyComponent extends React.Component {
    render() {
        const children = this.props.children;
        return (
            <div>
                {children}
            </div>
        )
    }
}

class Message extends React.Component {
    render() {
        return (
            <div>Hello Message!</div>
        )
    }
}

MyComponent.propTypes = {
    children: React.PropTypes.element.isRequired,
    optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,
    optionalSymbol: React.PropTypes.symbol,

    optionalNode: React.PropTypes.node,
    // A React element
    optionalElement: React.PropTypes.element,
    // class Message
    optionalMessage: React.PropTypes.instanceOf(Message),
    // enum
    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

    optionalUnion: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
        React.PropTypes.instanceOf(Message)
    ]),
    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
    optionalObjectWithShape: React.PropTypes.shape({
        color: React.PropTypes.string,
        fontSize: React.PropTypes.number
    }),
    requireFunc: React.PropTypes.func.isRequired,
    requiredAny: React.PropTypes.any.isRequired,
    customProp: function(props, propName, componentName) {
        if (!/matchme/.test(props[propName])) {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            )
        }
    },
    customArrayProp: React.PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
        if (!/matchme/.test(propValue[key])) {
            return new Error(
                'Invalid prop `' + propFullName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            )
        }
    })
};

MyComponent.defaultProps = {
    children: <h2>default props children</h2>
};

function propFun() {
    return 'i am function';
};

ReactDOM.render(
    <MyComponent
        optionalNode={'abc'}
        optionalUnion={10}
        optionalArrayOf={[1,2,4]}
        optionalObjectOf={new Number(10)}
        requireFunc={propFun}
        requiredAny={'any type props'}
        customProp='matchme'
        />,
    document.querySelector("#root2")
);
