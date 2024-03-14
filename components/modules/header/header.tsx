'use client'
import {useLang} from "@/hooks/useLang";
import Logo from '@/public/img/logo.svg'

interface I {

}

export default function Header({}: I) {
  const {lang, translations} = useLang()
  return (
    <header className='header'>
      <div className="container header__container">
        <button className='btn-reset header__burger'>
          {translations[lang].header.menu_btn}
        </button>
        <div className='header__logo'>
          <Logo/>
        </div>
      </div>
    </header>
  );
};

