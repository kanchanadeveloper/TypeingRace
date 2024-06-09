
import { useCallback, useEffect, useRef, useState } from "react";

const useCountdownTimer = (
    seconds: number
) => {
    const [timeLeft, setTimeLeft] = useState(seconds)
    const intervelRef = useRef<NodeJS.Timer | null>(null)

    const startCountDown = useCallback(() => {
        console.log("startCountDown...");
        intervelRef.current = setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft - 1)
        }, 1000)
    }, [setTimeLeft])

    const resetCountDown = useCallback(() => {
        console.log("resetCountDown...");
        if (intervelRef.current) {
            clearInterval(intervelRef.current)

        }
        setTimeLeft(seconds);
    }, [seconds])


    useEffect(()=>
    {
        if(!timeLeft && intervelRef.current)
            {
                console.log("clear Timer...")
            clearInterval(intervelRef.current)

            }
    },[timeLeft,intervelRef])
    return { timeLeft, startCountDown, resetCountDown }
};
export default useCountdownTimer;








