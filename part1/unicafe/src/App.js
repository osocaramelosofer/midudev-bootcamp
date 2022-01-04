import React from 'react'

const Header = ({course}) => <h1>{course.name}</h1>

const Content = ({parts}) => {
  const array = parts.map((element, index) =>  <Part key={index} name={element.name} exercises={element.exercises}/> )
  return array
}

const Part = ({exercises, name}) => <p>{name} - {exercises}</p>

const Total = ({parts}) => {
  let total = 0
  parts.forEach(element => {
    total += element.exercises
  });

  return <p>{total}</p>

}

const App = () => {

  const course = {
    name : 'Half Stack application development',
    parts : [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App