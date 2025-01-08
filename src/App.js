import './App.css';
import Parent from './ChildToParent/Parent';
import Ctrl from './Controlled/Ctrl';
import Crousel from './Crousel/Crousel';
import { DataFetching } from './DataFetching/DataFetching';
import Folder from './Folderstructure/Folder';
import Pagination from './Pagination/Pagination';
import PracticeRating from './PracticeRating';
import Rating from './Rating/Rating';
import Search from './SearchBar/Search';
import Stopwatch from './StopWatch/Stopwatch';
import Todos from './ToDos/Todos';
import Unctrl from './Unconrolledcomponen/Unctrl';
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
     {/* <Pagination/> */}
     {/* <Parent/> */}
     {/* <Unctrl/> */}
     <Ctrl/>
    </div>
  );
}

export default App;
