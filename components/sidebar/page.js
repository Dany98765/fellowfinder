import "./styles.css"

export default async function AuthSidebar({ lang }){
    let locale = lang || 'en'
    const messages = (await import(`@/public/locales/${locale}/auth/sidebar.json`)).default;
    let marginDirection = lang == 'en' ? 'marginLeft' : 'marginRight'
    console.log(JSON.stringify(messages.title) + "???????????????")
    console.log(lang + "THIS IS LANGUAGE!!!!")
    return(
        <div className="sidebarContainer" style={{ marginRight: "20px" }}>
            <h3 className="title" style={{ [marginDirection]: "20px" }}>{messages.title}</h3>
        </div>
    )
}