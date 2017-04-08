# react-native-category
- Support Android and iOS.

## Installation

```bash
npm i --save react-native-category
```
And then set up [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for your project.

Please file an issue if you have any trouble!

## Usage

```jsx
import Category from 'react-native-category';

....

constructor(props) {
  super(props);

  //setup data category
  this.data = [
    {id: 1, title: 'Apple'},
    {id: 2, title: 'Samsung'},
    {id: 3, title: 'Sony'},
    {id: 4, title: 'Nokia'},
    {id: 5, title: 'HTC'},
    {id: 6, title: 'LG'}
  ];
}

//func call when click item category
_itemChoose(item) {
  alert(item.title);
}

.....
//in render

<Category
  data={this.data}    
  itemSelected={(item) => this._itemChoose(item)}
  itemText={'title'}  //set attribule of object show in item category
/>
```

## License

ISC
