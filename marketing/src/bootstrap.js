import React from 'react'
import ReactDOM from 'react-dom'
import {createMemoryHistory, createBrowserHistory} from 'history'
import App from './App'

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    }) //Memory History object

    if(onNavigate){
    history.listen(onNavigate) // callback from Container to sync any routing changes in Marketing sub-app
    }

    ReactDOM.render(
        <App history={history}/>,
        el
    )

    return {
        onParentNavigate({pathname: nextPathName}){
            const {pathname: currentPath} = history.location

            if(currentPath !== nextPathName){
                history.push(nextPathName)
            }
        }
    }
}

if(process.env.NODE_ENV === "development"){
    const devRoot = document.querySelector('#_marketing-dev-root')

    if(devRoot){
        mount(devRoot, {defaultHistory: createBrowserHistory()})
    }
}

export {mount}