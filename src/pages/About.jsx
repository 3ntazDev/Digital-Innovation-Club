import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* قسم تأسيس النادي */}
      <section className="about-intro">
        <h2 className="title">تأسيس النادي</h2>
        <p className="description">
          انطلاقاً من وعي إدارة جامعة الأمير سطام بن عبد العزيز بأهمية الابتكار والتطور التكنولوجي، 
          جاء قرار إنشاء نادي الابتكار الرقمي ليكون منصة تفاعلية لتمكين الطلاب ومساعدتهم على تطوير مهاراتهم التقنية والإبداعية.
        </p>
      </section>

      {/* قسم من نكون */}
      <section className="about-who">
        <h2 className="subtitle">من نكون</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>مميزاتنا</h3>
            <p>
              نقدم بيئة محفزة، تشمل ورش عمل، مسابقات، برامج متقدمة لتطوير المهارات، وفرص تعاون مع شركات تقنية.
            </p>
          </div>
          <div className="about-card">
            <h3>من نحن</h3>
            <p>
              نادي طلابي يهدف إلى تمكين الطلاب تقنياً وإبداعياً من خلال أنشطة متنوعة وبناء مجتمع شغوف بالتكنولوجيا.
            </p>
          </div>
          <div className="about-card">
            <h3>خطط مستقبلية</h3>
            <p>
              تنظيم هاكاثونات، إطلاق برامج تدريبية، شراكات تقنية، وتقديم ورش متقدمة في الذكاء الاصطناعي والبرمجة.
            </p>
          </div>
        </div>
      </section>

      {/* رسالة التحفيز */}
      <section className="about-message">
        <p>كل خطأ في الكود هو خطوة نحو</p>
        <h2>“فهم أعمق وإتقان”</h2>
      </section>
    </div>
  );
};

export default About;
