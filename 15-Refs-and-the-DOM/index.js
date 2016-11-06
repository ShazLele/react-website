/**
 * Created by Stone on 2016/10/22.
 */
class CustomTextInput extends React.Component {

    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }

    focus() {
        this.textInput.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={(input)=>this.textInput=input}/>
                <input type="button" value="Focus the text input" onClick={this.focus}/>
            </div>
        )
    }
}

class AutoFocusTextInput extends React.Component {
    componentDidMount() {
        this.textInput.focus();
        console.log('a');
    }

    render() {
        return (
            <CustomTextInput ref={(input)=>this.textInput=input}/>
        )
    }
}

ReactDOM.render(
    <AutoFocusTextInput />,
    document.querySelector("#root1")
);

