import React from 'react'
// import html from './html.html'
import style from './index.module.scss'
import './script'

// <section data-gjs-type="section-layout" className="confirmBanner">
//   <div data-gjs-type="ctrwow-grid">
//   <div data-gjs-type="ctrwow-col" className="header">
//   <h1>your content here</h1>
// </div>
// </div>
// </section>

console.log(style)

const upsellQualify = '{upsellQualify}'
const upsellPrice = '{upsellPrice}'
const firstName = '{firstName}'
const lastName = '{lastName}'

export default () => (
  <>
    
    <section data-gjs-type="section-layout" className={style.module}>
      <div data-gjs-type="ctrwow-grid">
        <div data-gjs-type="ctrwow-col" className={style.module__content}>
          
          
          {/*INDICATOR - STEPS*/}
          <div className={style.module__indicator}>
            <div className={style.module__indicator__item}>
              <span className="step-number">Step 1: </span>
              <span className="step-text">Create Account</span>
            </div>
            <div className={`${style.module__indicator__item} active`}>
              <span className="step-number">Step 2: </span>
              <span className="step-text">Special Offer</span>
            </div>
            <div className={style.module__indicator__item}>
              <span className="step-number">Step 3: </span>
              <span className="step-text">Order Complete</span>
            </div>
          </div>
          
          {/*WARRANTY INFO*/}
          <div className={style.module__info}>
            <h2><span> Limited Time Offer for Iron-Clad Warranty Protection! </span></h2>
            <p>Emanage your order of <span className="upsellQualify">{upsellQualify}</span> qualifies for a discounted Warranty of <span
              className="upsellPrice">{upsellPrice}</span></p>
          </div>
          
          <div className={style.module__btnUpsellOrder}>
            <button className={style.module__btnUpsellOrder__button}>
              <p className={style.module__btnUpsellOrder__info}>Claim Your Lifetime Protection for ONLY <span
                className="upsellPrice">{upsellPrice}</span></p>
              <p className={style.module__btnUpsellOrder__des}>Clicking here will charge the discounted <span
                className="upsellPrice">{upsellPrice}</span></p>
            </button>
          </div>
          
          
          {/*WARRANTY PROTECTION*/}
          <div className={style.module__protection}>
            <div className={style.module__protection__box}>
              <div className={style.module__protection__body}>
                <div className={style.module__protection__body_1}>
                  <h2>LIFETIME WARRANTY PROTECTION</h2>
                  <p>Get <strong>Lifetime Warranty Protection</strong> for your new PlayBeatz right now! You won’t want ever want to go
                    without
                    the freedom and superior sound quality of truly wireless headphones.</p>
                  <p>PlayBeatz are a precision-engineered, high-quality product that should last for a lifetime.</p>
                  <p>Now you can protect your investment with a lifetime warranty!</p>
                  <p><strong>* Get total peace of mind with no time limit!</strong></p>
                  <p><strong>* If anything goes wrong with your PlayBeatz, we will replace them with a no-quibble, hassle-free
                    warranty!</strong></p>
                  <p><strong>* Get a big discount and insure every pair of PlayBeatz you buy!</strong></p>
                  <p>If you ever have a problem or your device becomes defective, just ship it back to us, and we will rush you a new set
                    quickly by return mail.</p>
                  <p>Never worry again about your wireless earbuds. If you get a new phone or computer, and your PlayBeatz have any problem
                    connecting, we will repair or replace them as soon as you return them to us!</p>
                  <div className={style.module__protection__signbox}>
                    <div className={style.module__protection__signbox__left}>
                      <p className="signature">{firstName} {lastName}</p>
                    </div>
                    <div className={style.module__protection__right}>
                      <img src="https://ctrwow-commonstorage.azureedge.net/public-assets/upsell_mini_img_warranty.png" alt="warranty"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style['module__protection__border--left']}></div>
              <div className={style['module__protection__border--right']}></div>
              <div className={style['module__protection__border--bottom']}></div>
              <div className={style['module__protection__border--top']}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section data-gjs-type="section-layout">
      <div data-gjs-type="ctrwow-grid">
        <div data-gjs-type="ctrwow-col" className={style.module__secure}>
          
          <p>
            <img src="https://ctrwow-commonstorage.azureedge.net/public-assets/upsell__gsc_en.png" alt="gsc_en"/>
          </p>
          <p className={style.module__secure__ssl}>
            <img src="https://ctrwow-commonstorage.azureedge.net/public-assets/security.png" alt="gsc_en"
            /><span>Secure 256-bit SSL encryption</span></p>
          
          <p className={style.module__noThanks}><a>
            <span>No Thanks, I will pay full price for a replacement</span>
          </a></p>
        </div>
      </div>
    </section>
  </>
)

//
// https://ctrwow-commonstorage.azureedge.net/public-assets/security.png