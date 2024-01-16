// pages/index.js
import Head from 'next/head';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Simple Todo App using Next.js and Redux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="mt-4 flex items-center justify-center text-2xl text-blue-600/100">Todo App</h1>

        <div className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
          <TaskForm />
        </div>
        <TaskList />
      </main>



    </div>
  );
};

export default Home;
