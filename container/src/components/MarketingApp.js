import {mount as mountMarketing} from 'marketing/MarketingApp'
import React,{useRef, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default() => {
    const ref = useRef(null) //reference to an HTML element for rendering
    const history = useHistory() //Browser History object

    useEffect(() => {
        const {onParentNavigate} = mountMarketing(ref.current, {
            onNavigate: ({pathname: nextPathName}) => {
                const {pathname: currentPath} = history.location
                if(currentPath !== nextPathName){ //to check if Container is already at the desired location and prevent infinite callback calls
                    history.push(nextPathName)
                }
            }
        })

        history.listen(onParentNavigate) //listening for navigation changes in Container and calling the sub-app callback function
    },[])

    return <div ref={ref}/>
}