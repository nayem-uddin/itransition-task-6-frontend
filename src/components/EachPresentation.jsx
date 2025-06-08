import { useNavigate } from "react-router-dom";

export default function EachPresentation({ presentation }) {
  const { title, creator, creationDate } = presentation;
  const navigate = useNavigate();
  return (
    <>
      <tr onClick={() => navigate(`/edit/${title}`)}>
        {[title, creator, creationDate.toString().slice(0, 10)].map((prop) => (
          <td key={prop}>{prop}</td>
        ))}
      </tr>
    </>
  );
}
