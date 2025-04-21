import {useEffect} from 'react'

function Scroll() {
    useEffect(() => {
        document.body.style.overflow = 'scroll';
        return () => document.body.style.overflow = ''
    }, [])
    return (
        <>
        </>
    )
}

export default Scroll