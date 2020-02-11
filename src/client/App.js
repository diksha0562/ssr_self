import React from 'react';
import {renderRoutes} from 'react-router-config';

const App = ({route})=>{
    console.log('route', route, route.routes);
    return <div>
        <h4>app</h4>
        {renderRoutes(route.routes)}
    </div>
}

export default App;
// export default {
//     component: App,
//     // loadData: ({dispatch}) => dispatch(fetchCurrentUser())
// };