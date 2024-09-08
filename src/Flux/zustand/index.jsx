import useStore from "./useStore"
export function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

export function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}


export default function Index() {
  return (
    <div>
      <BearCounter />
      <Controls />
    </div>
  )
}