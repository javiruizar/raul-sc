import type { Faq } from "@/components/shared/FaqAccordion";

export interface ServiceContentData {
  // Títulos con el servicio y el lugar: cada página tiene los suyos.
  worksHeading: string;
  intro: string[];
  works: string[];
  notWorks: string[];
  timingHeading: string;
  timingParagraphs?: string[];
  timingItems?: { work: string; duration: string }[];
  timingNote?: string;
  projectsText: string;
  projectLink?: { href: string; label: string };
  faqs: Faq[];
}

export const serviceContent: Record<string, ServiceContentData> = {
  "reformas-integrales": {
    worksHeading: "Qué hacemos en una reforma integral en Pozoblanco",
    intro: [
      "Hacemos reformas integrales de viviendas, casas de pueblo y pisos en Pozoblanco, Villanueva de Córdoba y el resto de Los Pedroches: redistribución, suelos, paredes, techos, baños y cocina.",
      "Antes de empezar acordamos contigo la forma de trabajar. Puede ser a presupuesto, con cada partida detallada, o por horas, con una estimación de tiempos y de cuántos profesionales estaremos en la obra.",
    ],
    works: [
      "Demolición de tabiques, falsos techos y solerías antiguas, con retirada de escombros.",
      "Redistribución de espacios: unir cocina y salón, ganar un baño, ampliar dormitorios o abrir pasos.",
      "Apertura de huecos en muros de carga con cargadero y apeo provisional y, si hace falta cálculo, con técnico.",
      "Tabiquería nueva de ladrillo.",
      "Soleras nuevas, recrecidos y nivelación de suelos.",
      "Solado con porcelánico, gres, tarima o baldosa hidráulica.",
      "Enfoscados, enlucidos de yeso y alisado de paredes.",
      "Ayudas de albañilería a instaladores: rozas, pasos, recibido de cajas y tapado.",
    ],
    notWorks: [
      "Instalación eléctrica y boletín: los hace un electricista autorizado.",
      "Instalación de gas: la hace un instalador autorizado.",
      "Proyectos y cálculos de estructura: los firma un arquitecto o arquitecto técnico cuando la obra lo requiere.",
      "Retirada de tejados o bajantes de uralita con amianto: solo empresas inscritas en el registro de amianto (RERA).",
      "Fabricación de muebles de cocina y carpintería a medida.",
    ],
    timingHeading: "¿Cuánto dura una reforma integral?",
    timingParagraphs: [
      "Cada reforma integral es distinta. El plazo depende del tamaño de la vivienda, de su estado, de si hay que tocar estructura, tejado o instalaciones, y de los acabados que elijas. No es lo mismo renovar un piso en buen estado que rehabilitar una casa de pueblo con muros de piedra y vigas de madera.",
      "Por eso no damos plazos a ciegas. Primero visitamos la vivienda y estudiamos contigo qué quieres conseguir. Con eso claro, te damos un calendario por fases (demolición, instalaciones, albañilería y acabados) que va incluido en el presupuesto.",
      "Como referencia, una reforma integral de una vivienda de tamaño medio suele llevar entre cuatro y cinco meses de obra. A eso hay que sumar el tiempo de los permisos y de algunos pedidos de material, como la cocina o las ventanas.",
    ],
    projectsText:
      "Hemos hecho reformas integrales de viviendas en Pozoblanco y en otros pueblos de Los Pedroches, como la casa de bóvedas que puedes ver en nuestros proyectos. Si quieres ver el resultado de primera mano, podemos enseñarte obras terminadas que ya están usando sus propietarios.",
    projectLink: {
      href: "/proyectos/reforma-casa-rural-1",
      label: "Ver la casa de bóvedas de Pozoblanco",
    },
    faqs: [
      {
        question: "¿Puedo vivir en casa durante la reforma integral?",
        answer:
          "Normalmente no es recomendable: hay polvo y ruido, y durante días no hay agua o luz. Si es una casa grande, a veces se puede reformar por zonas.",
      },
      {
        question: "¿Se puede tirar cualquier pared?",
        answer:
          "Los tabiques, sí. Un muro de carga también se puede abrir, pero con viga y apeo y, si la obra lo requiere, con técnico.",
      },
      {
        question: "¿Quién se encarga del fontanero y del electricista?",
        answer:
          "Coordinamos a todos los oficios para que tengas un solo interlocutor, y colaboramos con profesionales de confianza si no conoces a ninguno. Si prefieres a los tuyos, también trabajamos con ellos: en ese caso tú llevas la gestión con ellos y nosotros nos coordinamos para que la obra avance.",
      },
      {
        question: "¿Qué pasa si aparece algo imprevisto al abrir?",
        answer:
          "En casas antiguas puede pasar: vigas dañadas o humedades ocultas. Te lo enseñamos y te explicamos las opciones y el coste antes de hacer nada.",
      },
    ],
  },

  "restauracion-casas-antiguas": {
    worksHeading: "Qué hacemos al restaurar una casa antigua en Los Pedroches",
    intro: [
      "Rehabilitamos casas tradicionales de Pozoblanco y Los Pedroches respetando su carácter: muros de piedra, vigas de madera, tejado de teja árabe y portadas de granito. Empezamos siempre por un diagnóstico de humedades, grietas, vigas y tejado.",
    ],
    works: [
      "Tratamiento de humedades por capilaridad: picado de enlucidos de cemento y morteros transpirables de cal.",
      "Soleras nuevas para cortar la humedad del suelo.",
      "Reparación de grietas y cosido de muros con grapas o varillas.",
      "Sustitución o refuerzo de vigas y forjados de madera, conservando las vigas vistas cuando es posible.",
      "Consolidación de muros de mampostería de granito con mortero de cal.",
      "Recuperación de dinteles y jambas de granito, suelos de barro, baldosa hidráulica y teja antigua.",
      "Encalado tradicional de fachadas e interiores.",
      "Adaptación a las necesidades actuales: baños, cocina, aislamiento e instalaciones nuevas.",
    ],
    notWorks: [
      "Proyectos con cambios estructurales importantes o en edificios protegidos: requieren arquitecto. Trabajamos con el técnico que elijas o te recomendamos uno.",
      "Restauración artística: pinturas murales, yeserías decorativas o carpintería histórica.",
      "Retirada de amianto: la hace una empresa inscrita en el RERA.",
    ],
    timingHeading: "¿Cuánto se tarda en restaurar una casa antigua?",
    timingParagraphs: [
      "En una casa antigua, el estado real no se conoce del todo hasta que se empieza a trabajar. Debajo de un enlucido puede aparecer una grieta, una viga puede estar más dañada de lo que parecía o la humedad puede venir de donde nadie esperaba.",
      "Antes de hablar de plazos, visitamos la casa con calma y vemos contigo qué quieres recuperar y qué quieres cambiar. Con eso preparamos sin coste un calendario orientativo por fases: primero lo que protege la casa (tejado, estructura y humedades) y después la distribución, las instalaciones y los acabados.",
      "Como referencia, una restauración completa suele llevar entre seis meses y un año, y menos si el tejado y la estructura están en buen estado. Los morteros de cal y los muros que han tenido humedad necesitan su tiempo de secado, y ese tiempo no conviene acortarlo.",
    ],
    projectsText:
      "Hemos restaurado casas tradicionales en la comarca, como la casa señorial que puedes ver en nuestros proyectos. Si quieres, podemos enseñarte casas restauradas que ya están habitadas, para que veas cómo envejece el trabajo.",
    projectLink: {
      href: "/proyectos/reforma-casa-rural-1",
      label: "Ver la restauración de la casa señorial",
    },
    faqs: [
      {
        question: "¿Merece la pena restaurar o es mejor derribar y hacer nueva?",
        answer:
          "Depende del estado de los muros y de la estructura. Muchas veces los muros de piedra están sanos, y restaurar sale mejor y conserva el encanto. Lo valoramos en la visita.",
      },
      {
        question: "¿Se pueden quitar las humedades de una casa antigua?",
        answer:
          "Sí, pero hay que encontrar el origen (suelo, tejado, canalones o enlucidos de cemento) y tratarlo. Pintar encima no sirve.",
      },
      {
        question: "¿Se pueden conservar las vigas de madera y la piedra?",
        answer:
          "En muchos casos, sí. Si una viga está dañada, se refuerza o se sustituye por otra de madera con el mismo aspecto.",
      },
      {
        question: "¿Necesito arquitecto para restaurar mi casa?",
        answer:
          "Si se toca la estructura, se cambia la fachada o la casa está protegida, normalmente sí. Para trabajos menores no suele hacer falta.",
      },
    ],
  },

  "albanileria-general": {
    worksHeading: "Trabajos de albañilería que hacemos en Pozoblanco",
    intro: [
      "Hacemos trabajos de albañilería de todos los tamaños en Pozoblanco, Villanueva de Córdoba y los pueblos de alrededor, desde un tabique o un arreglo puntual hasta un patio completo.",
      "Puedes contratarnos a presupuesto o por horas, según te convenga. Lo acordamos antes de empezar, y la visita para ver el trabajo es gratuita.",
    ],
    works: [
      "Levantar y derribar tabiques.",
      "Abrir y cerrar huecos de puertas y ventanas, con cargadero.",
      "Soleras de hormigón, recrecidos y nivelación.",
      "Solados y alicatados.",
      "Enfoscados, enlucidos de yeso y reparación de paredes.",
      "Muros de cerramiento de parcelas y patios, de bloque o ladrillo.",
      "Arreglo de grietas, desconchones y humedades puntuales.",
      "Rampas y eliminación de escalones para mejorar la accesibilidad.",
      "Barbacoas, chimeneas y pequeñas construcciones auxiliares, como trasteros y porches.",
      "Arquetas, saneamiento y desagües de patio.",
      "Colocación de ventanas y puertas, con recibido de premarcos.",
      "Ayudas de albañilería a otros oficios.",
      "Pequeñas reparaciones y mantenimiento.",
      "Trabajos en altura con andamio o elevadores convencionales.",
    ],
    notWorks: [
      "Instalaciones eléctricas o de gas: las hacen instaladores autorizados.",
      "Trabajos que requieran grúa torre o maquinaria pesada de obra civil.",
    ],
    timingHeading: "¿Cuánto tarda un trabajo de albañilería?",
    timingItems: [
      { work: "Tabique nuevo con sus acabados", duration: "1-3 días, más el secado del yeso antes de pintar" },
      { work: "Abrir un hueco con cargadero y remates", duration: "2-5 días" },
      { work: "Solería de una habitación o patio de 25-30 m²", duration: "1 semana" },
      { work: "Muro de cerramiento de 15-20 metros lineales", duration: "2-3 semanas" },
      { work: "Pequeñas reparaciones", duration: "1-2 días" },
    ],
    timingNote:
      "Son plazos orientativos desde que empieza el trabajo hasta que termina, contando esperas habituales como el secado o la entrega de materiales. El plazo concreto te lo damos al ver tu caso.",
    projectsText:
      "Hemos hecho trabajos de albañilería de todos los tamaños en Pozoblanco y alrededores, como el patio completo que tenemos en nuestros proyectos. Si te ayuda a decidir, podemos enseñarte trabajos terminados.",
    projectLink: {
      href: "/proyectos/reforma-patio",
      label: "Ver la reforma de patio",
    },
    faqs: [
      {
        question: "¿Hacéis trabajos pequeños?",
        answer: "Sí, también arreglos y reparaciones puntuales.",
      },
      {
        question: "¿Se puede alicatar encima del azulejo viejo?",
        answer:
          "Si está firme, sí, con el cemento cola adecuado. Pero se pierde espacio y a veces conviene picar. Te lo decimos al verlo.",
      },
      {
        question: "¿Cuánto tarda en secar una solera o un enlucido antes de pintar o solar?",
        answer:
          "Depende del material y del tiempo que haga. Una solera necesita días antes de poder cargarla, y más antes de solar encima. Te damos los tiempos en cada caso.",
      },
    ],
  },

  "reformas-banos-cocinas": {
    worksHeading: "Cómo reformamos baños y cocinas en Pozoblanco",
    intro: [
      "Hacemos la reforma completa de baños y cocinas en Pozoblanco y en los pueblos de Los Pedroches: quitamos alicatados, solerías y sanitarios antiguos, retiramos el escombro y hacemos la obra nueva, coordinando al fontanero, al electricista y al resto de profesionales.",
    ],
    works: [
      "Redistribución: cambiar de sitio el baño o la cocina, abrir la cocina al salón, hacer sitio para una isla o ganar un baño nuevo.",
      "Rozas, pasos y huecos para las instalaciones, y tapado y remate cuando terminan.",
      "Impermeabilización de suelos y paredes en zonas de agua.",
      "Alicatado y solado con porcelánico, gres u otros revestimientos.",
      "Cambio de bañera por plato de ducha, de obra o de resina, a ras de suelo, y duchas de obra.",
      "Adaptación para personas mayores o con movilidad reducida: ducha sin escalón, suelo antideslizante y refuerzos para barras de apoyo.",
      "Huecos y pasos para la ventilación y la salida de humos de la campana.",
      "Paredes a plomo y suelos nivelados para montar los muebles.",
      "Coordinación con la tienda de muebles para el montaje de la cocina y la encimera.",
    ],
    notWorks: [
      "Fontanería: las tuberías de agua y desagüe, y su conexión a sanitarios, grifería y electrodomésticos, las hace el fontanero. Nosotros dejamos preparados los huecos y, cuando termina, lo tapamos y rematamos.",
      "Instalación eléctrica, iluminación y certificados: las hace un electricista autorizado.",
      "Instalación de gas: la hace un instalador autorizado.",
      "Fabricación de muebles de cocina y encimeras a medida: la hace una tienda especializada.",
    ],
    timingHeading: "¿Cuánto dura la reforma de un baño o una cocina?",
    timingItems: [
      { work: "Baño completo de tamaño medio, con fontanería, electricidad y sanitarios", duration: "1-4 semanas, según cuánto cambie la distribución" },
      { work: "Cambio de bañera por plato de ducha", duration: "2-4 días" },
      { work: "Obra de una cocina", duration: "3-5 semanas" },
    ],
    timingNote:
      "Los muebles de cocina se encargan antes: el fabricante suele tardar 4-8 semanas y conviene coordinarlo con el final de la obra. El plazo concreto va en el presupuesto, una vez visto tu caso.",
    projectsText:
      "Hemos reformado baños y cocinas en Pozoblanco y en otros pueblos de la comarca. Si quieres hacerte una idea de acabados y calidades, podemos enseñarte baños y cocinas terminados que ya están usando sus propietarios.",
    faqs: [
      {
        question: "¿Cuánto tiempo estaré sin baño?",
        answer:
          "En un baño completo, lo que dura la obra, en torno a dos semanas. Si es el único de la casa, lo organizamos para que el tiempo sin servicio sea el mínimo.",
      },
      {
        question: "¿Se puede cambiar la bañera por un plato de ducha sin reformar todo el baño?",
        answer:
          "Sí. Se repone el alicatado de la zona con piezas parecidas o se combina con otro material.",
      },
      {
        question: "¿Puedo comprar yo los azulejos y sanitarios?",
        answer:
          "Sí. Te ayudamos a calcular cantidades y te avisamos de lo que conviene tener en obra antes de empezar.",
      },
      {
        question: "¿Se puede mover la cocina o el baño de sitio?",
        answer:
          "Normalmente, sí. Hay que estudiar los desagües y la pendiente hasta la bajante.",
      },
    ],
  },

  "fachadas-tejados": {
    worksHeading: "Qué hacemos en fachadas y tejados en Pozoblanco",
    intro: [
      "Reparamos y renovamos tejados y fachadas en Pozoblanco, Villanueva de Córdoba y los pueblos de alrededor, desde una gotera puntual hasta un retejado completo, recuperando la teja antigua cuando es posible.",
    ],
    works: [
      "Retejado completo: retirada de teja, impermeabilización, placa bajo teja y recolocación.",
      "Reparación de goteras y de tejas rotas o desplazadas.",
      "Sustitución o refuerzo de la estructura del tejado: vigas y tablero.",
      "Aislamiento térmico del tejado, aprovechando el retejado.",
      "Impermeabilización de terrazas, azoteas y canales.",
      "Reparación y reconstrucción de hastiales, aleros, cornisas y balcones.",
      "Reparación de grietas y desconchones en fachadas.",
      "Enfoscado y pintura, o encalado tradicional.",
      "Zócalos de piedra, piedra artificial o mortero.",
      "Rejuntado y limpieza de fachadas de piedra.",
      "Tratamiento de humedades en fachadas y muros.",
    ],
    notWorks: [
      "Retirada de tejados de uralita con amianto: la hace una empresa inscrita en el RERA. Una vez retirada, sí podemos hacer el tejado nuevo.",
      "Trabajos verticales con cuerdas en edificios de varias plantas.",
    ],
    timingHeading: "¿Cuánto se tarda en arreglar un tejado o una fachada?",
    timingItems: [
      { work: "Reparación de goteras puntuales", duration: "1-3 días" },
      { work: "Retejado de 80-100 m² sin cambiar la estructura", duration: "2-4 semanas" },
      { work: "Retejado de 80-100 m² reparando la estructura existente", duration: "3-5 semanas" },
      { work: "Tejado con estructura nueva", duration: "1-2 meses" },
      { work: "Fachada de una casa de dos plantas, con reparación y pintura o encalado", duration: "2-3 semanas" },
    ],
    timingNote:
      "Estos trabajos dependen del tiempo: con lluvia no se trabaja en cubierta. Son plazos orientativos, y el concreto te lo damos al ver tu tejado o tu fachada.",
    projectsText:
      "Podemos enseñarte tejados terminados para que veas el acabado y cómo han aguantado los inviernos, además de la reforma de tejado que tenemos en nuestros proyectos.",
    projectLink: {
      href: "/proyectos/reforma-de-tejado",
      label: "Ver la reforma de tejado",
    },
    faqs: [
      {
        question: "¿Cuándo hay que retejar en vez de cambiar unas tejas?",
        answer:
          "Cuando hay goteras en varios sitios, tejas sueltas por todo el tejado o la estructura está cediendo. Si el problema es puntual, basta con reparar.",
      },
      {
        question: "¿Se puede aprovechar la teja antigua?",
        answer:
          "Sí, la que está sana se limpia y se vuelve a colocar. También se puede retejar por completo con teja envejecida, para tener un tejado nuevo con aspecto tradicional.",
      },
      {
        question: "¿Se puede aislar el tejado al retejar?",
        answer:
          "Sí, y es el mejor momento: se coloca aislamiento bajo la teja y se nota mucho en verano y en invierno.",
      },
      {
        question: "¿Pintura o cal en una fachada antigua?",
        answer:
          "En muros de piedra o tapial, la cal deja transpirar el muro y evita humedades. La pintura plástica puede atraparlas.",
      },
      {
        question: "¿Necesito permiso para arreglar la fachada o el tejado?",
        answer:
          "Normalmente hay que comunicarlo al ayuntamiento, y para el andamio en la calle hace falta permiso de ocupación de vía pública. Ese permiso lo gestionamos nosotros, pero la tasa por cortar la calle corre de tu cuenta.",
      },
    ],
  },

  "trabajos-piedra": {
    worksHeading: "Trabajos en piedra que hacemos en Los Pedroches",
    intro: [
      "El granito es parte de la arquitectura de Los Pedroches y es uno de los trabajos que más nos gustan. Hacemos muros, fachadas y patios de piedra en Pozoblanco y en toda la comarca, tanto con piedra nueva como recuperada.",
    ],
    works: [
      "Muros de mampostería de granito: de carga, de cerramiento y de contención.",
      "Muros de piedra seca tradicionales, como las paredes de las dehesas de la comarca.",
      "Chapado de fachadas, zócalos y paredes interiores con piedra natural.",
      "Rejuntado de fachadas y muros de piedra con mortero de cal.",
      "Limpieza de piedra con agua a baja presión y cepillado.",
      "Dinteles, jambas, alféizares y escalones de granito, nuevos o recuperados.",
      "Chimeneas, hogares y barbacoas de piedra.",
      "Empedrados de patios y entradas con chino, granito o losas.",
      "Recuperación y recolocación de piedra antigua de derribos.",
      "Picado de enlucidos para dejar la piedra vista en interiores.",
    ],
    notWorks: [
      "Talla artística o escultura en piedra.",
      "Corte de grandes bloques en cantera.",
    ],
    timingHeading: "¿Cuánto lleva un trabajo en piedra?",
    timingItems: [
      { work: "Chapado de unos 20 m² de fachada", duration: "1-2 semanas" },
      { work: "Muro de mampostería de 10 metros lineales y 1 metro de alto", duration: "2-4 semanas" },
      { work: "Rejuntado de una fachada de piedra", duration: "2-3 semanas" },
      { work: "Chimenea o barbacoa de piedra", duration: "1-2 semanas" },
      { work: "Empedrado de patio de unos 30 m²", duration: "2-3 semanas" },
    ],
    timingNote:
      "La piedra no admite prisas. Estos plazos son orientativos y el concreto va en el presupuesto, cuando hayamos visto la obra y la piedra que se va a usar.",
    projectsText:
      "Si quieres ver cómo queda un trabajo en piedra con los años, podemos enseñarte obras terminadas, además del patio que tenemos en nuestros proyectos.",
    projectLink: {
      href: "/proyectos/reforma-patio",
      label: "Ver la reforma de patio",
    },
    faqs: [
      {
        question: "¿Se puede reutilizar la piedra de mi casa o de un derribo?",
        answer:
          "Sí, y es lo ideal: queda integrada con el resto y sale más económico que la piedra nueva.",
      },
      {
        question: "¿Qué diferencia hay entre muro de mampostería y chapado?",
        answer:
          "La mampostería es un muro de piedra maciza. El chapado es un revestimiento de piedra sobre un muro de ladrillo u hormigón. El aspecto es parecido, pero el coste y el plazo son distintos.",
      },
      {
        question: "¿Con qué se rejunta la piedra antigua?",
        answer:
          "Con mortero de cal. El cemento es más duro que la piedra y con el tiempo la daña y retiene humedad.",
      },
      {
        question: "¿Se limpia la piedra con chorro de arena?",
        answer:
          "Depende del caso. Si no es necesario, usamos agua a baja presión y cepillos para dañarla lo menos posible. Si hace falta y la edificación lo aguanta, el resultado con chorro de arena suele ser bueno, aunque lo tiene que hacer un profesional externo.",
      },
    ],
  },
};
