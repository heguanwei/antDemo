import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';


const registerModel = (app,model) =>{
  console.log("app:"+app);
  if(!(app._models.filter(m =>m.namespace === model.namespace).length === 1)){
    app.model(model)
  }
}

const RouterConfig = ({ history,app }) => {
  // return (
  //   <Router history={history}>
  //     <Switch>
  //       <Route path="/" exact component={IndexPage} />
  //     </Switch>
  //   </Router>
  // );
  const routes = [{
    path: "/indexPage",
    name: "IndexPage",
    getComponent(nextState,cb){
        require.ensure([],require =>{
          registerModel(app,require("./models/example"))
          cb(null,require("./routes/IndexPage"));
        })
    }
  }]
  debugger
  return  <Router history={history} routes={routes}/>
}

export default RouterConfig;
