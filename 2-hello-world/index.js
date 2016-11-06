/**
 * Created by Stone on 2016/10/22.
 */

ReactDOM.render(
    <h1>Hello React</h1>,
    document.querySelector("#root")
);

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    avatarUrl: 'www.baidu.com/img'
};
const element = (
    <h1>
        Hello,{formatName(user)}
    </h1>
);


const element2 = <div tabIndex="0"></div>;
const element3 = <img src={user.avatarUrl}/>;
const element4 = React.createElement('h1', { className: 'greeting' }, 'Hello world! I am Element4');

ReactDOM.render(
    element4,
    document.querySelector("#root4")
);


const element5 = {
    type: 'div',
    props: {
        className: 'mycls',
        children: '<h1>Hello World! I am element5!</h1>'
    }
};


//ReactDOM.render(
//    element5,
//    document.querySelector("#root5")
//);