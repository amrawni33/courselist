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

  CourseNameUpdate = (e) => {
    this.setState({
      current: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { current, courses } = this.state;
    if (current.trim() === '') return;

    const updatedCourses = [...courses, { name: current }];
    this.setState({ courses: updatedCourses, current: '' });
  }

  deleteCourse = (index) => {
    const courses = [...this.state.courses];
    courses.splice(index, 1);
    this.setState({ courses });
  }

  updateCourse = (index, value) => {
    const courses = [...this.state.courses];
    courses[index] = { name: value };
    this.setState({ courses });
  }

  render() {
    const { courses, current } = this.state;

    const courseList = courses.map((course, index) => (
      <CourseList
        key={index}
        index={index}
        courseName={course.name}
        deleteCourse={this.deleteCourse}
        updateCourse={this.updateCourse}
      />
    ));

    return (
      <div className="App">
        <h2>Add Course</h2>
        <CourseForm
          current={current}
          CourseNameUpdate={this.CourseNameUpdate}
          handleSubmit={this.handleSubmit}
        />
        <ul>{courseList}</ul>
      </div>
    );
  }
}

export default App;
