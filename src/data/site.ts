import type {
  BeforeAfterCase,
  BlogPost,
  GlobalFaq,
  NavItem,
  PricingGroup,
  TeamMember,
  Testimonial,
  Treatment,
} from "@/types/site";

export const clinic = {
  name: "Clínica Dental Lorenzo González",
  phone: "963608833",
  phoneDisplay: "963 608 833",
  googleReviewsUrl:
    "https://www.google.com/maps/place/Cl%C3%ADnica+Dental+Dr+Lorenzo+Gonz%C3%A1lez+Cueva/@39.4661665,-0.3538256,17z/data=!4m8!3m7!1s0xd604894a7ff10cd:0x33e53c0b5b26ac7a!8m2!3d39.4661665!4d-0.3512453!9m1!1b1!16s%2Fg%2F1z44crcmp!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D",
  whatsappHref: "https://wa.me/34963608833?text=Hola%2C%20quiero%20pedir%20una%20cita%20en%20la%20Cl%C3%ADnica%20Dental%20Lorenzo%20Gonz%C3%A1lez.",
  formspreeEndpoint: "https://formspree.io/f/xbdzvzrv",
  email: "citas@clinicadentallorenzogonzalez.es",
  address: "C/ Manuel Candela 5, Puerta 1, Valencia, España",
  mapsUrl: "https://share.google/c34ekBZe7yZAsWizr",
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
  { label: "Precios", href: "/precios" },
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
    category: "Implantología",
    startingPrice: 594,
    shortDescription: "Recupera piezas perdidas con una solución fija, estable y natural.",
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
    category: "Ortodoncia",
    startingPrice: 2750,
    shortDescription: "Alinea tu sonrisa con precisión, confort y planificación moderna.",
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
        title: "Caso 0744 · Corrección progresiva de arcada superior",
        description: "Evolución alineada mediante ortodoncia digital con mejora funcional y estética de la mordida anterior.",
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
    category: "Estética dental",
    startingPrice: 330,
    shortDescription: "Mejora color, forma y armonía con tratamientos de alta precisión.",
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
    category: "Estética dental",
    startingPrice: 275,
    shortDescription: "Rediseña tu sonrisa con carillas cerámicas finas y naturales.",
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
    category: "Odontología conservadora",
    startingPrice: 165,
    shortDescription: "Conserva piezas comprometidas y alivia el dolor con precisión microscópica.",
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
    category: "Periodoncia",
    startingPrice: 88,
    shortDescription: "Cuida encías y soporte dental para proteger tu salud oral a largo plazo.",
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
          "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80",
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
    category: "Odontopediatría",
    startingPrice: 22,
    shortDescription: "Atención amable y preventiva para que los peques vivan el dentista con confianza.",
    description:
      "Creamos experiencias positivas para niños y familias, acompañando el crecimiento oral desde una base preventiva.",
    heroImage:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
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
          "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    slug: "higiene-y-prevencion",
    name: "Higiene y prevención",
    category: "Prevención",
    startingPrice: 33,
    shortDescription: "La base para evitar problemas mayores y mantener tu sonrisa sana.",
    description:
      "No esperamos a que haya dolor. Diseñamos protocolos preventivos para conservar dientes, encías y restauraciones en óptimo estado.",
    heroImage:
      "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=1200&q=80",
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
          "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    slug: "urgencias-dentales",
    name: "Urgencias dentales",
    category: "Urgencias",
    startingPrice: 55,
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
          "Escríbenos por WhatsApp y valoraremos el caso para indicarte el siguiente paso más seguro.",
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
          "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Recuperación funcional",
        description: "Tratamiento definitivo tras fase inicial de urgencia.",
        image:
          "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    slug: "protesis-dentales",
    name: "Prótesis dentales",
    category: "Prótesis",
    startingPrice: 462,
    shortDescription: "Recupera estabilidad, función y estética con prótesis diseñadas a medida.",
    description:
      "Diseñamos prótesis removibles y fijas con criterios de adaptación, confort y naturalidad para devolver seguridad al hablar y masticar.",
    heroImage:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Prótesis dental diseñada en laboratorio",
    benefits: [
      "Recupera función masticatoria y estabilidad",
      "Mejora estética y soporte labial",
      "Se adapta a cada caso con planificación personalizada",
    ],
    idealFor: [
      "Pacientes con ausencias múltiples o edentulismo parcial",
      "Casos que necesitan una rehabilitación funcional completa",
      "Personas que buscan comodidad y estética natural",
    ],
    process: [
      { title: "Valoración protésica", description: "Analizamos el estado óseo, la mordida y el soporte existente para definir la mejor solución." },
      { title: "Registros y prueba", description: "Tomamos medidas precisas y validamos la adaptación y la estética en fases de prueba." },
      { title: "Entrega y ajuste", description: "Ajustamos la prótesis para garantizar confort, estabilidad y una integración natural." },
    ],
    faqs: [
      { question: "¿Qué diferencia hay entre una prótesis fija y una removible?", answer: "La fija se mantiene cementada o atornillada, mientras que la removible puede retirarse para su higiene. La indicación depende de cada caso." },
      { question: "¿Es posible conseguir un resultado natural?", answer: "Sí. La selección de materiales, el diseño y la prueba estética son claves para un resultado armonioso." },
    ],
    beforeAfter: [
      { title: "Rehabilitación completa superior", description: "Recuperación funcional y estética con prótesis planificada a medida.", image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=900&q=80" },
      { title: "Adaptación confortable", description: "Prótesis pensada para estabilidad diaria y expresión natural.", image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    slug: "blanqueamiento-dental",
    name: "Blanqueamiento dental",
    category: "Estética dental",
    startingPrice: 39,
    shortDescription: "Aclara el tono dental con protocolos seguros, controlados y de resultado natural.",
    description:
      "Trabajamos blanqueamiento en clínica y domiciliario con supervisión profesional para conseguir luminosidad sin comprometer el esmalte.",
    heroImage:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Paciente mostrando una sonrisa luminosa tras blanqueamiento dental",
    benefits: [
      "Aporta luminosidad sin efecto artificial",
      "Permite personalizar intensidad y mantenimiento",
      "Se adapta al historial de sensibilidad de cada paciente",
    ],
    idealFor: [
      "Pacientes con tinciones o pérdida de brillo",
      "Personas que desean rejuvenecer visualmente la sonrisa",
      "Casos compatibles con un tratamiento conservador",
    ],
    process: [
      { title: "Valoración del esmalte", description: "Comprobamos la salud dental y el origen de las tinciones antes de indicar el tratamiento." },
      { title: "Protocolo personalizado", description: "Definimos si conviene tratamiento en clínica, domiciliario o una combinación de ambos." },
      { title: "Seguimiento del tono", description: "Ajustamos mantenimiento y hábitos para conservar el resultado durante más tiempo." },
    ],
    faqs: [
      { question: "¿El blanqueamiento daña el esmalte?", answer: "No cuando se realiza con indicación y supervisión profesional. Elegimos concentraciones y tiempos seguros." },
      { question: "¿Cuánto dura el efecto?", answer: "Depende de hábitos como café, tabaco o higiene, pero solemos pautar mantenimiento para alargar el resultado." },
    ],
    beforeAfter: [
      { title: "Mejora de luminosidad", description: "Resultado uniforme y natural tras protocolo controlado.", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80" },
      { title: "Armonía del color", description: "Aclarado progresivo respetando el aspecto natural del esmalte.", image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    slug: "limpieza-dental",
    name: "Limpieza dental",
    category: "Prevención",
    startingPrice: 33,
    shortDescription: "Mantén tu boca libre de placa y biofilm con una higiene profesional adaptada a tu riesgo.",
    description:
      "La limpieza dental profesional es la base para prevenir caries, gingivitis y acumulación de cálculo, mejorando además la sensación de frescor y salud oral.",
    heroImage:
      "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Higienista realizando una limpieza dental profesional",
    benefits: [
      "Reduce biofilm y cálculo",
      "Mejora la salud de encías y dientes",
      "Previene tratamientos mayores si se realiza con regularidad",
    ],
    idealFor: [
      "Pacientes con acumulación de placa o sangrado gingival",
      "Personas que desean mantener su salud oral estable",
      "Pacientes en seguimiento preventivo periódico",
    ],
    process: [
      { title: "Evaluación inicial", description: "Comprobamos el estado de encías, placa y posibles zonas de retención." },
      { title: "Higiene profesional", description: "Eliminamos cálculo y biofilm con instrumental específico y técnicas suaves." },
      { title: "Consejo personalizado", description: "Ajustamos pautas de cepillado, seda o irrigación según tu caso." },
    ],
    faqs: [
      { question: "¿Cada cuánto conviene hacerse una limpieza dental?", answer: "Depende del riesgo de cada paciente, aunque muchas pautas se sitúan entre 6 y 12 meses." },
      { question: "¿La limpieza dental duele?", answer: "Suele ser bien tolerada. Adaptamos la técnica y la sensibilidad del procedimiento a cada persona." },
    ],
    beforeAfter: [
      { title: "Encías más estables", description: "Reducción de biofilm y mejora del aspecto gingival.", image: "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=900&q=80" },
      { title: "Mantenimiento preventivo", description: "Seguimiento regular para conservar dientes y encías en buen estado.", image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    slug: "odontologia-conservadora",
    name: "Odontología conservadora",
    category: "Odontología conservadora",
    startingPrice: 55,
    shortDescription: "Tratamos caries y lesiones preservando al máximo la estructura sana del diente.",
    description:
      "Aplicamos técnicas y materiales restauradores para devolver función y sellado sin recurrir a tratamientos más invasivos si no son necesarios.",
    heroImage:
      "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Tratamiento conservador de una pieza dental en clínica",
    benefits: [
      "Preserva tejido dental sano",
      "Mejora función y sellado de la pieza",
      "Ayuda a evitar progresión de la lesión",
    ],
    idealFor: [
      "Caries iniciales o moderadas",
      "Reconstrucciones de piezas fracturadas",
      "Pacientes que buscan opciones mínimamente invasivas",
    ],
    process: [
      { title: "Diagnóstico", description: "Evaluamos la lesión, el tejido sano remanente y el pronóstico de la pieza." },
      { title: "Limpieza y restauración", description: "Eliminamos el tejido afectado y restauramos con materiales adhesivos de calidad." },
      { title: "Control posterior", description: "Revisamos adaptación, oclusión y evolución clínica en el seguimiento." },
    ],
    faqs: [
      { question: "¿Siempre hay que empastar una caries pequeña?", answer: "No siempre. Depende de profundidad, actividad y localización. En consulta valoramos la opción más conservadora." },
      { question: "¿Las reconstrucciones modernas son estéticas?", answer: "Sí. Los materiales actuales permiten resultados discretos y funcionales, integrados con el color del diente." },
    ],
    beforeAfter: [
      { title: "Reconstrucción conservadora", description: "Restauración de una pieza posterior manteniendo máxima estructura sana.", image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&w=900&q=80" },
      { title: "Sellado estético y funcional", description: "Recuperación de contorno y contacto interproximal.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80" },
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
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Enrique Crespo",
    treatment: "Implantes dentales",
    rating: 5,
    quote:
      "Solo tengo buenas palabras para esta clínica dental. Desde el primer momento te tratan genial y te ayudan en lo que sea.",
    source: "Google Maps",
    publishedAt: "Hace 3 meses",
  },
  {
    name: "Carmen Solana",
    treatment: "Atención general",
    rating: 5,
    quote:
      "Un encanto todo el equipo, destacaría la profesionalidad y la cercanía, siempre pensando en el bienestar del paciente.",
    source: "Google Maps",
    publishedAt: "Hace un mes",
  },
  {
    name: "Ignacio Miñana Roser",
    treatment: "Ortodoncia y encías",
    rating: 5,
    quote:
      "Gran atención, ha resuelto mis problemas de alineación dental y el dolor de encías.",
    source: "Google Maps",
    publishedAt: "Hace 2 meses",
  },
  {
    name: "Emma Calatayud Aristoy",
    treatment: "Ortodoncia",
    rating: 5,
    quote:
      "Trato súper profesional y cercano. Estoy más que satisfecha con los resultados de mi ortodoncia dirigida por la Dra. Cristina González.",
    source: "Google Maps",
    publishedAt: "Hace 2 años",
  },
  {
    name: "Laura Ruiz",
    treatment: "Atención general",
    rating: 5,
    quote:
      "En esta clínica el trato es excepcional. Son muy buenos profesionales, amables y honestos.",
    source: "Google Maps",
    publishedAt: "Hace 9 años",
  },
  {
    name: "Víctor Millán Navarro",
    treatment: "Atención general",
    rating: 5,
    quote:
      "Desde pequeño tenía bastante miedo al dentista hasta que di con esta clínica, donde me atendieron de forma súper cercana.",
    source: "Google Maps",
    publishedAt: "Hace 2 años",
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
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min",
    content: [
      "La periodontitis puede avanzar sin grandes molestias hasta que aparece movilidad, retracción o pérdida de soporte. Por eso la prevención importa tanto.",
      "Una higiene correcta en casa, revisiones periódicas y mantenimientos adaptados a tu riesgo son la mejor inversión para conservar dientes y encías.",
      "Si notas sangrado al cepillarte, mal aliento persistente o inflamación, toca revisar. Esperar solo empeora el escenario.",
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
          "Claro. Tienes acceso directo desde la web para resolver dudas o solicitar una primera visita.",
      },
];

function increasePrice(price: number | string | null) {
  if (price === null) return null;
  if (typeof price === "number") return Math.round(price * 1.1);
  if (typeof price === "string") {
    return price.replace(/\d+/g, (match) => String(Math.round(Number(match) * 1.1)));
  }
  return price;
}

export const pricingGroups: PricingGroup[] = [
  {
    title: "Diagnóstico y periodoncia",
    slug: "diagnostico-periodoncia",
    items: [
      { name: "Exploración + aletas de mordida", price: increasePrice(30) },
      { name: "L.B", price: increasePrice(40) },
      { name: "Estudio periodontal", price: increasePrice(80) },
      { name: "R.A.R", price: increasePrice(85) },
      { name: "R.A.R selectivo", price: increasePrice(180) },
      { name: "Cirugía periodontal", price: increasePrice(275) },
      { name: "Injerto periodontal", price: increasePrice(null) },
      { name: "Regeneración con hueso y membrana", price: increasePrice(480) },
    ],
  },
  {
    title: "Odontología conservadora y endodoncia",
    slug: "conservadora-endodoncia",
    items: [
      { name: "Obturaciones simples y compuestas", price: increasePrice(50) },
      { name: "Con RPI", price: increasePrice(60) },
      { name: "Dos obturaciones", price: increasePrice(90) },
      { name: "Endodoncia uni-birradicular", price: increasePrice(150) },
      { name: "Endodoncia multirradicular", price: increasePrice(180) },
      { name: "Reconstrucción + post", price: increasePrice(70) },
      { name: "Reendodoncia incisivos", price: increasePrice(150) },
      { name: "Reendodoncia premolares", price: increasePrice(180) },
      { name: "Reendodoncia molares", price: increasePrice(220) },
    ],
  },
  {
    title: "Cirugía oral e implantología",
    slug: "cirugia-implantologia",
    items: [
      { name: "Extracción simple", price: increasePrice(50) },
      { name: "Extracción + legrado", price: increasePrice(60) },
      { name: "Extracción + osteotomía", price: increasePrice(90) },
      { name: "Extracción quirúrgica", price: increasePrice(null) },
      { name: "Cordal simple", price: increasePrice(90) },
      { name: "Cordal semiincluido", price: increasePrice(180) },
      { name: "Cordal incluido", price: increasePrice(250) },
      { name: "Apicectomía", price: increasePrice(350) },
      { name: "Quistectomía", price: increasePrice(350) },
      { name: "Elevación seno indirecta", price: increasePrice(400) },
      { name: "Elevación seno bilateral", price: increasePrice(1800) },
      { name: "Elevación seno directa", price: increasePrice(4000) },
      { name: "Injertos particulados", price: increasePrice("590 a 10000") },
      { name: "Regeneraciones", price: increasePrice(null) },
      { name: "Implante", price: increasePrice(540) },
      { name: "Pilar intermedio", price: increasePrice(120) },
      { name: "Corona sobre implante", price: increasePrice(540) },
      { name: "Corona sobre implante (ceramo-metálica)", price: increasePrice(540) },
      { name: "Suplemento por implante", price: increasePrice(250) },
      { name: "Híbridas sobre implantes en resina", price: increasePrice(3200) },
      { name: "Híbridas sobre implantes en porcelana", price: increasePrice(3800) },
      { name: "Barra", price: increasePrice(1920) },
    ],
  },
  {
    title: "Prótesis y rehabilitación",
    slug: "protesis-rehabilitacion",
    items: [
      { name: "Prótesis removible parciales hasta 5 piezas", price: increasePrice(420) },
      { name: "Prótesis removible parciales más de 5 piezas", price: increasePrice(470) },
      { name: "Prótesis removible completa superior/inferior", price: increasePrice(550) },
      { name: "Rebase completa", price: increasePrice(180) },
      { name: "Férula de descarga", price: increasePrice(260) },
      { name: "Base", price: increasePrice(400) },
      { name: "Esquelético", price: increasePrice(55) },
      { name: "Provisionales", price: increasePrice(60) },
      { name: "Funda metal-porcelana", price: increasePrice(260) },
      { name: "Funda veneers", price: increasePrice(190) },
      { name: "Corona de zirconio", price: increasePrice(400) },
      { name: "Encerado", price: increasePrice(16) },
      { name: "Pónticos", price: increasePrice(260) },
      { name: "Sobredentaduras atache", price: increasePrice(260) },
      { name: "Sobredentaduras cazoleta + teflones", price: increasePrice(220) },
      { name: "Estructura metálica", price: increasePrice(290) },
      { name: "Completa", price: increasePrice(790) },
    ],
  },
  {
    title: "Ortodoncia",
    slug: "ortodoncia",
    items: [
      { name: "Ortodoncia convencional (Ceosa)", price: increasePrice(2500) },
      { name: "Damon/Camaleón metálicos", price: increasePrice(2800) },
      { name: "Damon/Camaleón estéticos", price: increasePrice(3200) },
      { name: "Ortodoncia invisible", price: increasePrice("3800 a 4500") },
      { name: "Retención fija sup/inf (nueva)", price: increasePrice(150) },
      { name: "Retención removible sup/inf (nuevo)", price: increasePrice(200) },
      { name: "Orthotropics sup e inf", price: increasePrice(1200) },
      { name: "Orthotropics sup + máscara", price: increasePrice(1200) },
      { name: "Orthotropics una arcada", price: increasePrice(900) },
      { name: "Myobrace", price: increasePrice(950) },
      { name: "Pistas de composite en anteriores", price: increasePrice(300) },
      { name: "Pistas de composite en posteriores", price: increasePrice(null) },
      { name: "Lip-Bumper", price: increasePrice(null) },
    ],
  },
  {
    title: "Odontopediatría",
    slug: "odontopediatria",
    items: [
      { name: "Obturación odontopediatría", price: increasePrice(50) },
      { name: "Pulpotomía", price: increasePrice(50) },
      { name: "Pulpectomía", price: increasePrice(null) },
      { name: "Extracción diente de leche", price: increasePrice(20) },
      { name: "Extracción diente definitivo", price: increasePrice(40) },
      { name: "Corona odontopediatría", price: increasePrice(95) },
      { name: "Mantenedores de espacio", price: increasePrice(150) },
    ],
  },
  {
    title: "Estética dental",
    slug: "estetica-dental",
    items: [
      { name: "Blanqueamiento en clínica", price: increasePrice(300) },
      { name: "Blanqueamiento domiciliario jeringa", price: increasePrice(35) },
      { name: "Blanqueamiento domiciliario férula", price: increasePrice(60) },
      { name: "Carillas de porcelana", price: increasePrice(400) },
      { name: "Carillas de composite", price: increasePrice(250) },
      { name: "Carillas de porcelana estética", price: increasePrice(400) },
      { name: "Carillas de composite estética", price: increasePrice(250) },
    ],
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
