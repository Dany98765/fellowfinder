import HomePage from "@/components/pages/home/page"

export default async function Home({ searchParams }) {
  const { lang } = await searchParams; // replace with actual dynamic logic
  const direction = lang === 'ar' ? 'rtl' : 'ltr';
  return(
    <div lang={lang} dir={direction}>
      <HomePage lang={lang}/>
    </div>
  )
}