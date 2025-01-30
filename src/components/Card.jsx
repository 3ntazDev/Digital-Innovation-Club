import styled from 'styled-components';
import linkedinIcon from '../assets/linkedin_2931621.png';

const Card = (Props) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="top-section">
          <div className="icons">
            <div className="logo">
            </div>
            <div className="social-media">
              {Props.x && (
                <a href={Props.x} target="_blank" rel="noopener noreferrer">
                  <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </a>
              )}
              {Props.linkdin && (
                <a href={Props.linkdin} target="_blank" rel="noopener noreferrer">
<img src={linkedinIcon} alt="LinkedIn Icon" className="svg" />
</a>
              )}
            </div>
          </div>
        </div>
        <div className="bottom-section">
        <span className="title">{Props.name}</span>
        <span className="title">{Props.specialization}</span>
        <div className="row row1">
            <div className="item">
            <span className="big-text">{Props.skills}</span>
              <span className="big-text"></span>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 230px;
    border-radius: 20px;
    background: #1b233d;
    padding: 5px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card .top-section {
    height: 150px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%);
    position: relative;
  }

  .card .top-section .border {
    border-bottom-right-radius: 10px;
    height: 30px;
    width: 130px;
    background: white;
    background: #1b233d;
    position: relative;
    transform: skew(-40deg);
    box-shadow: -10px -10px 0 0 #1b233d;
  }

  .card .top-section .border::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    right: -15px;
    background: rgba(255, 255, 255, 0);
    border-top-left-radius: 10px;
    box-shadow: -5px -5px 0 2px #1b233d;
  }

  .card .top-section::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 0;
    background: rgba(255, 255, 255, 0);
    height: 15px;
    width: 15px;
    border-top-left-radius: 15px;
    box-shadow: -5px -5px 0 2px #1b233d;
  }

  .card .top-section .icons {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
  }

  .card .top-section .icons .logo {
    height: 100%;
    aspect-ratio: 1;
    padding: 7px 0 7px 15px;
  }

  .card .top-section .icons .logo .top-section {
    height: 100%;
  }

  .card .top-section .icons .social-media {
    height: 100%;
    padding: 8px 15px;
    display: flex;
    gap: 7px;
  }

  .card .top-section .icons .social-media .svg {
    height: 100%;
    fill: #1b233d;
  }

  .card .top-section .icons .social-media .svg:hover {
    fill: white;
  }

  .card .bottom-section {
    margin-top: 15px;
    padding: 10px 5px;
  }

  .card .bottom-section .title {
    display: block;
    font-size: 17px;
    font-weight: bolder;
    color: white;
    text-align: center;
    letter-spacing: 2px;
  }

  .card .bottom-section .row {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .card .bottom-section .row .item {
    flex: 30%;
    text-align: center;
    padding: 5px;
    color: rgba(170, 222, 243, 0.721);
  }

  .card .bottom-section .row .item .big-text {
    font-size: 12px;
    display: block;
  }

  .card .bottom-section .row .item .regular-text {
    font-size: 9px;
  }

  .card .top-section .icons .social-media .svg,
  .card .top-section .icons .social-media img {
    height: 100%;
    transition: filter 0.3s ease-in-out;
  }

  .card .top-section .icons .social-media .svg:hover,
  .card .top-section .icons .social-media img:hover {
    filter: brightness(0) invert(1);
  }





  .card .bottom-section .row .item:nth-child(2) {
    border-left: 1px solid rgba(255, 255, 255, 0.126);
    border-right: 1px solid rgba(255, 255, 255, 0.126);
  }`;


  
export default Card;
