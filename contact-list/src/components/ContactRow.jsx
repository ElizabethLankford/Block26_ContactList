export default function ContactRow({ person, setSelectedContactId }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(person.id);
      }}
    >
      <td>{person.name} </td>
      <td>{person.email} </td>
      <td>{person.phone} </td>
    </tr>
  );
}
