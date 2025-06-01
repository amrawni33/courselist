import React, { Component, Fragment } from "react";

class CourseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        };
        this.input = React.createRef();
    }

    handleUpdateValue = (e) => {
        e.preventDefault();
        this.props.updateCourse(this.props.index, this.input.current.value);
        this.toggleState();
    }

    toggleState = () => {
        this.setState(prevState => ({
            isEdit: !prevState.isEdit
        }));
    }

    renderCourse = () => (
        <li>
            <span>{this.props.courseName}</span>
            <button onClick={this.toggleState}>Edit Course</button>
            <button onClick={() => this.props.deleteCourse(this.props.index)}>Delete Course</button>
        </li>
    );

    updateCourse = () => (
        <li>
            <form onSubmit={this.handleUpdateValue}>
                <input
                    type="text"
                    ref={this.input}
                    defaultValue={this.props.courseName}
                    placeholder="Enter Course Name ..."
                />
                <input className="formButton" type="submit" value="Update Course" />
            </form>
        </li>
    );

    render() {
        return (
            <Fragment>
                {this.state.isEdit ? this.updateCourse() : this.renderCourse()}
            </Fragment>
        );
    }
}

export default CourseList;
