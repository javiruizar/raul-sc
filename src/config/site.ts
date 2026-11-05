const SITE_URL = "https://raul.javierruiz.org";

// Único origen de los datos del negocio: nombre, contacto, horario y zona.
export const siteConfig = {
  name: "Raul Sanchez Albañileria y reformas",
  // Marca corta para los títulos de página: el nombre completo no cabe en 60 caracteres.
  shortName: "Raúl Sánchez",
  url: SITE_URL,
  // @id del negocio en el JSON-LD. Los demás schemas lo referencian sin repetir sus datos.
  businessId: `${SITE_URL}/#localbusiness`,
  contact: {
    email: "javiruizar@gmail.com",
    // Teléfono para visualización (con espacios)
    phoneDisplay: "617 847 211",
    // Teléfono para los enlaces (sin espacios y con prefijo)
    phoneLink: "+34617847211",
    // Teléfono numérico simple sin espacios
    phoneSimple: "617847211",
  },
  address: {
    city: "Pozoblanco",
    province: "Córdoba",
    postalCode: "14400",
    country: "ES",
  },
  geo: {
    latitude: 38.378,
    longitude: -4.8486,
  },
  // `display` se muestra en la web; el resto alimenta el JSON-LD.
  hours: [
    {
      display: "Lun - Vie: 8:00 - 18:00",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  serviceAreas: [
    "Pozoblanco",
    "Villanueva de Córdoba",
    "Hinojosa del Duque",
    "Alcaracejos",
    "Añora",
    "Dos Torres",
    "Pedroche",
    "El Viso",
    "Villaralto",
    "Belalcázar",
    "Cardeña",
    "Santa Eufemia",
    "Torrecampo",
    "Fuente la Lancha",
    "El Guijo",
    "Conquista",
    "Villanueva del Duque",
  ],
  socials: {
    whatsapp: "https://wa.me/34617847211",
    googleBusiness: "https://www.google.com/maps/place/Raul+Sanchez+Alba%C3%B1ileria+y+reformas/@38.26024,-4.9807952,11z/data=!3m1!4b1!4m6!3m5!1s0x8820185314663cfd:0x189251b97fe8f874!8m2!3d38.2600856!4d-4.8159885!16s%2Fg%2F11nvt3w230",
  },
};
