import {mount as mountDashboard} from 'dashboard/DashboardApp'
import React,{useRef, useEffect} from 'react'

export default() => {
    const ref = useRef(null) //reference to an HTML element for rendering

    useEffect(() => {
        mountDashboard(ref.current)
    },[])

    return <div ref={ref}/>
}