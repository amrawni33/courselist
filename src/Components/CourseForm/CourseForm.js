

const CourseForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" value={props.current} placeholder="Enter Course Name ..." onChange={props.CourseNameUpdate} />
                <input className="formButton" type="submit" value='Add Course' />
            </form>
        </div>
    )

}

export default CourseForm