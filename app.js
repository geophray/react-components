
var GroceryListItem = (props) => (
    <li>{props.item}</li>
);

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