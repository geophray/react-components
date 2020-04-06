// TODO
var items = ['Milk', 'Bread'];
var GroceryListItem = (props) => (
  <li>{props[0]}</li>
);

var GroceryList = (props) => (
  <ul>
    <GroceryListItem />
  </ul>
);

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));