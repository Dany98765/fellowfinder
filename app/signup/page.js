import Signup from "@/components/pages/auth/signup/page";
import AuthSidebar from "@/components/sidebar/page";


export default async function SignupPage({ searchParams }){
    // const searchParam = await searchParams
    //const lang = await searchParams.lang || 'en' // replace with actual dynamic logic
    //const { lang } = await searchParams
    const lang = await searchParams.lang; // replace with actual dynamic logic
    const direction = await lang === 'ar' ? 'rtl' : 'ltr';
    return(
        <div lang={lang} dir={direction}>
            <Signup lang={lang}/>
        </div>
    )
}