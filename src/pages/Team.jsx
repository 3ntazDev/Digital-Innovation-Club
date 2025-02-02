import { teamData } from "../Data/Team.js";
import "../styles/Team.css"; // ملف التنسيقات

const Team = () => {
  return (
    <div className="team-section">
      <h1 className="team-title">الفريق</h1>
      <p className="team-subtitle">تعرف على فريقنا المتميز</p>

      {teamData.map((committee, index) => (
        <div key={index} className="committee">
          {committee.title !== "قادة الفريق" && (
            <div className="committee-title">{committee.title}</div>
          )}

          <div className="members">
            {committee.members.map((member, idx) => (
              <div key={idx} className="member">
                
                <div className="member-name">{member.name}</div>
                <div className="member-role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
