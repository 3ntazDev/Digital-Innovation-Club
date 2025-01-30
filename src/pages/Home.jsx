import { useEffect } from "react";
import AOS from "aos";
import "../styles/Home.css";

import desginInFirstSection from "../assets/techTreeDesgin.png";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // تحديد مدة الحركة والتأكد من تشغيلها مرة واحدة فقط
  }, []);

  return (
    <div className="home-container">
      <main>
        {/* the first section */}
        <section className="hero-section">
          <img src={desginInFirstSection} alt="" data-aos="fade-right" />
          <h1 data-aos="fade-up">
            نادي الابتكار <span className="linearSpan">الرقمي</span>
          </h1>
          <p data-aos="fade-up">
            تبي تبرمج <span className="linearSpan">صح؟</span> هذا مكانك!
          </p>
          <button data-aos="zoom-in">أبدأ</button>
        </section>

        {/* رسالة النادي */}
        <section className="mission-section" data-aos="fade-left">
          <h2>رسالة النادي</h2>
          <p>
            توفير بيئة داعمة للطلاب تمكنهم من اكتشاف قدراتهم التقنية وتطويرها من
            خلال التعليم، والتجربة، والعمل الجماعي، بما يعزز مساهمتهم في تحقيق
            التحول الرقمي.
          </p>
        </section>

        {/* أهداف النادي */}
        <section className="objectives-section">
          <h2 data-aos="fade-up">أهداف النادي</h2>
          <div>
            <div>
              <ul>
                <li data-aos="fade-up">
                  تنظيم فعاليات ومسابقات تقنية تساهم في تنمية مواهب الأعضاء
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  تطوير مهارات الطلاب في مجالات التكنولوجيا الحديثة
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  تحفيز الطلاب على الإبداع وحل المشكلات باستخدام التقنيات
                  الرقمية
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  بناء جسور التعاون مع الشركات والمؤسسات لتعزيز فرص التدريب
                  والتوظيف
                </li>
              </ul>
            </div>
            <img src="" alt="" data-aos="zoom-in" />
          </div>
        </section>

        {/* رؤية النادي */}
        <section className="vision-section" data-aos="fade-right">
          <h2>رؤية النادي</h2>
          <div>
            <p>
              توفير بيئة داعمة للطلاب تمكنهم من اكتشاف قدراتهم التقنية وتطويرها
              من خلال التعليم، والتجربة، والعمل الجماعي، بما يعزز مساهمتهم في
              تحقيق التحول الرقمي.
            </p>
            <img src="" alt="" data-aos="zoom-in" />
          </div>
        </section>

        {/* قيم النادي */}
        <section className="values-section">
          <h2 data-aos="fade-up">قيم النادي</h2>
          <div>
            <div></div>
            <div>
              <ul>
                <li data-aos="fade-up">الابتكار: تعزيز التفكير الإبداعي في جميع الأنشطة</li>
                <li data-aos="fade-up" data-aos-delay="100">التعاون: بناء علاقات مثمرة بين الأعضاء والمجتمع التقني</li>
                <li data-aos="fade-up" data-aos-delay="200">التميز: السعي نحو تحقيق أعلى معايير الجودة في جميع المبادرات</li>
                <li data-aos="fade-up" data-aos-delay="300">التطوير المستمر: تشجيع التعلم الدائم ومواكبة التقنيات الحديثة</li>
                <li data-aos="fade-up" data-aos-delay="400">
                  المسؤولية: الالتزام بالأثر الإيجابي على المجتمع داخل الجامعة وخارجها
                </li>
              </ul>
            </div>
          </div>
          <button className="secondary-button" data-aos="zoom-in">تقدم</button>
        </section>

        {/* الفعاليات */}
        <section className="activities-section">
          <h2 data-aos="fade-up">الفعليات</h2>
          <div>
            <h3 data-aos="fade-right">ما الذي تقدمه هذه الفعالية للطلاب؟</h3>
            <div>
              <ul>
                <li data-aos="fade-up">تطبيق المهارات التقنية باستخدام البرمجة لحل مشكلات واقعية</li>
                <li data-aos="fade-up" data-aos-delay="100">
                  تعزيز العمل الجماعي وتطوير مهارات التعاون وحل المشكلات عبر فرق
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  التعلم والتطوير: اكتساب خبرات عملية لدعم المشاريع البرمجية المستقبلية
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  التفاعل مع الخبراء للحصول على نصائح وملاحظات لتحسين المهارات
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
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
