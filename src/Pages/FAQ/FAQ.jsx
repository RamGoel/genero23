import React from 'react'
import './FAQ.css'
function FAQ() {
    return (
        <div id="queries" className='faq-for-bg d-flex justify-content-center align-items-center fullHeight '>
            <div className="col-lg-7 col-10 mx-auto">

                <h1>Frequently asked Questions</h1>

                <div className=''>

                    <div className="faq-drawer">
                        <input className="faq-drawer__trigger" id="faq-drawer" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer">What is the theme of Genero 2023?</label>
                        <div className="faq-drawer__content-wrapper">
                            <div className="faq-drawer__content">
                                <p>
                                    The theme of genero'23 is India's Hidden Hues. It represents different cultures, traditions and people of india.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="faq-drawer">
                        <input className="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-2">Can students from other colleges also participate in Genero'23?</label>
                        <div className="faq-drawer__content-wrapper">
                            <div className="faq-drawer__content">
                                <p>
                                    Yes, students from other colleges can also participate in genero'23.  </p>
                            </div>
                        </div>
                    </div>

                    <div className="faq-drawer">
                        <input className="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-3">What is the date and location of the college fest?
                        </label>
                        <div className="faq-drawer__content-wrapper">
                            <div className="faq-drawer__content">
                                <p>
                                    The location of the college fest is ABES Engineering college campus, and the dates for Genero'23 is on 12th and 13th of May 2023. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div></div>
    )
}

export default FAQ