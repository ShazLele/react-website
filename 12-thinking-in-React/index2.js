/**
 * Created by Stone on 2016/10/29.
 */
const srcList = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

//带搜索的商品列表
class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            stocked: false
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleStocked = this.handleStocked.bind(this);
    }

    handleSearch(event) {
        this.setState({ keyword: event.target.value });
    }

    handleStocked(event) {
        console.log(event.target.checked);
        this.setState({ stocked: event.target.checked });
    }

    render() {
        const products = this.props.products;
        const condition = {
            keyword: this.state.keyword,
            stocked: this.state.stocked
        };
        return (
            <div>
                <SearchCom onSearch={this.handleSearch} onStocked={this.handleStocked}/>
                <ProductTable products={products} condition={condition}/>
            </div>
        )
    }
}

//搜索框
class SearchCom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const handleChange = this.props.onSearch;
        const handleStocked = this.props.onStocked;
        return (
            <div>
                <input type="text" className="form-control" onChange={handleChange}/>

                <div className="checkbox">
                    <label>
                        <input type="checkbox" onChange={handleStocked}/>
                        <span>Only Show Products in stock</span>
                    </label>
                </div>
            </div>
        )
    }
}

//商品列表
class ProductTable extends React.Component {
    render() {
        let products = this.props.products;
        let keyword = this.props.condition.keyword;
        let category = null;
        let stocked = this.props.condition.stocked;
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {

                    products.map((item, key)=> {
                        let showItem = true;
                        if (stocked) {
                            showItem = (item.stocked == true);
                        }
                        if (item.name.toLowerCase().includes(keyword.toLowerCase()) && showItem) {
                            let row = [];
                            if (item.category != category) {
                                category = item.category;
                                row.push(<ProductTitle category={category}/>);
                            }
                            row.push(<ProductItem product={item} key={key}/>);
                            return row;
                        }

                    })

                }
                </tbody>
            </table>
        )
    }
}

//分类标题
class ProductTitle extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <td colSpan='2'>
                    <h4>{category}</h4>
                </td>
            </tr>
        )
    }
}
//商品项
class ProductItem extends React.Component {

    render() {
        const product = this.props.product;
        let prod_name = product.stocked ? product.name : <span className="text-danger">{product.name}</span>;
        return (
            <tr>
                <td>{prod_name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}


ReactDOM.render(
    <ProductShow products={srcList}/>,
    document.getElementById("prodContainer")
);