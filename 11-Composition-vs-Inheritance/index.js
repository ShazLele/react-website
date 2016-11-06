/**
 * Created by Stone on 2016/10/22.
 */


function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className='Dialog-title'>
                Welcome
            </h1>

            <p className='Dialog-message'>
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}

ReactDOM.render(
    <WelcomeDialog />,
    document.querySelector('#root1')
);


function SplitPane(props) {
    return (
        <div>
            {props.left}
        </div>
    )
}

ReactDOM.render(
    <SplitPane left={<WelcomeDialog />}/>,
    document.querySelector('#root2')
);
