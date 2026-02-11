
const Form = (props) => {

    // console.log(props);  
    let { course, trainer, handleChange, handleSubmit } = props

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Task : </label>
                    <input type="text" placeholder="Enter Task" name="course" value={course} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Description : </label>
                    <input type="text" placeholder="Enter Description" name="trainer" value={trainer} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form