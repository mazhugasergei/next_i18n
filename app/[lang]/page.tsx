import Link from "next/link"
import { getDictionary } from "./dictionaries"

export default async function Page({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">{dict["It's working"]}</h1>

      <div className="grid grid-cols-2 bg-[#ffffff20] rounded-full">
        <Link
          href="/en"
          className={`px-4 py-2 flex items-center justify-center text-sm font-bold rounded-full ${
            lang === "en" ? "bg-foreground text-background" : "pr-3"
          }`}
        >
          English
        </Link>
        <Link
          href="/ru"
          className={`px-4 py-2 flex items-center justify-center text-sm font-bold rounded-full ${
            lang === "ru" ? "bg-foreground text-background" : "pl-3"
          }`}
        >
          Russian
        </Link>
      </div>

      <div>
        {dict["View code here"]}:{" "}
        <Link target="_blank" href="https://github.com/mazhugasergei/next_i18n" className="underline text-blue-500">
          https://github.com/mazhugasergei/next_i18n
        </Link>
      </div>
    </div>
  )
}
