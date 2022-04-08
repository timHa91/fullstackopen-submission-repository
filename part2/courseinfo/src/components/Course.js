import React from 'react'

const Course = ({ course }) => {
    const { name, parts } = course
    return (
        <div>
            <Header name={name} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

const Header = ({ name }) => <h2>{name}</h2>

const Content = ({ parts }) =>
    parts.map(part =>
        <Part key={part.id} part={part} />
    )

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Total = ({ parts }) => {
    // let total = 0
    // parts.forEach(part => total += part.exercises)
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p>Number of exercises {total}</p>
    )
}

export default Course