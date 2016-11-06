/**
 * Created by Stone on 2016/10/22.
 */

var ListData = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

//搜索框
class MySearch extends React.Component {

    render() {
        return (
            <div>
                <input type="text" className="form-control"/>
                <label>
                    <input type="checkbox"/>
                    <span>Only show products in stock</span>
                </label>
            </div>
        )
    }
}

//列表头部
class GroupProductHeader extends React.Component {
    render() {
        return (
            <h2>{this.props.groupName}</h2>
        )
    }
}

class ProductItem extends React.Component {
    render() {

        const name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color:'red'}}>{this.props.product.name}</span>;

        return (
            <div>
                {name}-{this.props.product.price}
            </div>
        )
    }
}

class ProductComponent extends React.Component {

    render() {
        let category = null;
        let rows = [];
        this.props.products.forEach(function(product, key) {
            if (product.category != category) {
                category = product.category;
                rows.push(<GroupProductHeader groupName={category} key={category}/>);
            }
            rows.push(<ProductItem product={product} key={key}/>);
        });

        return (
            <div>
                <h2>Name Price</h2>
                {rows}
            </div>
        )
    }
}
ReactDOM.render(
    <div>
        <MySearch />
        <ProductComponent products={ListData}/>
    </div>,
    document.getElementById('myShow')
);