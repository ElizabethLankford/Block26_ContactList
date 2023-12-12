import { useEffect, useState } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const json = await response.json();
        setContact(json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, []);

  console.log("contact: ", contact);
  return (
    <div className="selectedContainer">
      <div>
        {contact ? (
          <ul>
            <li>Name: {contact.name}</li>
            <li>Email: {contact.email}</li>
            <li>Phone: {contact.phone}</li>
          </ul>
        ) : (
          "no user selected"
        )}
      </div>
      <button onClick={() => setSelectedContactId(null)}>Go back</button>
    </div>
  );
}
