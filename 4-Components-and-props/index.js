/**
 * Created by Stone on 2016/10/22.
 */
/*
 * 声明组件的三种方式
 * 1. function
 * 2. class
 * 3. createClass
 * */
function Welcome1(props) {
    return <h1>Hello,{props.name}</h1>;
}

//类的形式声明组件
class Welcome2 extends React.Component {
    render() {
        return <h1>Hello,{this.props.name}</h1>
    }
}

const element1 = <Welcome1 name="welcome1"/>;

ReactDOM.render(element1, document.querySelector("#root1"));
const element2 = <Welcome2 name="welcome2"/>;
ReactDOM.render(element2, document.querySelector("#root2"));


const element3 = (
    <div>
        <Welcome1 name='wel1'/>
        <Welcome2 name='wel2'/>
        {
            (function() {
                return (
                    <div>
                        <h2>from nonname function</h2>
                        <Welcome1 name='func wel1'/>
                        <Welcome2 name='func wel2'/>
                    </div>
                )
            })()
        }
    </div>
);


ReactDOM.render(element3, document.querySelector("#root3"));


function MyAPP() {
    return (
        <div>
            <h2>from new Component</h2>
            <Welcome1 name='func wel1'/>
            <Welcome2 name='func wel2'/>
        </div>
    )
}
ReactDOM.render(<MyAPP />, document.querySelector("#root4"));


function Comment1(props) {

    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name}/>

                <h1 className="UserInfo-name">
                    {props.author.name}
                </h1>
            </div>
            <h2 className="Comment-text">
                {props.text}
            </h2>

            <h2 className="Comment-date">
                {props.date.toLocaleString()}
            </h2>
        </div>
    );
}

//属性支持对象，字符串和数字
ReactDOM.render(
    <Comment1 author={{avatarUrl:'https://www.baidu.com/img/bd_logo1.png',name:'BaiDu'}}
              text="这里是引用百度的一张图片来做演示" date={new Date()}/>,
    document.querySelector("#root5")
);


//function Avatar(props) {
//    return (
//        <img className="Avatar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}/>
//    )
//}

class Avatar extends React.Component {
    render() {
        return (
            <img className="Avatar"
                 src={this.props.user.avatarUrl}
                 alt={this.props.user.name}/>
        )
    }
}

//function UserInfo(props) {
//    return (
//        <div className="UserInfo">
//            <Avatar user={props.user}/>
//
//            <h1 className="UserInfo-name">
//                {props.user.name}
//            </h1>
//        </div>
//    )
//}

class UserInfo extends React.Component {
    render() {
        return (
            <div className="UserInfo">
                <Avatar user={this.props.user}/>

                <h1 className="UserInfo-name">
                    {this.props.user.name}
                </h1>
            </div>
        )
    }
}


//function Comment2(props) {
//
//    return (
//        <div className="Comment">
//            <UserInfo user={props.author}/>
//
//            <h2 className="Comment-text">
//                {props.text}
//            </h2>
//
//            <h2 className="Comment-date">
//                {props.date}
//            </h2>
//        </div>
//    );
//}

class Comment2 extends React.Component {
    render() {
        return (
            <div className="Comment">
                <UserInfo user={this.props.author}/>

                <h2 className="Comment-text">
                    {this.props.text}
                </h2>

                <h2 className="Comment-date">
                    {this.props.date}
                </h2>
            </div>
        );
    }
}

//组件的组合
function RenderHtml5() {
    ReactDOM.render(
        <Comment2 author={{avatarUrl:'https://www.baidu.com/img/bd_logo1.png',name:'BaiDu Component2'}}
                  text="这里是引用百度的一张图片来做演示" date={new Date().toLocaleString()}/>,
        document.querySelector("#root5")
    );
}

RenderHtml5();
setInterval(RenderHtml5, 1000);







