import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="title">تواصل معنا</h2>
      <div className="contact-form">
        {/* الحقول على اليسار */}
        <div className="left-section">
          <input type="text" className="input-field" placeholder="الاسم" />
          <input type="email" className="input-field" placeholder="الإيميل" />
          <input type="text" className="input-field" placeholder="السؤال" />
        </div>

        {/* صندوق الرسالة على اليمين */}
        <div className="right-section">
          <textarea className="input-field message-box" placeholder="اكتب رسالتك..."></textarea>
        </div>
      </div>

      {/* زر الإرسال */}
      <button className="submit-btn">إرسال الآن</button>
    </div>
  );
};

export default Contact;
