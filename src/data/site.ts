import type {
  BeforeAfterCase,
  BlogPost,
  GlobalFaq,
  NavItem,
  TeamMember,
  Testimonial,
  Treatment,
} from "@/types/site";

export const clinic = {
  name: "Clínica Dental Lorenzo González",
  phone: "617680026",
  phoneDisplay: "617 680 026",
  whatsappHref: "https://wa.me/34617680026?text=Hola%2C%20quiero%20pedir%20una%20cita%20en%20la%20Cl%C3%ADnica%20Dental%20Lorenzo%20Gonz%C3%A1lez.",
  formspreeEndpoint: "https://formspree.io/f/xbdzvzrv",
  email: "citas@clinicadentallorenzogonzalez.es",
  address: "Av. de França 124, Valencia",
  schedule: [
    "Lunes a jueves · 09:30 a 14:00 y 16:00 a 20:00",
    "Viernes · 09:30 a 15:00",
    "Urgencias valoradas el mismo día según disponibilidad",
  ],
};

export const navigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Tratamientos", href: "/tratamientos" },
  { label: "Equipo", href: "/equipo" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Antes y después", href: "/antes-y-despues" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
  { label: "FAQ", href: "/faq" },
];

export const trustBadges = [
  "Más de 37 años devolviendo confianza al sonreír",
  "Diagnóstico digital y planificación 3D",
  "Odontología mínimamente invasiva y trato humano",
  "Planes personalizados para adultos y familias",
];

export const treatments: Treatment[] = [
  {
    slug: "implantes-dentales",
    name: "Implantes dentales",
    shortDescription: "Reponé piezas perdidas con una solución fija, estable y natural.",
    description:
      "Planificamos cada caso con diagnóstico digital y cirugía guiada para devolver función, estética y seguridad al hablar y masticar.",
    heroImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Odontóloga revisando radiografía digital dental",
    benefits: [
      "Recuperan estabilidad y confort al masticar",
      "Mejoran la estética de forma natural",
      "Ayudan a preservar estructura ósea",
      "Permiten una solución duradera y precisa",
    ],
    idealFor: [
      "Personas que han perdido una o varias piezas",
      "Pacientes que buscan una alternativa fija a prótesis removibles",
      "Casos que necesitan recuperar función y armonía facial",
    ],
    process: [
      {
        title: "Valoración y TAC dental",
        description:
          "Estudiamos hueso, encía y mordida con pruebas digitales para diseñar un tratamiento seguro.",
      },
      {
        title: "Planificación 3D",
        description:
          "Definimos la posición ideal de cada implante para priorizar estabilidad y estética.",
      },
      {
        title: "Colocación guiada",
        description:
          "Realizamos una cirugía mínimamente invasiva, cómoda y con tiempos controlados.",
      },
      {
        title: "Prótesis definitiva",
        description:
          "Colocamos la corona o rehabilitación final con un acabado natural y funcional.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto dura un tratamiento de implantes dentales?",
        answer:
          "Depende del caso y de la calidad ósea, pero solemos planificarlo entre varias semanas y unos meses para asegurar integración y estética final.",
      },
      {
        question: "¿La colocación del implante duele?",
        answer:
          "La intervención se realiza con anestesia local y técnicas mínimamente invasivas. La mayoría de pacientes lo vive mejor de lo que imaginaba.",
      },
    ],
    beforeAfter: [
      {
        title: "Recuperación de incisivo superior",
        description: "Implante unitario con corona cerámica natural y encía armónica.",
        image:
          "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Rehabilitación posterior",
        description: "Restauración funcional para volver a comer con seguridad.",
        image:
          "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    slug: "ortodoncia",
    name: "Ortodoncia",
    shortDescription: "Alineá tu sonrisa con precisión, confort y planificación moderna.",
    description:
      "Trabajamos ortodoncia estética y alineadores transparentes para mejorar sonrisa, mordida y salud funcional a largo plazo.",
    heroImage:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Paciente sonriendo durante tratamiento de ortodoncia",
    benefits: [
      "Mejora la alineación y la mordida",
      "Facilita la higiene oral diaria",
      "Aporta equilibrio estético al rostro",
      "Reduce desgastes y tensiones funcionales",
    ],
    idealFor: [
      "Adultos que buscan una solución discreta",
      "Adolescentes con malposiciones o mordida cruzada",
      "Pacientes que desean mejorar estética y función",
    ],
    process: [
      {
        title: "Escaneado digital",
        description:
          "Tomamos registros 3D sin impresiones incómodas para planificar con precisión.",
      },
      {
        title: "Plan de movimiento",
        description:
          "Te mostramos cómo evolucionará la sonrisa antes de empezar el tratamiento.",
      },
      {
        title: "Seguimiento periódico",
        description:
          "Controlamos cada fase para asegurar el avance esperado y resolver dudas.",
      },
      {
        title: "Retención y estabilidad",
        description:
          "Cerramos el tratamiento con un plan pensado para mantener el resultado.",
      },
    ],
    faqs: [
      {
        question: "¿Los alineadores son tan eficaces como los brackets?",
        answer:
          "En muchos casos sí. Lo importante no es la moda, sino una indicación correcta según tu mordida y el objetivo del tratamiento.",
      },
      {
        question: "¿Cuánto tiempo dura una ortodoncia?",
        answer:
          "Varía según la complejidad, pero solemos trabajar con planes totalmente personalizados tras el estudio inicial.",
      },
    ],
    beforeAfter: [
      {
        title: "Alineación de arcada superior",
        description: "Corrección estética y mejora de la mordida anterior.",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Sonrisa más armónica",
        description: "Resultado natural con alineadores transparentes.",
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    slug: "estetica-dental",
    name: "Estética dental",
    shortDescription: "Mejorá color, forma y armonía con tratamientos de alta precisión.",
    description:
      "Creamos sonrisas luminosas y naturales con un enfoque conservador, diseño digital y materiales de última generación.",
    heroImage:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Detalle de sonrisa cuidada en clínica dental premium",
    benefits: [
      "Aporta luminosidad y naturalidad",
      "Refuerza la confianza al sonreír",
      "Permite resultados muy personalizados",
    ],
    idealFor: [
      "Pacientes que quieren mejorar la estética de su sonrisa",
      "Casos con manchas, desgaste o asimetrías leves",
    ],
    process: [
      {
        title: "Análisis de sonrisa",
        description: "Estudiamos proporciones faciales, encía, labios y color dental.",
      },
      {
        title: "Diseño personalizado",
        description: "Definimos la propuesta más adecuada según tu objetivo y estilo.",
      },
      {
        title: "Tratamiento conservador",
        description: "Aplicamos técnicas que priorizan salud, naturalidad y duración.",
      },
    ],
    faqs: [
      {
        question: "¿Buscáis un resultado blanco artificial?",
        answer:
          "No. Nuestro objetivo es una sonrisa bonita, saludable y coherente con tu rostro. La naturalidad manda.",
      },
      {
        question: "¿Qué tratamientos incluye la estética dental?",
        answer:
          "Puede incluir blanqueamiento, carillas, contorneado, rehabilitación estética y otros procedimientos combinados.",
      },
    ],
    beforeAfter: [
      {
        title: "Mejora de tono y contorno",
        description: "Plan integral para una sonrisa más fresca y equilibrada.",
        image:
          "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Resultado natural y elegante",
        description: "Estética sin rigidez ni efecto artificial.",
        image:
          "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    slug: "carillas-dentales",
    name: "Carillas dentales",
    shortDescription: "Rediseñá tu sonrisa con carillas cerámicas finas y naturales.",
    description:
      "Las carillas permiten corregir forma, color o pequeños defectos con máxima delicadeza y un acabado premium.",
    heroImage:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Paciente mostrando sonrisa después de tratamiento estético",
    benefits: [
      "Cambios visibles con un plan conservador",
      "Cerámicas de alta estética y duración",
      "Corrección de pequeñas fracturas y asimetrías",
    ],
    idealFor: [
      "Sonrisas con manchas severas",
      "Dientes con forma irregular o desgastados",
    ],
    process: [
      {
        title: "Diseño digital",
        description: "Planificamos el resultado para que encaje con tu expresión natural.",
      },
      {
        title: "Prueba estética",
        description: "Validamos forma y proporción antes de la fase definitiva.",
      },
      {
        title: "Colocación final",
        description: "Adhesión precisa y pulido final para un resultado de alta calidad.",
      },
    ],
    faqs: [
      {
        question: "¿Las carillas se ven artificiales?",
        answer:
          "No cuando se planifican bien. La clave está en proporción, textura, translucidez y criterio clínico.",
      },
      {
        question: "¿Siempre hay que tallar mucho el diente?",
        answer:
          "No. Valoramos opciones mínimamente invasivas siempre que el caso lo permita.",
      },
    ],
    beforeAfter: [
      {
        title: "Rediseño de sonrisa anterior",
        description: "Carillas cerámicas con integración natural.",
        image:
          "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Corrección de bordes y color",
        description: "Mejora estética manteniendo expresividad facial.",
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    slug: "endodoncia",
    name: "Endodoncia",
    shortDescription: "Salvá piezas comprometidas y aliviá el dolor con precisión microscópica.",
    description:
      "Tratamos infecciones pulpares con tecnología moderna para conservar el diente siempre que sea viable.",
    heroImage:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Detalle de instrumental clínico en odontología avanzada",
    benefits: [
      "Controla dolor e infección",
      "Permite conservar dientes naturales",
      "Evita extracciones innecesarias en muchos casos",
    ],
    idealFor: ["Pacientes con dolor, caries profundas o traumatismos dentales"],
    process: [
      {
        title: "Diagnóstico preciso",
        description: "Determinamos el estado pulpar y periapical antes de intervenir.",
      },
      {
        title: "Limpieza y desinfección",
        description: "Eliminamos el tejido afectado y sellamos conductos con máxima precisión.",
      },
      {
        title: "Reconstrucción dental",
        description: "Protegemos la pieza con una restauración adecuada a largo plazo.",
      },
    ],
    faqs: [
      {
        question: "¿Una endodoncia duele?",
        answer:
          "No debería. La realizamos bajo anestesia y con protocolos pensados para que la experiencia sea controlada y confortable.",
      },
      {
        question: "¿Es mejor extraer que hacer una endodoncia?",
        answer:
          "Siempre que se pueda conservar el diente con buen pronóstico, mantenerlo suele ser la opción más biológica e inteligente.",
      },
    ],
    beforeAfter: [
      {
        title: "Conservación de molar comprometido",
        description: "Control del dolor y recuperación funcional.",
        image:
          "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Reconstrucción posterior",
        description: "Pieza protegida tras tratamiento endodóntico.",
        image:
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    slug: "periodoncia",
    name: "Periodoncia",
    shortDescription: "Cuidá encías y soporte dental para proteger tu salud oral a largo plazo.",
    description:
      "Tratamos gingivitis y periodontitis con un abordaje preventivo, preciso y orientado a preservar estructura.",
    heroImage:
      "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Dentista explicando salud de encías al paciente",
    benefits: [
      "Reduce inflamación y sangrado",
      "Protege soporte óseo y estabilidad dental",
      "Mejora la salud oral global",
    ],
    idealFor: ["Pacientes con sangrado de encías, movilidad o inflamación recurrente"],
    process: [
      {
        title: "Estudio periodontal",
        description: "Medimos encía, bolsas y nivel de soporte para definir el punto de partida.",
      },
      {
        title: "Tratamiento activo",
        description: "Aplicamos higiene profunda y terapia adaptada al grado de afectación.",
      },
      {
        title: "Mantenimiento",
        description: "Programamos revisiones periódicas para estabilizar resultados.",
      },
    ],
    faqs: [
      {
        question: "¿El sangrado al cepillar es normal?",
        answer:
          "No. Es una señal de inflamación y merece valoración para evitar que progrese.",
      },
      {
        question: "¿La periodontitis se puede controlar?",
        answer:
          "Sí, con diagnóstico precoz, tratamiento correcto y mantenimiento constante.",
      },
    ],
    beforeAfter: [
      {
        title: "Encía más estable y sana",
        description: "Control de inflamación y mejora de soporte.",
        image:
          "https://images.unsplash.com/photo-1516549655669-df4a2b8315db?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Seguimiento periodontal",
        description: "Mantenimiento para conservar resultados en el tiempo.",
        image:
          "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    slug: "odontopediatria",
    name: "Odontopediatría",
    shortDescription: "Atención amable y preventiva para que los peques vivan el dentista con confianza.",
    description:
      "Creamos experiencias positivas para niños y familias, acompañando el crecimiento oral desde una base preventiva.",
    heroImage:
      "https://images.unsplash.com/photo-1629909615184-a2dd2a8ad8fa?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Niña sonriendo durante revisión dental infantil",
    benefits: [
      "Prevención temprana de caries y malos hábitos",
      "Experiencia amable y pedagógica",
      "Seguimiento del desarrollo oral infantil",
    ],
    idealFor: ["Niños en edad de revisión, prevención y seguimiento del crecimiento dental"],
    process: [
      {
        title: "Primera visita amable",
        description: "Priorizamos vínculo, confianza y adaptación del niño al entorno clínico.",
      },
      {
        title: "Prevención y educación",
        description: "Guiamos a familias sobre higiene, dieta y hábitos saludables.",
      },
      {
        title: "Control del desarrollo",
        description: "Detectamos a tiempo alteraciones de mordida o erupción.",
      },
    ],
    faqs: [
      {
        question: "¿Cuándo debería ser la primera visita al dentista infantil?",
        answer:
          "Lo ideal es revisar de forma temprana para prevenir problemas y normalizar el entorno clínico.",
      },
      {
        question: "¿Cómo ayudáis a niños con miedo?",
        answer:
          "Trabajamos con comunicación adaptada, tiempos respetuosos y un entorno cálido para generar seguridad.",
      },
    ],
    beforeAfter: [
      {
        title: "Prevención y control temprano",
        description: "Seguimiento adaptado a la etapa de crecimiento.",
        image:
          "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Experiencia positiva en consulta",
        description: "Atención centrada en el bienestar del pequeño paciente.",
        image:
          "https://images.unsplash.com/photo-1631217868264-e6b90bb7e133?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    slug: "higiene-y-prevencion",
    name: "Higiene y prevención",
    shortDescription: "La base para evitar problemas mayores y mantener tu sonrisa sana.",
    description:
      "No esperamos a que haya dolor. Diseñamos protocolos preventivos para conservar dientes, encías y restauraciones en óptimo estado.",
    heroImage:
      "https://images.unsplash.com/photo-1629909615953-7f7eb9be5f85?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Profesional dental realizando higiene preventiva",
    benefits: [
      "Reduce riesgo de caries y enfermedad periodontal",
      "Permite detectar problemas a tiempo",
      "Mejora sensación de limpieza y salud oral",
    ],
    idealFor: ["Pacientes que buscan mantener salud oral estable durante años"],
    process: [
      {
        title: "Evaluación oral",
        description: "Analizamos placa, encías, restauraciones y hábitos.",
      },
      {
        title: "Higiene profesional",
        description: "Eliminamos biofilm y cálculo con técnicas cuidadosas.",
      },
      {
        title: "Plan de mantenimiento",
        description: "Definimos revisiones según tu riesgo y tus necesidades reales.",
      },
    ],
    faqs: [
      {
        question: "¿Cada cuánto conviene hacer una higiene dental?",
        answer:
          "Depende del riesgo periodontal y de tus hábitos. En consulta te indicamos una pauta realista y personalizada.",
      },
      {
        question: "¿La prevención de verdad evita tratamientos mayores?",
        answer:
          "Muchísimas veces sí. Detectar a tiempo cambia por completo el pronóstico y el coste biológico.",
      },
    ],
    beforeAfter: [
      {
        title: "Mejora de salud gingival",
        description: "Reducción de inflamación con seguimiento preventivo.",
        image:
          "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Mantenimiento a largo plazo",
        description: "Prevención enfocada en estabilidad y bienestar.",
        image:
          "https://images.unsplash.com/photo-1631815588090-d1bcbe9a1b67?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    slug: "urgencias-dentales",
    name: "Urgencias dentales",
    shortDescription: "Atención rápida para dolor, fracturas o infecciones que no pueden esperar.",
    description:
      "Valoramos urgencias dentales con rapidez para aliviar dolor y proteger el pronóstico del diente o tejido afectado.",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Paciente siendo atendido en clínica dental moderna",
    benefits: [
      "Atención prioritaria cuando más la necesitás",
      "Control del dolor y del problema de base",
      "Mejor pronóstico al actuar a tiempo",
    ],
    idealFor: ["Dolor agudo, infecciones, fracturas, traumatismos o inflamación importante"],
    process: [
      {
        title: "Evaluación inmediata",
        description: "Determinamos el origen del dolor y el nivel de prioridad del caso.",
      },
      {
        title: "Tratamiento de estabilización",
        description: "Actuamos para aliviar síntomas y frenar el proceso agudo.",
      },
      {
        title: "Plan de resolución",
        description: "Definimos el tratamiento definitivo una vez controlada la urgencia.",
      },
    ],
    faqs: [
      {
        question: "¿Qué hago si tengo una urgencia dental fuera del horario?",
        answer:
          "Escribinos por WhatsApp y valoraremos el caso para indicarte el siguiente paso más seguro.",
      },
      {
        question: "¿Un dolor fuerte siempre significa infección?",
        answer:
          "No siempre, pero sí es una señal que requiere valoración cuanto antes para evitar complicaciones.",
      },
    ],
    beforeAfter: [
      {
        title: "Resolución de dolor agudo",
        description: "Atención rápida para estabilizar el caso.",
        image:
          "https://images.unsplash.com/photo-1580281657702-257584239a70?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Recuperación funcional",
        description: "Tratamiento definitivo tras fase inicial de urgencia.",
        image:
          "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

export const team: TeamMember[] = [
  {
    name: "Dr. Lorenzo González",
    role: "Director médico",
    specialty: "Implantología y rehabilitación oral",
    bio: "Más de 37 años liderando tratamientos complejos con una visión serena, precisa y centrada en la persona.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dra. Marta Ferrer",
    role: "Odontóloga estética",
    specialty: "Estética dental y carillas cerámicas",
    bio: "Diseña sonrisas naturales con criterios de armonía facial y odontología conservadora.",
    image:
      "https://images.unsplash.com/photo-1594824475544-95bb7cbeae7c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Pablo Romero",
    role: "Especialista en ortodoncia",
    specialty: "Alineadores transparentes y ortodoncia avanzada",
    bio: "Combina diagnóstico digital, biomecánica y cercanía para alinear sonrisas con precisión.",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dra. Elena Soria",
    role: "Odontopediatría y prevención",
    specialty: "Atención infantil y salud gingival",
    bio: "Hace que niños y familias vivan la clínica con confianza, pedagogía y calma.",
    image:
      "https://images.unsplash.com/photo-1629909615184-a2dd2a8ad8fa?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ana M.",
    treatment: "Implantes dentales",
    rating: 5,
    quote:
      "Buscaba una clínica seria en Valencia y la encontré. Me explicaron todo con calma, sin venderme humo, y el resultado fue impecable.",
  },
  {
    name: "Carlos y Laura",
    treatment: "Odontopediatría",
    rating: 5,
    quote:
      "Llevamos a nuestros hijos desde hace años. El trato es cercano, profesional y muy humano. Se nota la experiencia del equipo.",
  },
  {
    name: "María R.",
    treatment: "Carillas dentales",
    rating: 5,
    quote:
      "Quería algo bonito pero natural. El cambio fue elegante, sin exageraciones. Volvería a elegirlos sin dudar.",
  },
  {
    name: "Vicente P.",
    treatment: "Ortodoncia",
    rating: 5,
    quote:
      "La planificación digital me dio muchísima confianza. Se nota que trabajan con tecnología, pero sin perder el trato de siempre.",
  },
  {
    name: "Sofía G.",
    treatment: "Estética dental",
    rating: 5,
    quote:
      "La clínica transmite calma y nivel. El diseño, el equipo y la atención están a otro nivel.",
  },
  {
    name: "Javier L.",
    treatment: "Urgencia dental",
    rating: 5,
    quote:
      "Me atendieron rápido por un dolor fuerte y me resolvieron la urgencia el mismo día. Profesionalidad total.",
  },
];

export const beforeAfterCases: BeforeAfterCase[] = treatments.flatMap((treatment) =>
  treatment.beforeAfter.map((item) => ({
    title: item.title,
    treatment: treatment.name,
    outcome: item.description,
    image: item.image,
  })),
);

export const blogPosts: BlogPost[] = [
  {
    slug: "cuanto-dura-un-implante-dental",
    title: "¿Cuánto dura un implante dental bien planificado?",
    excerpt:
      "No se trata solo del implante: influyen el diagnóstico, la encía, el hueso y el mantenimiento a largo plazo.",
    category: "Implantología",
    cover:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min",
    content: [
      "La duración de un implante dental depende de mucho más que la marca del implante. El éxito real nace de una planificación correcta, una buena integración ósea y un mantenimiento constante.",
      "En clínica priorizamos el estudio previo, la cirugía guiada y el seguimiento personalizado para que cada tratamiento tenga una base biológica sólida.",
      "También es clave la salud de las encías, el control del bruxismo y las revisiones periódicas. Un implante no es magia: es precisión, criterio y constancia.",
    ],
  },
  {
    slug: "alineadores-o-brackets-cual-elegir",
    title: "Alineadores o brackets: cómo elegir según tu caso",
    excerpt:
      "La mejor ortodoncia no es la más popular, sino la que resuelve tu mordida con el plan correcto.",
    category: "Ortodoncia",
    cover:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min",
    content: [
      "Muchos pacientes llegan pensando que ya saben qué tratamiento necesitan. Pero en ortodoncia, el diagnóstico manda. No todos los casos son ideales para cualquier sistema.",
      "Los alineadores ofrecen estética y comodidad, mientras que los brackets pueden ser más eficaces en ciertos movimientos o maloclusiones complejas.",
      "La decisión debe apoyarse en un estudio digital completo, objetivos claros y un seguimiento profesional riguroso.",
    ],
  },
  {
    slug: "como-cuidar-las-encias-para-evitar-periodontitis",
    title: "Cómo cuidar las encías para evitar la periodontitis",
    excerpt:
      "Las encías no sangran porque sí. Detectarlo a tiempo cambia el pronóstico por completo.",
    category: "Prevención",
    cover:
      "https://images.unsplash.com/photo-1516549655669-df4a2b8315db?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min",
    content: [
      "La periodontitis puede avanzar sin grandes molestias hasta que aparece movilidad, retracción o pérdida de soporte. Por eso la prevención importa tanto.",
      "Una higiene correcta en casa, revisiones periódicas y mantenimientos adaptados a tu riesgo son la mejor inversión para conservar dientes y encías.",
      "Si notás sangrado al cepillarte, mal aliento persistente o inflamación, toca revisar. Esperar solo empeora el escenario.",
    ],
  },
];

export const globalFaqs: GlobalFaq[] = [
  {
    question: "¿Aceptáis primeras visitas de valoración?",
    answer:
      "Sí. La primera visita nos permite entender tu caso, explicarte opciones con claridad y orientarte sin prisas.",
  },
  {
    question: "¿Trabajáis con tecnología digital?",
    answer:
      "Sí. Incorporamos diagnóstico por imagen, planificación 3D y herramientas digitales que mejoran precisión y experiencia del paciente.",
  },
  {
    question: "¿Tratáis tanto adultos como niños?",
    answer:
      "Sí. Somos una clínica pensada para adultos, familias y seguimiento a largo plazo.",
  },
  {
    question: "¿Puedo pedir cita por WhatsApp?",
    answer:
      "Claro. Tenés acceso directo desde la web para resolver dudas o solicitar una primera visita.",
  },
];

export const highlights = [
  {
    title: "37+ años de experiencia clínica",
    description:
      "Una trayectoria larga solo vale si sigue actualizándose. Por eso combinamos experiencia real con odontología actual.",
  },
  {
    title: "Tecnología que aporta precisión",
    description:
      "Radiología digital, planificación 3D y protocolos modernos al servicio de decisiones más seguras.",
  },
  {
    title: "Atención calmada y humana",
    description:
      "Explicamos, acompañamos y personalizamos. Porque una clínica excelente no solo trata dientes: cuida personas.",
  },
];
