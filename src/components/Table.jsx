import {BsCheckLg, BsFillTrashFill} from 'react-icons/bs'



export const Table = ({taskList, setTaskList}) => {

    const removeTask = (task) => {
        setTaskList(taskList.filter((el) =>{
            return el.key !== task
        }))
    }


    return (
        <table>
            <thead>
                <tr>
                    <th className="task-column">Task</th>
                    <th className="date-column">Date Created</th>
                    <th className="action-column">Action</th>
                </tr>
            </thead>    
            <tbody>
                {taskList.length > 0 && taskList.map((list)=>{
                    return (
                        <tr key={list.key}>
                            <td>{list.task}</td>
                            <td className="time-table">{list.time}</td>
                            <td className="action-table"  ><button className='btn-complete' value={list.key} onClick={
                                (e) => {
                                    e.stopPropagation()
                                    removeTask(list.key)
                                }
                            } ><BsCheckLg /></button> <button className='btn-remove' value={list.key} onClick={
                                (e) => {
                                    e.stopPropagation()
                                    removeTask(list.key)
                                }
                            }><BsFillTrashFill /></button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}