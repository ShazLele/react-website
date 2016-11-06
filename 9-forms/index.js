/**
 * Created by Stone on 2016/10/22.
 */
/*
 * 1.onChange text select ...
 * 2.onClick
 * 3.defaultValue  text select
 * 4.defaultChecked
 * 5.onInput
 * 6.value  text/ select
 * */
class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hello',
            selectValue: 'B',
            checked: ['A'],
            radioValue:'A'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
    }

    handleChange(event) {
        //也可以用ref
        this.setState({ value: event.target.value.substr(0, 11) });
    }

    handleSelect(event) {
        this.setState({ selectValue: event.target.value });
    }

    handleSubmit() {
        alert(`Text field value is:${this.state.value}`);
        alert(`Text field value is:${this.state.checked}`);
    }

    handleCheck(event) {
        let val = event.target.value;
        let checked = this.state.checked.slice(); // copy
        console.log(checked);
        if (checked.includes(val)) {
            checked.splice(checked.indexOf(val), 1);//remove
        } else {
            checked.push(val);
        }
        console.log(checked);
        this.setState({ checked: checked })
    }
    handleRadio(event){
        this.setState({radioValue:event.target.value});
    }

    render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                <input type="text"
                       placeholder="Hello!"
                       value={this.state.value}
                       defaultValue="Hello World!"
                       onChange={this.handleChange}/>
                <br/>
                <textarea defaultValue="This is a description"></textarea>
                <br/>
                <select value={this.state.selectValue} onChange={this.handleSelect}>
                    <option value="A">Apple</option>
                    <option value="B">Banana</option>
                    <option value="C">Cranberry</option>
                </select>
                <br/>

                <h2>{this.state.selectValue}</h2>
                <br/>
                <input type="checkbox" name="choice" value="A" defaultChecked={true} onChange={this.handleCheck}/> Option A
                <input type="checkbox" name="choice" value="B" onChange={this.handleCheck}/> Option B
                <br/>
                <label><input type="radio" name="radio" value="A" defaultChecked={true} onChange={this.handleRadio}/> Option A</label>
                <input type="radio" id="myradio" name="radio" value="B" onChange={this.handleRadio}/> <label htmlFor="myradio">Option B</label>
                <br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Form1 />,
    document.querySelector("#root1")
);