const Header = (props) => <h1>{props.course}</h1>

const Content = ({ parts }) => (
  <div>
        {parts.map(part => 
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
  </div>
)

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Total = ({ parts }) => {
  console.log(parts)
  return (
    <b>
      Total of {
      parts.map(part => 
        part.exercises
      ).reduce((s, p) => s + p, 0)
        } exercises
    </b>
  )
}

const Course = ({ course })  => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};
export default Course