
class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hovered: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onHover() {
    this.setState({
      hovered: !this.state.hovered
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hovered ? 600 : 100
    };
    return (<li style={style} onMouseOver={this.onHover.bind(this)} onMouseOut={this.onHover.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>);
  }

}

var GroceryList = (props) => (
  <ul>
    {props.array.map(item =>
       <GroceryListItem item={item} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList array={['milk', 'eggs', 'bananas', 'bread', 'cheese']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));