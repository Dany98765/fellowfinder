"use client"

import './styles.css';
import { useTranslation } from 'next-i18next';

export default function HeroSection() {
    const { t } = useTranslation('landing/hero');
    return (
        <div className="heroSection">
            <div className="leftSection">
                <h1 className="catchyHeadline">
                    {t('welcome')}
                    <span className="f"> F</span><span className="ello">ello</span><span className="f">F</span><span className="inder">inder</span>
                </h1>
                <br /><br />
                <p className="description">{t('desc')}</p>
                <br /><br />
                <button className="getInTouchButton">{t('getInTouch')}</button>
            </div>
            <div className="rightSection">
                <div className="imgContainer">
                    <img
                        src="/icons/person.png"
                        alt="Person with laptop"
                        className="heroImage"
                    />
                </div>
                
            </div>
        </div>
    );
}
