import EachPresentation from "../components/EachPresentation";
export default function DisplaySlides({ presentations }) {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            {["Title", "Created by", "Creation date"].map((field) => (
              <th key={field}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {presentations.map((presentation) => (
            <EachPresentation
              presentation={presentation}
              key={presentation.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
