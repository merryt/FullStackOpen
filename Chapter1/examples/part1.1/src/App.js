
const Header = (props) => {
  return (
    <h1>{props.content}</h1>
  )
}
const Part = (props) => {
  return (<p>{props.content.title} {props.content.result} </p>)
}

const Content = (props) => {
  return (
    <div>
      {props.contentArr.map(item => (
        <Part content={item} />
      ))}
    </div>
  )
}

const Total = (props) => {
  return (<p>{props.title}</p>)
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const contentArr = [
    {
      "title": part1,
      "result": exercises1
    },
    {
      "title": part2,
      "result": exercises2
    }, {
      "title": part3,
      "result": exercises3
    }
  ]


  return (
    <div>
      <Header content={course} />
      <Content contentArr={contentArr} />
      <Total title={'Number of exercisess ' + (exercises1 + exercises2 + exercises3)} />
    </div>
  )
}

export default App