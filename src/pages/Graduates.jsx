// Graduates.jsx
import Card from "../components/Card";
import "../styles/Graduates.css";
import { GS } from "../GS.js";

const Graduates = () => {
  return (
    <div className="page">
      <div className="graduatesPage">
        <h1>خريجين النادي</h1>
        <p>تعرف على خريجينا وإنجازاتهم</p>
      </div>
      <div className="Card-Continer">
        {GS.map((graduate, index) => (
          <Card
            key={index}
            name={graduate.name}
            specialization={graduate.specialization}
            skills={graduate.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Graduates;
