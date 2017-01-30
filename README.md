# React/Redux Drag and Drop Dialog Index | [Live](https://winniengo.github.io/chatgrid_challenge/)

## Sample Redux Store State:

```js
{
  dialogs: {
    index: [
      'what are you interested in?',
      'thanks for visiting us!',
      'how can we help you?'
    ],
    modal: {
      formInput: 'thanks for visiting us!',
      formType: 'edit',
      handleSubmit: /*...*/,
      isOpen: true
    }
  },
}
```

## React Components

```
App
  DialogIndexContainer
    Index
      IndexItem
        Item
  DialogModalContainer
    ModalForm
      Form
```

## Notable Packages Used
  + [react-dnd](http://react-dnd.github.io/react-dnd/docs-overview.html)
  + [react-dnd-html5-backend](http://react-dnd.github.io/react-dnd/docs-html5-backend.html)
  + [react-modal](https://github.com/reactjs/react-modal)
