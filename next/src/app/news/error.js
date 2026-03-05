'use client' // Error boundaries must be Client Components
 
export default function Error({ error, reset }) {
  return (
    <div>
        <h1>News Route Error</h1>
      <h2>Something went wrong!</h2>
      {/* <button onClick={() => reset()}>Try again</button> */}
    </div>
  )
}