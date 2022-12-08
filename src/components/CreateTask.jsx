export const CreateTask = ({writeTask, setWriteTask,  addToList}) => {




    return (
        <div className="create-task">
            <input
                className="input-task"
                type="text" value={writeTask} 
                placeholder="create task" 
                onChange={(e)=> setWriteTask(e.target.value)}
            ></input>
            <button
                className="button task-button"
                type="submit"
                onClick={()=>{if(writeTask) {addToList(writeTask)}}}
            >Create Task</button>
        </div>
    )
}