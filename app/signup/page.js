import Signup from "@/components/pages/auth/signup/page";
import AuthSidebar from "@/components/sidebar/page";
import { markAssetError } from "next/dist/client/route-loader";


export default async function SignupPage({ searchParams }){
    // const searchParam = await searchParams
    //const lang = await searchParams.lang || 'en' // replace with actual dynamic logic
    const lang = await searchParams?.lang 
    const locale = lang || 'en' // replace with actual dynamic logic
    const direction = await lang === 'ar' ? 'rtl' : 'ltr';
    const messages = (await import(`@/locales/${locale}/auth/sidebar.json`)).default;
    let marginDirection = lang == 'en' ? 'marginLeft' : 'marginRight'
    console.log(JSON.stringify(messages.title) + "???????????????")
    return(
        <div lang={lang} dir={direction} className="sidebarContainer" style={{ [marginDirection]: "20px" }}>
            {/* <Signup lang={lang}/> */}
            <h3 className="title" style={{ [marginDirection]: "20px" }}>{messages.title}</h3>
            <h1>Language: {lang}</h1>
        </div>
    )
}