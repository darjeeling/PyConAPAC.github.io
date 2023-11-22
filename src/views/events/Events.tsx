import { useState } from "react";
import './style.css';

export default function Events() {
  const [currentSlide, changeCurrentSlide] = useState(1);
  const slides = [
    {
      key: 1,
      img: 'event-slide-1-apac2024.png',
      title: 'PyCon APAC 2024',
      badgeText: 'UPCOMING',
      badgeType: 'danger',
      description: "PyCon APAC 2024 will be hosted by PyCon ID.",
      info: [
        "2024 October Oct 25-27",
        "Yogyakarta, Indonesia"
      ]
    },
/*    {
      key: 2,
      img: 'images/event-slide-1.png',
      title: 'Pycon APAC 2022',
      badgeText: 'UPCOMING',
      badgeType: 'info',
      description: "Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna,vel scelerisque nisl consectetur et. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper.",
      info: [
        "2022 September 1, 8:00AM - 5:00PM CST",
        "Taipei International Convention Center (TICC)"
      ]
    },
    {
      key: 3,
      img: 'images/event-slide-1.png',
      title: 'Pycon APAC 2022',
      badgeText: 'UPCOMING',
      badgeType: 'warning',
      description: "Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna,vel scelerisque nisl consectetur et. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper.",
      info: [
        "2022 September 1, 8:00AM - 5:00PM CST",
        "Taipei International Convention Center (TICC)"
      ]
    },
    {
      key: 4,
      img: 'images/event-slide-1.png',
      title: 'Pycon APAC 2022',
      badgeText: 'UPCOMING',
      badgeType: 'success',
      description: "Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna,vel scelerisque nisl consectetur et. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper.",
      info: [
        "2022 September 1, 8:00AM - 5:00PM CST",
        "Taipei International Convention Center (TICC)"
      ]
    },*/
  ]

  const setCurrentSlide = (data: any, idx: number):void => {
    data.preventDefault();
    changeCurrentSlide(idx);
  }

  const nextPrevSlide = (idx: number) => {
    console.log('nextPrevSlide', idx)
    if (idx > slides.length) {
      changeCurrentSlide(1);
    }else if (idx < 1) {
      changeCurrentSlide(slides.length);
    } else {
      changeCurrentSlide(idx);
    }
  }

  return (
    <div className="events-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <div className="left-text-content">
              <div className="section-heading">
                <h1 className="text-white">Events</h1>
                <br />
                <h4 className="text-white">Regional PyCon 2023 in APAC Schedule</h4>
                <br />
              </div>
              <div className="medium-text text-white" style={{opacity: '60%'}}>
                <ul>
                  <li>Feb 25-26: <strong>PyCon PH</strong> Manila, Philippines <a href="https://pycon-2023.python.ph">🔗</a></li>
                  <li>Aug 11-13: <strong>PyCon KR</strong> Seoul, Korea <a href="https://2023.pycon.kr">🔗</a></li>
                  <li>Aug 18-22: <strong>PyCon AU</strong> Adelaide, Australia <a href="http://au.pycon.org">🔗</a></li>
                  <li>Aug 26: <strong>PyCon MY</strong> Malaysia <a href="https://pycon.my">🔗</a></li>
                  <li>Sept 2-3: <strong>PyCon TW</strong> Taipei, Taiwan <a href="https://tw.pycon.org">🔗</a></li>
                  <li>Sept 15-17: <strong>Kiwi PyCon</strong> Invercargill, New Zealand <a href="https://kiwipycon.nz">🔗</a></li>
                  <li>Sept 29-Oct 2: <strong>PyCon India</strong> Hyderabad, India <a href="https://in.pycon.org/2023/">🔗</a></li>
                  <li>Oct 27-29: <strong>PyCon APAC (by PyCon JP)</strong> Tokyo, Japan  <a href="https://2023-apac.pycon.jp">🔗</a></li>
                  <li>Nov 10-11: <strong>PyCon HK</strong> Hong Kong <a href="https://pycon.hk">🔗</a></li>
                  <li>Nov 18-19: <strong>PyCon ID</strong> Indonesia <a href="https://pycon.id">🔗</a></li>
                  <li>Dec 15-16: <strong>PyCon TH </strong> Thailand <a href="https://th.pycon.org">🔗</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <div className="left-text-content">
              <div className="section-heading">
                <br />
                <h4 className="text-white">Regional PyCon 2024 in APAC Schedule</h4>
                <br />
              </div>
              <div className="medium-text text-white" style={{opacity: '60%'}}>
                <ul>
                  <li>Feb 25-26: <strong>PyCon PH</strong> Manila, Philippines <a href="https://ph.pycon.org">🔗</a></li>
                  <li>Oct 25-27: <strong>PyCon APAC</strong> Yogyakarta, Indonesia <a href="https://pycon.id">🔗</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="events-slides-container mt-8">
        <div className="container">
          {slides.map((slide, index) => (
            <div key={`event-slide-${index}`} id={`event-slide-${index}`}>
              <div style={{ display: slide.key === currentSlide ? 'block' : 'none' }} className="slides slide-fade" aria-label="1 / 4">
                <div className="row" data-slide="1">
                  <div className="col-lg-6 col-xs-12">
                    <img src={slide.img} className="slide-img w-full" alt="Slide 1" />
                  </div>
                  <div className="col-lg-6 col-xs-12 mt-3">
                    <div className={`text-white badge bg-${slide.badgeType}`}>
                      {slide.badgeText}
                    </div>
                    <div>&nbsp;</div>
                    <h3 className="text-white">{slide.title}</h3>
                    <br />
                    <div className="medium-text text-white" style={{opacity: '60%'}}>
                      {slide.description}
                    </div>
                    <br />
                    <br />
                    {slide.info.map((i) => (
                      <>
                        <div className="medium-text-bold text-white mb-2">
                          &#x2022; {i}
                        </div>
                        <br />
                      </>
                    ))}
                    <br className="mobile-off" />
                    <br className="mobile-off" />
                    <a href="https://2023-apac.pycon.jp">
                      <button className="button-primary">Learn More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 slide-changer">
            <div className="pagination">
              {slides.map((slide, index) => (
                <span 
                  key={index}
                  onClick={(e) => setCurrentSlide(e, slide.key)} 
                  className={`${slide.key === currentSlide ? 'active' : ''} dot`} 
                  role="button"
                />
              ))} 
            </div>
            <div className="nav-carousels mobile-off">
              <div 
                onClick={() => nextPrevSlide(currentSlide - 1)} 
                title="Previous slide" className="nav-carousel text-center" 
                role="button"
              >
                &#10094;
              </div>
              <div 
                onClick={() => nextPrevSlide(currentSlide + 1)} 
                title="Next slide" 
                className="nav-carousel text-center" 
                role="button"
              >
                &#10095;
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
