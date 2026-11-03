/** Préfixe un chemin de /public avec l'adresse de base du site (utile pour GitHub Pages : /meyra/). */
export const asset = (path: string) => {
  if (/^(https?:)?\/\//.test(path)) return path
  return import.meta.env.BASE_URL.replace(/\/$/, '') + (path.startsWith('/') ? path : `/${path}`)
}
