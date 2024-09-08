import React, { useEffect } from "react"
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"

// Model the application state.
function createTimer() {
    return makeAutoObservable({
        secondsPassed: 0,
        increase() {
            this.secondsPassed += 1
        },
        reset() {
            this.secondsPassed = 0
        }
    })
}

const myTimer = createTimer()

// Build a "user interface" that uses the observable state.
const TimerView = observer(({ timer }) => (
    <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
))


export function Index() {
  useEffect(() => {
    // Update the 'Seconds passed: X' text every second.
    setInterval(() => {
      myTimer.increase()
    }, 1000)
  }, []);
  return <TimerView timer={myTimer} />
}