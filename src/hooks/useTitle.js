import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title}|IntelliKids`
    },[title])
}

export default useTitle