import React, { useState, Fragment } from 'react'
function CreateToDo(props) {
    const { onCreate } = props
    
    const [book, setBook] = useState({
        title: "",
        description: "",
        done: false
    })
    const onChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }
    const saveTodo = (e) => {
        e.preventDefault()
        onCreate(book)
    }
    return (
        <Fragment>
                <form onSubmit={saveTodo}>
                    <h2 className="text-center m-3">To do APP</h2>
                    <div className="form-row d-flex justify-content-center">
                        <div className="col-3 m-1">
                            <input name = "title" type="text" 
                                className="form-control" placeholder="Title"
                                onChange={(e) => onChange(e)} />
                        </div>
                        <div className="col-5 d-flex justify-content-center m-1">
                            <input type="text" className="form-control" 
                                name = "description" placeholder="Description"
                                onChange={(e) => onChange(e)}/>
                        </div>
                        <button className='btn btn-primary col-2 d-flex justify-content-center m-1' 
                            type='submit'>Add</button>
                    </div>
                </form>
        </Fragment>
    )
}
export default CreateToDo