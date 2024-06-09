import { faker } from "@faker-js/faker";
import { useCallback,useState } from "react";


const GenerateWords =(count:number)=>
    {
        return faker.random.words(count).toLowerCase()
    }
    const useWords  =(count:number)=>
        {
       const [words,setWords]=useState(GenerateWords(count))
           
       const updateWords=useCallback(()=>
    {
        setWords(GenerateWords(count))},[count]);
        return {words,updateWords}

    };

    export default useWords;
    
       