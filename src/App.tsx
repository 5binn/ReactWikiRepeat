import { useFormInput } from "./useFormInput";

function Hello({ fullName }: any) {
  return <h1>Good morning, {fullName}</h1>;
}

export default function App() {
  const firstName = useFormInput("Mary");
  const lastName = useFormInput("Poppins");
  return (
    <>
      <label>
        First Name:
        <input {...firstName} />
      </label>
      <label>
        Last Name:
        <input {...lastName} />
      </label>
      <br />
      <Hello fullName={firstName.value + " " + lastName.value} />
    </>
  );
}
