import './App.css';
import Crousel from './Crousel/Crousel';
import { DataFetching } from './DataFetching/DataFetching';
import Folder from './Folderstructure/Folder';
import Pagination from './Pagination/Pagination';
import PracticeRating from './PracticeRating';
import Rating from './Rating/Rating';
import Search from './SearchBar/Search';
import Stopwatch from './StopWatch/Stopwatch';
import Todos from './ToDos/Todos';
import explorer from './data';

function App() {
  return (
    <div>
     {/* <Rating limit={5} rating={2}/> */}
     {/* <Search/> */}
     {/* <Crousel/> */}
     {/* <DataFetching/> */}
     {/* <Stopwatch/> */}
     {/* <Todos/> */}
     {/* <Folder explorer={explorer}/> */}
     {/* <PracticeRating limit={5} Rating={2}/> */}
     <Pagination/>
    </div>
  );
}

export default App;
