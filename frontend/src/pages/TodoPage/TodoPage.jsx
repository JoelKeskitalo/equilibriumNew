import React from 'react'
import './TodoPage.scss'

const TodoPage = () => {
    return (
        <div className='todo-page'>
            <form className='todo-form'>
                <h1>Add a new Todo</h1>
                <div className='form-group'>
                    <label htmlFor='todo'>Todo</label>
                    <input type='text' id='todo' name='todo' placeholder='Enter your todo' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description (optional)</label>
                    <textarea id='description' name='description' placeholder='Add a description'></textarea>
                </div>
                <div className='buttons'>
                    <button type='submit' className='custom-button'>Add Todo</button>
                    <button className='custom-button'>View todo list</button>
                </div>
            </form>
        </div>
    )
}

export default TodoPage
