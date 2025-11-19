import React, { use, useEffect } from 'react'
import { useState } from 'react'


export const ProfileFunction = (props) => {

    const [vars] = useState(0)
    const [vars2] = useState(1)
    const [value, setValue] = useState(0); {/*use state , set state */ }
    const [value2, setValue2] = useState(0); {/*use state , set state */ }
    // useEffect() will render after initial render in function base

    useEffect(() => {

    }, [value]),

        useEffect(() => {
        }, [value2])


    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Namaste React OP")
        }, 1000)

        return () => {
            clearInterval(timer)
            console.log("component will unmount function")
        }
    }, [])


    return (
        <div className='min-h-80 m-10'>Profile
            <p>hello</p>
            <p>props name as type of  {props.name}</p>  {/* using props */}
            <p>use satate {vars}</p>
            <p>use state {vars2}</p>
            <p>use state {value}</p>
            <p>use state {value2}</p>
            <button className='bg-slate-700 w-22 text-white h-7 flex align-middle justify-center' onClick={() => {
                setValue(1), setValue2(1)
            }}>set Value {value}</button>
        </div>
    )
}  //Rendering componenet
