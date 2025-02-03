import { teamData } from "../Data/Team.js";
import "../styles/Team.css"; // Importing styles

const Team = () => {
  return (
    <div className="team-section">
      <h1 className="team-title">الفريق</h1>
      <p className="team-subtitle" style={{ color: "#003153" }}>
        تعرف على فريقنا المتميز
      </p>

      {teamData.map((committee, index) => (
        <div key={index} className="committee">
          {committee.title !== "قادة الفريق" && (
            <div className="committee-title">{committee.title}</div>
          )}

          <div className="members">
            {committee.members.map((member, idx) => (
              <div key={idx} className="member">
                <div className="member-photo"></div>
                <div className="member-info">
                  <div className="member-name" style={{ color: "White" }}>
                    {member.name}
                  </div>
                  <div className="member-role">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
