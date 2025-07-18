import Signup from "@/components/pages/auth/signup/page";
import AuthSidebar from "@/components/sidebar/page";

export const dynamic = 'force-dynamic';

export default async function SignupPage({ searchParams }){
    // const searchParam = await searchParams
    // const lang = await searchParam.lang; // replace with actual dynamic logic
    const { lang } = await searchParams
    const direction = await lang === 'ar' ? 'rtl' : 'ltr';
    return(
        <div lang={lang} dir={direction}>
            <Signup lang={lang}/>
            <AuthSidebar />
        </div>
    )
}