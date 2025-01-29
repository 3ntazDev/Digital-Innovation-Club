import "../styles/Home.css";
import desginInFirstSection from "../assets/techTreeDesgin.png";
const Home = () => {
  return (
    <div className="home-container">
      <main>
        {/* the first section */}
        <section className="hero-section">
          <img src={desginInFirstSection} alt="" />
          <h1>
            نادي الابتكار <span className="linearSpan">الرقمي</span>
          </h1>
          <p>
            تبي تبرمج <span className="linearSpan">صح؟</span> هذا مكانك!
          </p>
          <button>أبدأ</button>
        </section>
        <section className="mission-section">
          <h2>رسالة النادي</h2>
          <p>
            توفير بيئة داعمة للطلاب تمكنهم من اكتشاف قدراتهم التقنية وتطويرها من
            خلال التعليم، والتجربة، والعمل الجماعي، بما يعزز مساهمتهم في تحقيق
            التحول الرقمي.
          </p>
        </section>
        <section className="objectives-section">
          <h2>أهداف نادي</h2>
          <div>
            <div>
              <ul>
                <li>
                  تنظيم فعاليات ومسابقات تقنية تساهم في تنمية مواهب الأعضاء
                </li>
                <li>تطوير مهارات الطلاب في مجالات التكنولوجيا الحديثة</li>
                <li>
                  تحفيز الطلاب على الإبداع وحل المشكلات باستخدام التقنيات
                  الرقمية
                </li>
                <li>
                  بناء جسور التعاون مع الشركات والمؤسسات لتعزيز فرص التدريب
                  والتوظيف
                </li>
              </ul>
            </div>
            <img src="" alt="" />
          </div>
        </section>

        <section className="vision-section">
          <h2>رؤية النادي</h2>
          <div>
            <p>
              توفير بيئة داعمة للطلاب تمكنهم من اكتشاف قدراتهم التقنية وتطويرها
              من خلال التعليم، والتجربة، والعمل الجماعي، بما يعزز مساهمتهم في
              تحقيق التحول الرقمي.
            </p>
            <img src="" alt="" />
          </div>
        </section>

        <section className="values-section">
          <h2>قيم النادي</h2>
          <div>
            <div></div>
            <div>
              <ul>
                <li>الابتكار: تعزيز التفكير الإبداعي في جميع الأنشطة</li>
                <li>التعاون: بناء علاقات مثمرة بين الأعضاء والمجتمع التقني</li>
                <li>
                  التميز: السعي نحو تحقيق أعلى معايير الجودة في جميع المبادرات
                </li>
                <li>
                  التطوير المستمر: تشجيع التعلم الدائم ومواكبة التقنيات الحديثة
                </li>
                <li>
                  المسؤولية: الالتزام بالأثر الإيجابي على المجتمع داخل الجامعة
                  وخارجها
                </li>
              </ul>
            </div>
          </div>
          <button className="secondary-button">تقدم</button>
        </section>

        <section className="activities-section">
          <h2>الفعليات</h2>
          <div>
            <h3>ما الذي تقدمه هذه الفعالية للطلاب؟</h3>
            <div>
              <ul>
                <li>
                  تطبيق المهارات التقنية باستخدام البرمجة لحل مشكلات واقعية
                </li>
                <li>
                  تعزيز العمل الجماعي وتطوير مهارات التعاون وحل المشكلات عبر فرق
                </li>
                <li>
                  التعلم والتطوير: اكتساب خبرات عملية لدعم المشاريع البرمجية
                  المستقبلية
                </li>
                <li>
                  التفاعل مع الخبراء للحصول على نصائح وملاحظات لتحسين المهارات
                </li>
                <li>
                  فرص وجوائز مميزة للفوز بجوائز أو تدريب لدعم في المسيرة الذاتية
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
