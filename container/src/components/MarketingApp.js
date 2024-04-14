import {mount as mountMarketing} from 'marketing/MarketingApp'
import React,{useRef, useEffect} from 'react'

export default() => {
    const ref = useRef(null) //reference to an HTML element for rendering

    useEffect(() => {
        mountMarketing(ref.current)
    },[])

    return <div ref={ref}/>
}