

const CourseForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" value={props.current} placeholder="Enter Course Name ..." id="name" onChange={props.CourseNameUpdate} />
                <input type="submit" value='Add Course' />
            </form>
        </div>
    )

}

export default CourseForm