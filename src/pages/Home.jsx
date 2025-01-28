import Header from "../components/Header"
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <div className="circuit-image"></div>
          <h1 className="main-title">نادي الابتكار الرقمي</h1>
          <p className="subtitle">تبي تبرمج صح؟ هذا مكانك!</p>
        </section>

        <section className="mission-section">
          <h2 className="section-title">رسالة النادي</h2>
          <p className="mission-text">
            توفير بيئة داعمة للطلاب تمكنهم من اكتشاف قدراتهم التقنية وتطويرها من خلال التعليم، والتجربة، والعمل الجماعي،
            بما يعزز مساهمتهم في تحقيق التحول الرقمي.
          </p>
        </section>

        <section className="objectives-section">
          <h2 className="section-title">أهداف نادي</h2>
          <div className="objectives-content">
            <div className="objectives-list">
              <ul>
                <li>تنظيم فعاليات ومسابقات تقنية تساهم في تنمية مواهب الأعضاء</li>
                <li>تطوير مهارات الطلاب في مجالات التكنولوجيا الحديثة</li>
                <li>تحفيز الطلاب على الإبداع وحل المشكلات باستخدام التقنيات الرقمية</li>
                <li>بناء جسور التعاون مع الشركات والمؤسسات لتعزيز فرص التدريب والتوظيف</li>
              </ul>
            </div>
            <div className="dashboard-image"></div>
          </div>
        </section>

        <section className="vision-section">
          <h2 className="section-title">رؤية النادي</h2>
          <div className="vision-content">
            <p className="vision-text">
              توفير بيئة داعمة للطلاب تمكنهم من اكتشاف قدراتهم التقنية وتطويرها من خلال التعليم، والتجربة، والعمل
              الجماعي، بما يعزز مساهمتهم في تحقيق التحول الرقمي.
            </p>
            <div className="error-image"></div>
          </div>
        </section>


        <section className="values-section">
          <h2 className="section-title">قيم النادي</h2>
          <div className="values-content">
            <div className="values-image"></div>
            <div className="values-list">
              <ul>
                <li>الابتكار: تعزيز التفكير الإبداعي في جميع الأنشطة</li>
                <li>التعاون: بناء علاقات مثمرة بين الأعضاء والمجتمع التقني</li>
                <li>التميز: السعي نحو تحقيق أعلى معايير الجودة في جميع المبادرات</li>
                <li>التطوير المستمر: تشجيع التعلم الدائم ومواكبة التقنيات الحديثة</li>
                <li>المسؤولية: الالتزام بالأثر الإيجابي على المجتمع داخل الجامعة وخارجها</li>
              </ul>
            </div>
          </div>
          <button className="secondary-button">تقدم</button>
        </section>

        <section className="activities-section">
          <h2 className="section-title">الفعليات</h2>
          <div className="code-container">
            <h3 className="code-title">ما الذي تقدمه هذه الفعالية للطلاب؟</h3>
            <div className="code-content">
              <ul>
                <li>تطبيق المهارات التقنية باستخدام البرمجة لحل مشكلات واقعية</li>
                <li>تعزيز العمل الجماعي وتطوير مهارات التعاون وحل المشكلات عبر فرق</li>
                <li>التعلم والتطوير: اكتساب خبرات عملية لدعم المشاريع البرمجية المستقبلية</li>
                <li>التفاعل مع الخبراء للحصول على نصائح وملاحظات لتحسين المهارات</li>
                <li>فرص وجوائز مميزة للفوز بجوائز أو تدريب لدعم في المسيرة الذاتية</li>
              </ul>
            </div>
          </div>
        </section>


        
      </main>
    </div>
  )
}

export default Home

