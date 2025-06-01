import { Component } from "react";
import CourseForm from "./Components/CourseForm/CourseForm";
import CourseList from "./Components/CourseList/CourseList";


class App extends Component {
  state = {
    courses: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'PHP' },
    ],
    current: ''
  }

  courseName
  CourseNameUpdate = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current })
    this.setState({ courses, current: '' })
  }

  render() {
    const { courses } = this.state
    const courseList = courses.map((course, index) => {
      return (
        <CourseList courseName={course.name} key={index} />
      )
    });
    return (
      <div className="App">
        <div>Add Course </div>
        <CourseForm current={this.state.current} CourseNameUpdate={this.CourseNameUpdate} handleSubmit={this.handleSubmit} />
        <ul>{courseList}</ul>
      </div>
    );
  }
}

export default App;
