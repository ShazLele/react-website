/**
 * Created by Stone on 2016/10/22.
 */

const element = <h1>Hello World!</h1>;
ReactDOM.render(
    element,
    document.querySelector("#root")
);

function tick() {
    let myele = (
        <div>
            <h1>当前时间为：</h1>

            <h2>it is:{new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(
        myele,
        document.querySelector('#now')
    )
}
tick();
setInterval(tick, 1000);


