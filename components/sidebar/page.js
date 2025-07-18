import "./styles.css"

export default async function AuthSidebar({ lang }){
    const messages = (await import(`@/public/locales/${lang}/auth/sidebar.json`)).default;
    let marginDirection = lang == 'en' ? 'marginLeft' : 'marginRight'
    return(
        <div className="sidebarContainer" style={{ marginRight: "20px" }}>
            <h3 className="title" style={{ [marginDirection]: "20px" }}>{messages.title}</h3>
        </div>
    )
}