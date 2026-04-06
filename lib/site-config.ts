/**
 * Editá estos valores con los datos reales del casamiento.
 */
export const siteConfig = {
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe_PeMYbMnRY4erhdGFHYnTXennbzfPJIbSjGeTrapmZdPB_Q/viewform?usp=publish-editor",
  giftRegistryUrl:
    "https://noiraf.mitiendanube.com/lista-de-casamiento/faustina-mateo/",
  bank: {
    cvu: "0000069700000000907530",
    alias: "bando.riego.dolarapp",
    beneficiario: "Mateo Rey Nores",
  },
  ceremony: {
    title: "Ceremonia",
    time: "14:30 hs",
    location: "Convento San Alfonso — Av. San Alfonso esq. San Clemente 1900, Villa Allende, Córdoba",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Convento+San+Alfonso%2C+San+Clemente+1900%2C+Villa+Allende%2C+C%C3%B3rdoba%2C+Argentina",
    imageSrc: "/images/iglesia.png",
    imageLabel: "Convento San Alfonso",
  },
  reception: {
    title: "Recepción",
    time: "16:15 hs",
    location: "La Angelina — Unquillo, Córdoba",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=La+Angelina%2C+Rep%C3%BAblica+de+Israel+70%2C+Unquillo%2C+C%C3%B3rdoba%2C+Argentina",
    imageSrc: "/images/salon.png",
    imageLabel: "Salón La Angelina",
  },
  afterDinner: {
    title: "Después de cena",
    time: "20:30 hs",
    location: "La Angelina — Unquillo, Córdoba",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=La+Angelina%2C+Rep%C3%BAblica+de+Israel+70%2C+Unquillo%2C+C%C3%B3rdoba%2C+Argentina",
    imageSrc: "/images/salon.png",
    imageLabel: "Salón La Angelina",
  },
} as const;
