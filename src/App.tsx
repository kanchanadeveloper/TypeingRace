
import RestartButton from './Components/RestartButton'
import Results from "./Components/Results";
import UserTypings from "./Components/UserTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helper";



const App = () =>
  {
  const {state,words,timeLeft,typed,errors,totalTyped,restart} =useEngine()

   return (
    <>
     <CountdownTimer timeLeft={timeLeft}/>
     <WordsContainer>
     <GenerateWords words={words}/>
     <UserTypings className="absolute inset-0" userInput={typed} words={words}/>

     </WordsContainer>
     <RestartButton className={'mx-auto mt-10 text-slate-500'}
     onRestart={restart}
     />
     <Results 
     state={state}
     className="mt-10"
     errors={errors}
     accuracyPercentage={calculateAccuracyPercentage(errors,totalTyped)}
     total={totalTyped}/>
     </>
   )

  }


const GenerateWords = ({words}:{words:string}) =>
  {
  return <div className="text-slate-500">{words}</div>

  }
  const CountdownTimer = ({timeLeft}:{timeLeft:number}) =>
    {
    return <h2 className="text-primary-400 font-medium">Time:{timeLeft}</h2>
  
    }

    const WordsContainer = ({children}:{children:React.ReactNode})=>
      {
    return( 
    <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
      {children}
</div>
      )}
export default App;
