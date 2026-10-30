import { useEffect, useState } from "react"

function Test(){
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    // 1. count가 바뀔 때마다 실행
    useEffect(()=>{
        console.log(count)
    }, [count]);

    useEffect(()=>{
        const id = setInterval(() => {
            console.log("Test Updated:" + count)
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, []); 
    
    return(
        <>
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </>
    )
}

export default Test