import "server-only"

type Dictionary = Record<string, () => Promise<Record<string, string>>>

const dictionaries: Dictionary = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => dictionaries[locale]()
