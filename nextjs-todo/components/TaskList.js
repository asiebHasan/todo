// components/TaskList.js
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './TaskItem';
import TaskForm from '../components/TaskForm';

const TaskList = () => {
  // const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const tasks = useSelector((state) => state.tasks) ;
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
        <li className='border-t border-gray-200-'>
          <div className="flex items-center justify-center text-2xl text-blue-600/100">
            <h2>Task List</h2>
          </div>
        </li>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />

        ))}
      </ul>
      <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
      </ul>
    </div>
  );
};

export default TaskList;
