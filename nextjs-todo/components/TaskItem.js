import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../slices/tasksSlice';
import { useState } from 'react';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDescription, setEditedDescription] = useState(task.description);

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSaveEdit = () => {
        const editedTask = {
            id: task.id,
            title: editedTitle,
            description: editedDescription,
        };

        dispatch(editTask(editedTask));
        setEditing(false);
    };

    const handleCancelEdit = () => {
        setEditing(false);
    };

    return (
        <section>

            <li className='border-t border-gray-200'>
                {isEditing ? (
                    <div className="px-4 py-5 sm:px-6">
                        <div className="flex items-center justify-between">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text"
                                    name="title"
                                    id="floating_email"
                                    value={editedTitle}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    onChange={(e) => { setEditedTitle(e.target.value) }} />
                                <label
                                    htmlFor="title"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Title
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text"
                                    name="description"
                                    id="floating_email"
                                    value={editedDescription}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    onChange={(e) => { setEditedDescription(e.target.value) }} />
                                <label
                                    htmlFor="description"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Description
                                </label>
                            </div>
                        </div>
                        <button onClick={handleSaveEdit} className="font-medium text-green-600 hover:text-green-500" >Save</button>
                        
                    </div>
                ) : (
                    <div className="px-4 py-5 sm:px-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{task.title}</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">{task.description}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                        <button className="font-medium text-red-600 hover:text-red-500" onClick={handleDelete}>Delete</button>
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={handleEdit} >Edit</a>
                        </div>
                    </div>
                )}

            </li>
        </section>
    );

};

export default TaskItem;
