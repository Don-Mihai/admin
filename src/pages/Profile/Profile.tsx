import './Profile.css';
import Header from '../../components/Header/Header';
import { memo } from 'react';

export default memo(function Profile() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="user container">
          <div className="user__contaner-left">
            <div className="user__top">
              <div className="user__info-img">
                <img src="./img/img.png" alt="" className="user__img" />
                <div className="user__top-top">
                  <div className="user__name-top">
                    <p className="user__name">John</p>
                    <div className="user__time">
                      <img src="./img/filter.svg" alt="" className="user__time-img" />
                      <p className="user__time-time">168/h</p>
                    </div>
                  </div>
                  <p className="user__dr">12.08.2000 ( 25 y.o )</p>
                  <p className="user__email">john@gmail.com</p>
                  <div className="user__button">
                    <button className="user__resume">Resume</button>
                    <img className="user__button-img" src="./img/care.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="user__bot">
                <div className="user__bot-top">
                  <img className="user__skil-img" src="./img/chevron.svg" alt="" />
                  <h2 className="user__title">Speclalizations</h2>
                </div>
                <div className="user__skil">
                  <p className="user__skils">JavaScript & TypeScript</p>
                  <p className="user__skils">Python & Django</p>
                  <p className="user__skils">React & Vue.js</p>
                  <p className="user__skils">Node.js & Express</p>
                  <p className="user__skils">SQL & MongoDB</p>
                  <p className="user__skils">AWS & Cloud Services</p>
                  <p className="user__skils">Docker & Kubernetes</p>
                </div>
              </div>
              <div className="user__certifications">
                <div className="button__left">
                  <img src="" alt="" className="user_sert" />
                  <button className="user__text">Frontend</button>
                </div>
                <div className="button__right">
                  <img src="" alt="" className="user_sert" />
                  <button className="user__text">Backend</button>
                </div>
              </div>
              <div className="user__general">
                <div className="general__top">
                  <img src="./img/emoji.svg" alt="" className="general__img" />
                  <p className="general__title">General</p>
                </div>
                <div className="general__center">
                  <p className="general__center-title">Finance reawar</p>
                  <div className="general__ceneter-right">
                    <img src="./img/care.svg" alt="" className="general__center-img" />
                    <p className="general__title">$54/h</p>
                  </div>
                </div>
              </div>
              <div className="user__contacts">
                <div className="contacts">
                  <img src="./img/emoji.svg" alt="" className="contacts__img" />
                  <p className="contacts__title">Contacts</p>
                </div>
                <div className="conatacts__container">
                  <p className="conatacts__title">Phone</p>
                  <p className="conatacts__number">+47 285485 545632</p>
                </div>
                <div className="conatacts__container">
                  <p className="conatacts__title">Email</p>
                  <p className="conatacts__number">john@gmail.com</p>
                </div>
                <div className="conatacts__container">
                  <p className="conatacts__title">Adres</p>
                  <p className="adres__number">Flat 5B, 27 King's Road, London, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
          <div className="user__right">
            <div className="calendar">
              <p className="calendar__title">Septumber, 2025</p>
              <div className="calendar__buttons">
                <button className="calendar__button">Week</button>
                <button className="calendar__button-active">Septumber</button>
                <button className="calendar__button">Yearh</button>
              </div>
            </div>
            <div className="calendar">
              <div className="calendar__header">
                <div className="header__day">Mon</div>
                <div className="header__day">Tue</div>
                <div className="header__day">Wed</div>
                <div className="header__day">Thu</div>
                <div className="header__day">Fri</div>
                <div className="header__day">Sat</div>
                <div className="header__day">Sun</div>
              </div>

              <div className="calendar__body">
                <div className="calendar__week">
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">1.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>

                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front day-card-vix">
                        <div className="day__number">2.09</div>
                      </div>
                      <div className="day-card__back day-card-vix">
                        <div className="day__status">Выходной</div>
                        <div className="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">3.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">4.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">5.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">6.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front day-card-vix">
                        <div className="day__number">7.09</div>
                      </div>
                      <div className="day-card__back day-card-vix">
                        <div className="day__status">Выходной</div>
                        <div className="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="calendar__week">
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front day-card-vix">
                        <div className="day__number">8.09</div>
                      </div>
                      <div className="day-card__back day-card-vix">
                        <div className="day__status">Выходной</div>
                        <div className="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">9.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front day-card-vix">
                        <div className="day__number">10.09</div>
                      </div>
                      <div className="day-card__back day-card-vix">
                        <div className="day__status">Выходной</div>
                        <div className="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front day-card-vix">
                        <div className="day__number">11.09</div>
                      </div>
                      <div className="day-card__back day-card-vix">
                        <div className="day__status">Выходной</div>
                        <div className="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">12.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">13.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">14.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="calendar__week">
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">15.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front day-card-vix">
                        <div className="day__number">16.09</div>
                      </div>
                      <div className="day-card__back day-card-vix">
                        <div className="day__status">Выходной</div>
                        <div className="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front day-card-vix">
                        <div className="day__number">17.09</div>
                      </div>
                      <div className="day-card__back day-card-vix">
                        <div className="day__status">Выходной</div>
                        <div className="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">18.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">19.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">20.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front day-card-vix">
                        <div className="day__number">21.09</div>
                      </div>
                      <div className="day-card__back day-card-vix">
                        <div className="day__status">Выходной</div>
                        <div className="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="calendar__week">
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">22.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">23.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">24.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">25.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front day-card-vix">
                        <div className="day__number">26.09</div>
                      </div>
                      <div className="day-card__back day-card-vix">
                        <div className="day__status">Выходной</div>
                        <div className="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front day-card-vix">
                        <div className="day__number">27.09</div>
                      </div>
                      <div className="day-card__back day-card-vix">
                        <div className="day__status">Выходной</div>
                        <div className="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">28.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="calendar__week">
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">29.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day">
                    <div className="day-card">
                      <div className="day-card__front">
                        <div className="day__number">30.09</div>
                      </div>
                      <div className="day-card__back">
                        <div className="day__status">Рабочий</div>
                        <div className="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__day"></div>
                  <div className="calendar__day"></div>
                  <div className="calendar__day"></div>
                  <div className="calendar__day"></div>
                  <div className="calendar__day"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
