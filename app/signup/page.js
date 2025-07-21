import Signup from "@/components/pages/auth/signup/page";

export default async function SignupPage({ searchParams }){
    // const searchParam = await searchParams
    //const lang = await searchParams.lang || 'en' // replace with actual dynamic logic
    const lang = await searchParams?.lang 
    const direction = await lang === 'ar' ? 'rtl' : 'ltr';
    return(
        <div lang={lang} dir={direction}>
            <Signup lang={lang}/> 
        </div>
    )
}