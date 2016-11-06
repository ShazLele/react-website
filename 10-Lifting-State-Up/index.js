/**
 * Created by Stone on 2016/10/22.
 */

/*
* setState可以支持变量填充 比如 this.setState({value})  =>this.setState({value:value});
* */
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    } else {
        return <p>The water would not boil.</p>;
    }
}

class Caculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const value = this.state.value;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={value} onChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(value)}/>
            </fieldset>
        )
    }
}

ReactDOM.render(
    <Caculator />,
    document.querySelector("#root1")
);

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: '' }
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        const value = this.state.value;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input value={value} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}


class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale='c'/>
                <TemperatureInput scale='f'/>
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator />, document.querySelector("#root2")
);


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convert) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


class TemperatureInput2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input value={value} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}

class Calculator2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { value: '', scale: 'c' };
    }

    handleCelsiusChange(value) {
        console.log(value);
        this.setState({ scale: 'c', value });
        console.log(this.state.value);
    }

    handleFahrenheitChange(value) {
        this.setState({ scale: 'f', value });
    }

    render() {
        const scale = this.state.scale;
        const value = this.state.value;
        const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
        const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;
        return (
            <div>
                <TemperatureInput2 scale="c"
                                   value={celsius}
                                   onChange={this.handleCelsiusChange}/>
                <TemperatureInput2 scale="f"
                                   value={fahrenheit}
                                   onChange={this.handleFahrenheitChange}/>
                <BoilingVerdict
                    celsius={parseFloat(celsius)}/>
            </div>
        )
    }

}

ReactDOM.render(
    <Calculator2 />,
    document.querySelector("#root3")
);
