import {HashRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './components/Show';
import { GlobalTheme } from './theme';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient=new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <GlobalTheme>
    <HashRouter>
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path="/" element={<Home />}/>
      <Route path="starred" element={<Starred />} />
      </Route>
      <Route path='/show/:showId' element={<Show/>}/>
      <Route path='*' element={<div>Not Found</div>}/>
    </Routes>
  </HashRouter>
  </GlobalTheme>
  </QueryClientProvider>
  );
}

export default App;
