import { useState, useEffect, loc } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../slices/tasksSlice';

const TaskForm = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTask = () => {
        if (title && description) {
            const newTask = {
                id: Date.now(),
                title,
                description,
            };

            dispatch(addTask(newTask));
            setTitle('');
            setDescription('');
        }

    };

    return (
        <section>
            <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center justify-between">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text"
                            name="title"
                            id="floating_email"
                            value={title}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) => { setTitle(e.target.value) }} />
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
                            value={description}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) => { setDescription(e.target.value) }} />
                        <label
                            htmlFor="description"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Description
                        </label>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={handleAddTask} >Add Task</a>
                </div>
            </div>

        </section>
    );
};

export default TaskForm;
