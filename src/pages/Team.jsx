import Card from '../components/Card'; // تأكد من أن المسار صحيح
import { teamMembers } from '../Team'; // تأكد من أن المسار صحيح
import '../styles/Team.css'; // تأكد من أن لديك ملف CSS لتنسيق الصفحة

const Team = () => {
  return (
    <div className="page">
      <h1>الفريق</h1>
      <p>تعرف على فريقنا المتميز</p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            specialization={member.specialization}
            skills={member.skills}
            x={member.x}
            linkdin={member.linkdin}
            github={member.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;