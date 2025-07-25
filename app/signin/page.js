import Signin from "@/components/pages/auth/signin/page";

export default async function SignupPage({ searchParams }){
    const { lang } = await searchParams
    const direction = await lang === 'ar' ? 'rtl' : 'ltr';
    return(
        <div lang={lang} dir={direction}>
            <Signin lang={lang}/> 
        </div>
    )
}