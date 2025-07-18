// /app/page.js
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/en'); // or whatever your default locale is
}