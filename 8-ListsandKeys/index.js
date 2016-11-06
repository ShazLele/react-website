/**
 * Created by Stone on 2016/10/22.
 */
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(item=>item * 2);
console.log(doubled);
const lis = numbers.map((item, key)=>(<li key={key}>{item}</li>));
ReactDOM.render(
    <ul> {lis}</ul>,
    document.querySelector("#root1")
);

function NumberNav(props) {
    const numbers = props.numbers;
    const listItems = numbers.map(number=>
            (
                <li key={number}>
                    {number}
                </li>)
    );
    return (
        <ul>{listItems}</ul>
    )
}

const mynumbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberNav numbers={mynumbers}/>,
    document.querySelector("#root2")
);


function ListItem(props) {
    return (
        <li><h2>{ props.value}</h2></li>
    )
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((item, index)=><ListItem key={index} value={item}/>);
    return (
        <ul>
            {listItems}
        </ul>
    )
}

ReactDOM.render(
    <NumberList numbers={mynumbers}/>,
    document.querySelector("#root3")
);


function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map(post=>
                    <li key={post.id}>
                       <h3> {post.title}</h3>
                    </li>
            )}
        </ul>
    );
    const content = props.posts.map(post=>
        <div key={post.id}>
            <h2>{post.title}</h2>

            <p>{post.content}</p>
        </div>);
    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    )
}

const posts = [
    { id: 1, title: 'post1', content: 'welcome to learning React!' },
    { id: 2, title: 'post2', content: 'You Can install React from npm.' }
];

ReactDOM.render(
    <Blog posts={posts}/>,
    document.querySelector("#root4")
);







