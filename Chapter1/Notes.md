This chapter is about React. Everytime I mess with react I wonder what all the hype is about. The other tools in the space seem so strong.


It is possible in react to build these inline react components. Idk why you would, but its an option

```js const 
App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}```

