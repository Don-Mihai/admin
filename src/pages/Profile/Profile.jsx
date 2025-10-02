import React from 'react';
import styles from './Profile.css';
import Header from '../../components/Header/Header';

export default function Profile() {
  return (
    <div>
      <div class="wrapper">
        <Header />
        <div class="user container">
          <div class="user__contaner-left">
            <div class="user__top">
              <div class="user__info-img">
                <img src="./img/img.png" alt="" class="user__img" />
                <div class="user__top-top">
                  <div class="user__name-top">
                    <p class="user__name">John</p>
                    <div class="user__time">
                      <img src="./img/filter.svg" alt="" class="user__time-img" />
                      <p class="user__time-time">168/h</p>
                    </div>
                  </div>
                  <p class="user__dr">12.08.2000 ( 25 y.o )</p>
                  <p class="user__email">john@gmail.com</p>
                  <div class="user__button">
                    <button class="user__resume">Resume</button>
                    <img class="user__button-img" src="./img/care.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="user__bot">
                <div class="user__bot-top">
                  <img class="user__skil-img" src="./img/chevron.svg" alt="" />
                  <h2 class="user__title">Speclalizations</h2>
                </div>
                <div class="user__skil">
                  <p class="user__skils">JavaScript & TypeScript</p>
                  <p class="user__skils">Python & Django</p>
                  <p class="user__skils">React & Vue.js</p>
                  <p class="user__skils">Node.js & Express</p>
                  <p class="user__skils">SQL & MongoDB</p>
                  <p class="user__skils">AWS & Cloud Services</p>
                  <p class="user__skils">Docker & Kubernetes</p>
                </div>
              </div>
              <div class="user__certifications">
                <div class="button__left">
                  <img src="" alt="" class="user_sert" />
                  <button class="user__text">Frontend</button>
                </div>
                <div class="button__right">
                  <img src="" alt="" class="user_sert" />
                  <button class="user__text">Backend</button>
                </div>
              </div>
              <div class="user__general">
                <div class="general__top">
                  <img src="./img/emoji.svg" alt="" class="general__img" />
                  <p class="general__title">General</p>
                </div>
                <div class="general__center">
                  <p class="general__center-title">Finance reawar</p>
                  <div class="general__ceneter-right">
                    <img src="./img/care.svg" alt="" class="general__center-img" />
                    <p class="general__title">$54/h</p>
                  </div>
                </div>
              </div>
              <div class="user__contacts">
                <div class="contacts">
                  <img src="./img/emoji.svg" alt="" class="contacts__img" />
                  <p class="contacts__title">Contacts</p>
                </div>
                <div class="conatacts__container">
                  <p class="conatacts__title">Phone</p>
                  <p class="conatacts__number">+47 285485 545632</p>
                </div>
                <div class="conatacts__container">
                  <p class="conatacts__title">Email</p>
                  <p class="conatacts__number">john@gmail.com</p>
                </div>
                <div class="conatacts__container">
                  <p class="conatacts__title">Adres</p>
                  <p class="adres__number">Flat 5B, 27 King's Road, London, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
          <div class="user__right">
            <div class="calendar">
              <p class="calendar__title">Septumber, 2025</p>
              <div class="calendar__buttons">
                <button class="calendar__button">Week</button>
                <button class="calendar__button-active">Septumber</button>
                <button class="calendar__button">Yearh</button>
              </div>
            </div>
            <div class="calendar">
              <div class="calendar__header">
                <div class="header__day">Mon</div>
                <div class="header__day">Tue</div>
                <div class="header__day">Wed</div>
                <div class="header__day">Thu</div>
                <div class="header__day">Fri</div>
                <div class="header__day">Sat</div>
                <div class="header__day">Sun</div>
              </div>

              <div class="calendar__body">
                <div class="calendar__week">
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">1.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>

                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front day-card-vix">
                        <div class="day__number">2.09</div>
                      </div>
                      <div class="day-card__back day-card-vix">
                        <div class="day__status">Выходной</div>
                        <div class="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">3.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">4.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">5.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">6.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front day-card-vix">
                        <div class="day__number">7.09</div>
                      </div>
                      <div class="day-card__back day-card-vix">
                        <div class="day__status">Выходной</div>
                        <div class="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="calendar__week">
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front day-card-vix">
                        <div class="day__number">8.09</div>
                      </div>
                      <div class="day-card__back day-card-vix">
                        <div class="day__status">Выходной</div>
                        <div class="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">9.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front day-card-vix">
                        <div class="day__number">10.09</div>
                      </div>
                      <div class="day-card__back day-card-vix">
                        <div class="day__status">Выходной</div>
                        <div class="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front day-card-vix">
                        <div class="day__number">11.09</div>
                      </div>
                      <div class="day-card__back day-card-vix">
                        <div class="day__status">Выходной</div>
                        <div class="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">12.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">13.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">14.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="calendar__week">
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">15.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front day-card-vix">
                        <div class="day__number">16.09</div>
                      </div>
                      <div class="day-card__back day-card-vix">
                        <div class="day__status">Выходной</div>
                        <div class="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front day-card-vix">
                        <div class="day__number">17.09</div>
                      </div>
                      <div class="day-card__back day-card-vix">
                        <div class="day__status">Выходной</div>
                        <div class="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">18.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">19.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">20.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front day-card-vix">
                        <div class="day__number">21.09</div>
                      </div>
                      <div class="day-card__back day-card-vix">
                        <div class="day__status">Выходной</div>
                        <div class="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="calendar__week">
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">22.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">23.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">24.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">25.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front day-card-vix">
                        <div class="day__number">26.09</div>
                      </div>
                      <div class="day-card__back day-card-vix">
                        <div class="day__status">Выходной</div>
                        <div class="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front day-card-vix">
                        <div class="day__number">27.09</div>
                      </div>
                      <div class="day-card__back day-card-vix">
                        <div class="day__status">Выходной</div>
                        <div class="day__comment">Чил</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">28.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="calendar__week">
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">29.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day">
                    <div class="day-card">
                      <div class="day-card__front">
                        <div class="day__number">30.09</div>
                      </div>
                      <div class="day-card__back">
                        <div class="day__status">Рабочий</div>
                        <div class="day__hours">8 часов</div>
                      </div>
                    </div>
                  </div>
                  <div class="calendar__day"></div>
                  <div class="calendar__day"></div>
                  <div class="calendar__day"></div>
                  <div class="calendar__day"></div>
                  <div class="calendar__day"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
