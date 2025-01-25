import './App.css';
import PostsList from './features/Posts/PostsList';
import AddPostForm from './features/Posts/AddPostForm';

const App = () => {
  return (
    <main className='App'>
      <AddPostForm />
      <PostsList />
    </main>
  )
}
export default App;
