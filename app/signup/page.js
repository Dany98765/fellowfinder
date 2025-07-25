import Signup from "@/components/pages/auth/signup/page";

export default async function SignupPage({ searchParams }){
    const { lang } = await searchParams
    const direction = await lang === 'ar' ? 'rtl' : 'ltr';
    return(
        <div lang={lang} dir={direction}>
            <Signup lang={lang}/> 
        </div>
    )
}