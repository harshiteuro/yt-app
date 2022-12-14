import React from 'react';
import { Router,Route,Switch} from 'react-router-dom';
//client ID
//1075162417069-nn15mecbd96ici0t5kopkpsp1qq3f8f5.apps.googleusercontent.com
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';
const App=()=>{
  return (
  <div className='ui container'>
    <Router history={history}>
    <Header></Header>
    <Switch>
      <Route path="/" exact component={StreamList}></Route>
      <Route path="/streams/new" exact component={StreamCreate}></Route>
      <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
      <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
      <Route path="/streams/:id" exact component={StreamShow}></Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;