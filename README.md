# react-native-category  [![npm version](https://badge.fury.io/js/react-native-category.svg)](https://badge.fury.io/js/react-native-category)

[![NPM](https://nodei.co/npm/react-native-category.png?downloads=true)](https://nodei.co/npm/react-native-category/)

- A React Native component for generating and displaying interactive category list. 
- Compatible with both Android and iOS.

- [Detailed Example](https://github.com/TuNguyenThanh/react-native-category/tree/master/Example)
<p align="center">
  <img src="https://raw.githubusercontent.com/TuNguyenThanh/react-native-category/master/screenshot.gif" alt="Category Example" width="336" height="600"/>
</p>

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

### Props
#### Category type Text Item
| Prop | Type | Description | Required | Default |
|---|---|---|---|---|
|**`data`**|`array`|Data category |`Yes`|`[]`|
|**`itemText`**|`string`|Attribule show in item category |`Yes`|`''`|
|**`itemSelected`**|`function`|A function to handle item category presses. |`Yes`|`None`|
|**`textType`**|`string`|Set type for text (upper, lower, capitalize) |`No`|`None`|
|**`indexSelected`**|`number`|Set item category selected default |`No`|`0`|

#### Category type Image Item
| Prop | Type | Description | Required | Default |
|---|---|---|---|---|
|**`imageData`**|`array`|Image data category |`No`|`[]`|
|**`iconSet`**|`string`|The name of the icon set item category image belongs to. Refer to [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons). |`No`|`FontAwesome`|
|**`iconSize`**|`number`|Set size icon item category |`No`|`30`|

#### Category props style
| Prop | Type | Description | Required | Default |
|---|---|---|---|---|
|**`style`**|`style`|Custom style for category |`No`|`None`|
|**`itemStyles`**|`style`|Custom style for item category |`No`|`None`|
|**`colorTextDefault`**|`string`|Set Color text default |`No`|`#f5f3f4`|
|**`colorTextSelected`**|`string`|Set Color text selected |`No`|`#000000`|
|**`colorItemDefault`**|`string`|Set Color item default |`No`|`rgba(255,255,255,0.2)`|
|**`colorItemSelected`**|`string`|Set Color item selected |`No`|`#FF4E50`|
|**`colorIconDefault`**|`string`|Set Color icon default |`No`|`#900`|
|**`colorIconSelected`**|`string`|Set Color icon selected |`No`|`#FFF`|
|**`bounces`**|`bool`|Bounces iOS |`No`|`false`|

## License

ISC
