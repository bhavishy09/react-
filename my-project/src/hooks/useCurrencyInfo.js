import { useEffect,useState } from "react"




/* this is how you design custom hooks  */
function useCurrencyInfo(currency){

   
    /* we use useeffect hook here becuse it is invoked like when
       we  to call api 
       
       */
      const [data,setdata]=useState({})
      useEffect(()=>{
      
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/
          latest/currencies/${currency}.json`).then((res)=>res.json())
          .then((res)=>setdata(res[currency]))
          console.log(data)


      },[currency])
      console.log(data)
      return data

}

// puri functionality design kri --> then pure method ko hi return kr diya 
export default useCurrencyInfo;