import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './Index.scss'
import axios from 'axios'

function Index() {
    let [services, setServices] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/api/services").then((res)=>{setServices(res.data)})
    },[])

    console.log(services);
  return (
    <>
      <section className="growBusinessSection">
        <div className="growBusinessSection__container">
          <div className="growBusinessSection__container__header">
            <span className="line"></span>
            <span>COMMITED TO SUCCESS</span>
          </div>

          <h1>We help to grow your business</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            obcaecati ut ducimus totam magnam nisi?
          </p>
          <button>OUR SERVICES</button>
        </div>
      </section>

      <section className="bestServices">
        <div className="bestServices__container">
          <div className="bestServices__container__header">
            <span className="line"></span>
            <span>OUR TOP SERVICES</span>
          </div>
          <h2>Our Best Services</h2>

          <div className="bestServices__container__cards">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="bestServices__container__cards__card"
                >
                  <img src={`${service.img}`} alt="" />
                  <h4>{service.name}</h4>
                  <p>{service.description}</p>
                  <p className="price">
                    {"$"} {service.price}
                  </p>
                  <div className="cardBtns">
                    <button>Details</button>
                    <button>Delete</button>
                    <button>Add to WishList</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="OurBestServices">
        <div className="OurBestServices__container">
          <div className="left">
            <img
              src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png.webp"
              alt=""
            />
          </div>
          <div className="right">
            <div className="right__header">
              <span className="line"></span>
              <span>OUR TOP SERVICES</span>
            </div>
            <h2>Our Best Services</h2>
            <p className="first">
              Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess
              cillum dolore egru lofrre dsu quality mollit anim laborumuis au
              dolor in voluptate velit cillu.
            </p>
            <p className="last">
              Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re
              voluptate velit esscillumlore eu quife nrulla parihatur.
              Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
              dhjinulpadeserunt moll.
            </p>
            <button>MORE ABOUT US</button>
          </div>
        </div>
      </section>

      <section className="CaseStudy">
        <div className="CaseStudy__container">
          <div className="CaseStudy__container__header">
            <span className="line"></span>
            <span>OUR PORTFOLIOS OF CASES</span>
          </div>
          <h1>Featured Case Study</h1>
          <div className="CaseStudy__container__cards">
            <div className="CaseStudy__container__cards__card">
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services1.png.webp"
                alt=""
              />
              <div className="CaseStudy__container__cards__card__footer">
                <div className="CaseStudy__container__cards__card__footer__title">
                  <span className="line"></span>
                  <span>Strategy planing</span>
                </div>
                <div className="CaseStudy__container__cards__card__footer__text">
                  Within the construction industry as their overdraft
                </div>
              </div>
            </div>
            <div className="CaseStudy__container__cards__card">
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services1.png.webp"
                alt=""
              />
              <div className="CaseStudy__container__cards__card__footer">
                <div className="CaseStudy__container__cards__card__footer__title">
                  <span className="line"></span>
                  <span>Strategy planing</span>
                </div>
                <div className="CaseStudy__container__cards__card__footer__text">
                  Within the construction industry as their overdraft
                </div>
              </div>
            </div>
            <div className="CaseStudy__container__cards__card">
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services1.png.webp"
                alt=""
              />
              <div className="CaseStudy__container__cards__card__footer">
                <div className="CaseStudy__container__cards__card__footer__title">
                  <span className="line"></span>
                  <span>Strategy planing</span>
                </div>
                <div className="CaseStudy__container__cards__card__footer__text">
                  Within the construction industry as their overdraft
                </div>
              </div>
            </div>
            <div className="CaseStudy__container__cards__card">
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services1.png.webp"
                alt=""
              />
              <div className="CaseStudy__container__cards__card__footer">
                <div className="CaseStudy__container__cards__card__footer__title">
                  <span className="line"></span>
                  <span>Strategy planing</span>
                </div>
                <div className="CaseStudy__container__cards__card__footer__text">
                  Within the construction industry as their overdraft
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="TeamMembers">
        <div className="TeamMembers__container">
          <div className="TeamMembers__container__header">
            <span className="line"></span>
            <span>OUR PROFESSIONAL MEMBERS</span>
          </div>
          <h2>Our Team Members</h2>
          <div className="TeamMembers__container__cards">
            <div className="TeamMembers__container__cards__card">
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png"
                alt=""
              />
              <h5>Ethan Welch</h5>
              <div className="TeamMembers__container__cards__card__footer">
                <span className="line"></span>
                <p>UX Designer</p>
              </div>
            </div>
            <div className="TeamMembers__container__cards__card">
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png"
                alt=""
              />
              <h5>Ethan Welch</h5>
              <div className="TeamMembers__container__cards__card__footer">
                <span className="line"></span>
                <p>UX Designer</p>
              </div>
            </div>
            <div className="TeamMembers__container__cards__card">
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png"
                alt=""
              />
              <h5>Ethan Welch</h5>
              <div className="TeamMembers__container__cards__card__footer">
                <span className="line"></span>
                <p>UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index