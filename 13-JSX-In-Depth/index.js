/**
 * Created by Stone on 2016/10/22.
 */
/*
 * 元素声明：
 * 1.变量声明
 * 2.createElement
 * 组件声明：
 * 1.class
 * 2.function
 * 3.createClass
 * 属性：
 * 1.属性值不写，默认为true
 * 2.注意children的用法
 * */
var Style = {
    height: '100px',
    background: 'blue',
    marginTop: "30px",
    color: "red"
};

var MyButton =
    <mybtn style={Style}>
        <h1>Hello MyButton!</h1>
    </mybtn>;

ReactDOM.render(
    <div>
        {MyButton}
    </div>,
    document.querySelector("#root1")
);

var MyButton2 = React.createElement(
    "MyBtn",
    {
        className: 'bg-danger',
        style: {
            display: 'block',
            width: '100%',
            height: '100px'
        }
    },
    "txt"
);

ReactDOM.render(
    <div>{MyButton2}</div>,
    document.querySelector("#root2")
);


var Button = React.createClass({
    render: function() {
        return (
            <button className="btn btn-primary">Button</button>
        )
    }
});

var Header = React.createClass({
    render: function() {
        return (
            <h1>{this.props.content}</h1>
        )
    }
});

var Coms = {
    Button: Button,
    Header: Header
};
ReactDOM.render(
    <Coms.Button />,
    document.querySelector("#root3")
);

ReactDOM.render(
    <Coms.Header content="My Header"/>,
    document.querySelector("#root4")
);


function NumberDescriber(props) {
    let desc;
    if (props.number % 2 == 0) {
        desc = <strong>even</strong>;
    } else {
        desc = <i>odd</i>;
    }
    return <div>{props.number} is {desc} number</div>
}

ReactDOM.render(
    <NumberDescriber number={10}/>,
    getElement('#root5')
);


function PropsTag(props) {
    var child = props.child;
    return <div>{child}</div>;
}

ReactDOM.render(
    <PropsTag child={<h1>Hello Prop {String(null)}!</h1>}/>,
    getElement("#root6")
);

function ListOfTenTings() {
    return (
        <Repeat numTimes={10}>
            {(index)=> {
                console.log(index/2);
                return index % 2 == 0 ? <h2>even</h2> : <h2>odd</h2>
            }}
        </Repeat>
    )
}

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

ReactDOM.render(
    <ListOfTenTings />,
    getElement("#root7")
);


