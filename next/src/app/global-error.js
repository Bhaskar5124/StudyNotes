'use client' // Error boundaries must be Client Components
 //Only works in Production
//  If you are keeping global-error.js, 
// remember that it must define its own <html> and <body> tags because it replaces the root layout entirely when it triggers:
//Only shown if your root layout.js crashes.
// You usually won't see your custom global-error.js or error.js UI while in Development Mode.

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went critically wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}