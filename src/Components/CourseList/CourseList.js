import { Component, Fragment } from "react";

class CourseList extends Component{
    render(){

        return(
            <Fragment>
                <li>
                    {this.props.courseName}
                </li>
            </Fragment>
        )
    }
}

export default CourseList