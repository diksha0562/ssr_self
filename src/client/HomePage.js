import React, {useEffect} from 'react';
import Loadable from 'react-loadable';
const ToDoComponent = Loadable({
    loader: ()=>import('./ToDoList'),
    loading(){
        return <div>Loading...</div>
    },
    // modules: ['./ToDoList'],
    // webpack: () => [require.resolveWeak('./ToDoList')],
});

const HomePage = ()=>{
    useEffect(()=>{
        console.log('mounted');
    },[]);
    return <div>
        <button id="button1" onClick={e=>alert('hey')}>Press me</button>
        <ToDoComponent/>
    </div>
}

export default HomePage;