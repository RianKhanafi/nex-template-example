export default function ApiExamplePage() {
  return (
    <div>
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p>
        <em>You must be signed in to see responses.</em>
      </p>
      <h2>Session</h2>
      <p>/api/session</p>
      <iframe src="./api/session" />
      <h2>JSON Web Token</h2>
      <p>/api/jwt</p>
      <iframe src="./api/jwt" />
    </div>
  );
}
