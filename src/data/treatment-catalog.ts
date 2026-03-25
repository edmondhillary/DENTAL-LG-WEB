import { pricingGroups, treatments } from "@/data/site";
import type { Treatment } from "@/types/site";

type FaqItem = { question: string; answer: string };
type ProcessStep = { title: string; description: string };

type CategoryProfile = {
  eyebrow: string;
  heroImage: string;
  heroAlt: string;
  detailImage: string;
  detailImageAlt: string;
  overviewTitle: string;
  overviewLead: string;
  benefits: string[];
  idealFor: string[];
  process: ProcessStep[];
  trustPoints: string[];
  commonFaqs: FaqItem[];
  technicalFaqs: FaqItem[];
};

export type TreatmentCatalogEntry = Treatment & {
  origin: "featured" | "pricing" | "showcase";
  pricingGroupSlug?: string;
  pricingGroupTitle?: string;
  eyebrow?: string;
  detailIntro: string;
  detailImage: string;
  detailImageAlt: string;
  trustPoints: string[];
  commonFaqs: FaqItem[];
  technicalFaqs: FaqItem[];
  searchTerms: string[];
};

const CATEGORY_PROFILES: Record<string, CategoryProfile> = {
  "diagnostico-periodoncia": {
    eyebrow: "Diagnóstico y encías",
    heroImage: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Profesional dental realizando exploración periodontal",
    detailImage: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1200&q=80",
    detailImageAlt: "Dentista explicando un estudio periodontal al paciente",
    overviewTitle: "Precisión diagnóstica antes de intervenir",
    overviewLead: "Las terapias periodontales y de diagnóstico funcionan mejor cuando se apoyan en una exploración rigurosa, lectura clínica fina y un plan de mantenimiento realista.",
    benefits: [
      "Ayuda a detectar inflamación, sangrado y pérdida de soporte a tiempo",
      "Permite decidir si basta con mantenimiento o hace falta terapia activa",
      "Reduce la progresión de la enfermedad periodontal cuando se indica bien",
      "Da una base objetiva para presupuestos y fases de tratamiento",
    ],
    idealFor: [
      "Pacientes con sangrado, inflamación o movilidad dental",
      "Casos que necesitan un estudio detallado antes de rehabilitar o colocar implantes",
      "Personas con historial periodontal o recidivas de encía",
    ],
    process: [
      { title: "Historia clínica y sondaje", description: "Recogemos síntomas, revisamos tejidos blandos y medimos bolsas o signos de inflamación para situar el caso con precisión." },
      { title: "Imagen y registro", description: "Apoyamos el estudio con radiografías, fotografías o registros clínicos cuando el caso lo requiere." },
      { title: "Tratamiento periodontal", description: "Si hay enfermedad activa, planificamos la fase adecuada: higiene profunda, cirugía o mantenimiento según la situación." },
      { title: "Control y mantenimiento", description: "Revisamos la respuesta de la encía y ajustamos la frecuencia de control para estabilizar resultados." },
    ],
    trustPoints: [
      "Protocolos de sondaje y reevaluación antes de indicar cirugía",
      "Planificación periodontal pensada para conservar soporte y pronóstico",
      "Seguimiento periódico para evitar recaídas silenciosas",
    ],
    commonFaqs: [
      { question: "¿El sangrado de encías es normal?", answer: "No. El sangrado suele indicar inflamación y conviene valorarlo cuanto antes para evitar que progrese a pérdida de soporte." },
      { question: "¿Una limpieza profunda sustituye al mantenimiento?", answer: "No. La terapia activa controla el problema inicial, pero el mantenimiento es lo que sostiene el resultado en el tiempo." },
    ],
    technicalFaqs: [
      { question: "¿Qué papel tiene el raspado y alisado radicular?", answer: "Es la base no quirúrgica en muchos casos de periodontitis leve o moderada: elimina cálculo y biofilm subgingival y alisa la raíz para reducir recolonización bacteriana." },
      { question: "¿Cuándo se plantea cirugía o injerto periodontal?", answer: "Cuando la anatomía del defecto, la recesión o la pérdida de soporte no se controlan solo con terapia básica y hace falta mejorar acceso, cobertura o regeneración." },
    ],
  },
  "conservadora-endodoncia": {
    eyebrow: "Conservación dental",
    heroImage: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Instrumental de odontología conservadora y endodoncia",
    detailImage: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1200&q=80",
    detailImageAlt: "Tratamiento conservador en una pieza dental posterior",
    overviewTitle: "Salvar estructura sana siempre que sea posible",
    overviewLead: "La odontología conservadora y la endodoncia buscan eliminar infección o caries sin renunciar al diente cuando aún existe un pronóstico razonable.",
    benefits: [
      "Permite conservar piezas naturales cuando todavía son recuperables",
      "Reduce dolor, contaminación bacteriana y progresión de la lesión",
      "Restituye sellado, anatomía y función con materiales actuales",
      "Evita tratamientos más invasivos cuando se actúa a tiempo",
    ],
    idealFor: [
      "Pacientes con caries, fracturas o filtraciones en restauraciones previas",
      "Dientes con compromiso pulpar que todavía pueden conservarse",
      "Casos que buscan una solución biológica antes de plantear extracción",
    ],
    process: [
      { title: "Diagnóstico pulpar y estructural", description: "Determinamos profundidad de la lesión, estado de la pulpa y cantidad de tejido sano disponible." },
      { title: "Desinfección y preparación", description: "Retiramos tejido afectado o contenido pulpar dañado bajo control clínico y aislamiento adecuado." },
      { title: "Sellado y reconstrucción", description: "Restauramos la pieza con materiales adhesivos o refuerzos cuando el caso lo necesita." },
      { title: "Revisión del pronóstico", description: "Comprobamos adaptación, oclusión y la necesidad de protección adicional como una corona." },
    ],
    trustPoints: [
      "Aislamiento, desinfección y sellado como prioridades clínicas",
      "Decisiones conservadoras apoyadas en el estado real de la pieza",
      "Reconstrucción pensada para aguantar función, no solo para salir del paso",
    ],
    commonFaqs: [
      { question: "¿Una endodoncia siempre es mejor que extraer?", answer: "Si el diente es restaurable y el pronóstico es razonable, conservarlo suele ser la opción más biológica y estable." },
      { question: "¿Los empastes modernos quedan naturales?", answer: "Sí. Los composites actuales permiten integrar forma, contacto y color con un acabado muy discreto." },
    ],
    technicalFaqs: [
      { question: "¿Cuándo un diente endodonciado necesita corona?", answer: "Con frecuencia cuando ha perdido mucha estructura o soporta carga elevada. La corona protege frente a fracturas y ayuda a repartir fuerzas." },
      { question: "¿Qué cambia entre una endodoncia y una reendodoncia?", answer: "La reendodoncia implica revisar y volver a tratar conductos previamente intervenidos cuando persiste infección, síntomas o sellado insuficiente." },
    ],
  },
  "cirugia-implantologia": {
    eyebrow: "Cirugía oral e implantología",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Planificación digital para cirugía oral e implantes",
    detailImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
    detailImageAlt: "Odontólogo revisando diagnóstico 3D para implantes dentales",
    overviewTitle: "Cirugía indicada con planificación, no por impulso",
    overviewLead: "Las extracciones, injertos e implantes necesitan diagnóstico óseo, control de tejidos blandos y una secuencia quirúrgica muy clara para que el resultado sea estable.",
    benefits: [
      "Permite resolver ausencias dentales, infecciones o piezas con mal pronóstico",
      "Recupera función y soporte cuando el caso requiere cirugía",
      "Mejora la previsibilidad con planificación digital y tiempos controlados",
      "Facilita rehabilitaciones posteriores más estables y limpias",
    ],
    idealFor: [
      "Pacientes con piezas irrecuperables o ausencias dentales",
      "Casos que necesitan injerto, elevación de seno o soporte óseo adicional",
      "Personas que buscan una solución fija y planificada a medio plazo",
    ],
    process: [
      { title: "Estudio clínico y radiológico", description: "Valoramos hueso, encía, anatomía vecina y pronóstico restaurador antes de indicar cirugía." },
      { title: "Preparación del lecho", description: "Realizamos la extracción o el acceso quirúrgico minimizando trauma y protegiendo estructuras vecinas." },
      { title: "Regeneración o colocación", description: "Si hace falta, añadimos injerto o biomateriales; si las condiciones lo permiten, colocamos implantes o componentes quirúrgicos." },
      { title: "Cicatrización y fase protésica", description: "Controlamos integración, tejidos blandos y el momento adecuado para cargar o rehabilitar la zona." },
    ],
    trustPoints: [
      "Planificación 3D para reducir improvisación quirúrgica",
      "Secuencias pensadas para proteger hueso, encía y estructuras anatómicas",
      "Indicaciones conservadoras: si no conviene operar hoy, se dice",
    ],
    commonFaqs: [
      { question: "¿La cirugía oral duele?", answer: "Se realiza con anestesia local y una secuencia controlada. Después puede haber inflamación o sensibilidad, pero la pauta se adapta al tipo de intervención." },
      { question: "¿Un implante se coloca y se carga el mismo día?", answer: "Solo cuando la estabilidad primaria y el contexto biológico lo permiten. No es una regla universal." },
    ],
    technicalFaqs: [
      { question: "¿Qué valora el TAC antes de un implante?", answer: "Cantidad y calidad de hueso, relación con seno maxilar o nervio dentario, angulación protésica y necesidad de injerto." },
      { question: "¿Cuándo se indican elevaciones de seno o regeneraciones?", answer: "Cuando el hueso disponible no permite una colocación segura o predecible del implante y hace falta ganar volumen o altura." },
    ],
  },
  "protesis-rehabilitacion": {
    eyebrow: "Rehabilitación oral",
    heroImage: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Prótesis dental y trabajo de laboratorio restaurador",
    detailImage: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
    detailImageAlt: "Rehabilitación protésica de alta estética",
    overviewTitle: "Recuperar mordida, soporte y armonía",
    overviewLead: "La prótesis y la rehabilitación no consisten solo en reemplazar dientes: implican oclusión, estética, estabilidad, mantenimiento y adaptación del paciente.",
    benefits: [
      "Recupera la función masticatoria y el soporte de la sonrisa",
      "Ayuda a estabilizar la mordida y distribuir mejor las cargas",
      "Permite alternativas fijas o removibles según cada caso",
      "Integra laboratorio, clínica y pruebas antes de la entrega final",
    ],
    idealFor: [
      "Pacientes con ausencias dentales parciales o completas",
      "Casos que necesitan coronas, puentes, férulas o prótesis removibles",
      "Personas que buscan confort y naturalidad en el resultado final",
    ],
    process: [
      { title: "Plan protésico", description: "Definimos qué debe recuperar la rehabilitación: función, soporte, guía o estética, y con qué tipo de prótesis hacerlo." },
      { title: "Registros e impresiones", description: "Tomamos medidas físicas o digitales para trasladar el caso al laboratorio con máxima precisión." },
      { title: "Prueba y ajuste", description: "Validamos encaje, color, oclusión y adaptación antes de cerrar la fase definitiva." },
      { title: "Entrega y mantenimiento", description: "Ajustamos el trabajo y explicamos cuidados, revisiones y expectativas reales de duración." },
    ],
    trustPoints: [
      "Las pruebas previas evitan sorpresas en la fase final",
      "La rehabilitación se diseña para encajar con la mordida, no solo con la foto",
      "El mantenimiento posterior es parte del tratamiento, no un extra",
    ],
    commonFaqs: [
      { question: "¿Qué diferencia hay entre una prótesis fija y una removible?", answer: "La fija se mantiene cementada o atornillada; la removible se extrae para su higiene. La mejor opción depende de soporte, hueso, presupuesto y objetivos." },
      { question: "¿Las coronas y puentes pueden verse naturales?", answer: "Sí, cuando se planifican bien el contorno, el color, la encía y la relación con los dientes vecinos." },
    ],
    technicalFaqs: [
      { question: "¿Qué función tiene una férula de descarga?", answer: "Ayuda a proteger dientes, restauraciones y articulación cuando hay bruxismo, sobrecarga o desgaste funcional." },
      { question: "¿Por qué son importantes las pruebas protésicas?", answer: "Porque permiten corregir oclusión, fonética, soporte labial, estética y adaptación antes de terminar la restauración." },
    ],
  },
  ortodoncia: {
    eyebrow: "Alineación y mordida",
    heroImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Paciente durante planificación de ortodoncia estética",
    detailImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    detailImageAlt: "Control clínico de ortodoncia con escaneado digital",
    overviewTitle: "Mover dientes con control biomecánico real",
    overviewLead: "La ortodoncia moderna combina diagnóstico 3D, control de mordida y seguimiento periódico para que la estética no comprometa la función.",
    benefits: [
      "Mejora alineación, guía y reparto de fuerzas oclusales",
      "Facilita higiene y puede reducir zonas retentivas de placa",
      "Permite alternativas visibles o discretas según el caso",
      "Ayuda a planificar retención para mantener el resultado",
    ],
    idealFor: [
      "Pacientes con apiñamiento, mordida cruzada o maloclusiones",
      "Adultos que buscan una opción discreta como alineadores",
      "Niños y adolescentes en seguimiento del crecimiento orofacial",
    ],
    process: [
      { title: "Estudio ortodóncico", description: "Analizamos arcadas, mordida, proporciones faciales y el objetivo funcional antes de mover un solo diente." },
      { title: "Plan de movimiento", description: "Definimos el sistema: brackets, alineadores o aparatología funcional según biomecánica y colaboración esperada." },
      { title: "Seguimiento", description: "Controlamos activaciones, higiene, adaptación y evolución para mantener el plan bajo control." },
      { title: "Retención", description: "La última fase asegura estabilidad con retenedores fijos o removibles según la mordida final." },
    ],
    trustPoints: [
      "La retención forma parte del tratamiento completo",
      "No se elige sistema por moda, sino por biomecánica y objetivo",
      "El seguimiento periódico evita desviaciones y recidivas innecesarias",
    ],
    commonFaqs: [
      { question: "¿Los alineadores sirven para cualquier caso?", answer: "No siempre. Hay casos muy favorables y otros donde otra aparatología ofrece más control." },
      { question: "¿Cuánto dura una ortodoncia?", answer: "Depende de la complejidad, la colaboración y el tipo de movimiento necesario; por eso siempre se planifica de forma individual." },
    ],
    technicalFaqs: [
      { question: "¿Por qué la retención es tan importante?", answer: "Porque tras mover los dientes existe tendencia al cambio. Los retenedores ayudan a estabilizar el resultado conseguido." },
      { question: "¿Qué se valora además del alineamiento?", answer: "Relación entre arcadas, sobremordida, línea media, salud periodontal, espacio y función mandibular." },
    ],
  },
  odontopediatria: {
    eyebrow: "Odontología infantil",
    heroImage: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Atención odontopediátrica en entorno amable",
    detailImage: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80",
    detailImageAlt: "Consulta odontológica infantil con enfoque preventivo",
    overviewTitle: "Cuidar hoy la boca que está creciendo",
    overviewLead: "En odontopediatría, el objetivo no es solo tratar una muela temporal: también es conservar espacio, función, confianza y hábitos a tiempo.",
    benefits: [
      "Previene dolor, caries extensas y problemas de espacio",
      "Ayuda a que el niño viva el dentista sin experiencias traumáticas",
      "Permite detectar alteraciones de erupción o mordida de forma precoz",
      "Acompaña a la familia con pautas concretas de prevención y cuidado",
    ],
    idealFor: [
      "Niños con caries, traumatismos o revisiones de crecimiento",
      "Familias que quieren prevenir tratamientos mayores",
      "Casos que requieren control del espacio hasta la erupción definitiva",
    ],
    process: [
      { title: "Acogida y adaptación", description: "Priorizamos una visita comprensible y amable para reducir miedo y construir confianza." },
      { title: "Diagnóstico infantil", description: "Valoramos caries, erupción, hábitos, mordida y la fase de desarrollo del niño." },
      { title: "Tratamiento conservador", description: "Indicamos la solución más predecible para mantener función y espacio sin sobretratar." },
      { title: "Seguimiento familiar", description: "Damos pautas de higiene, dieta y control para mantener estable el resultado." },
    ],
    trustPoints: [
      "Tratamientos pensados para preservar espacio y función futura",
      "Lenguaje adaptado a niños y familias, sin dramatismos innecesarios",
      "Prevención y revisiones como parte de la experiencia infantil completa",
    ],
    commonFaqs: [
      { question: "¿Hay que tratar los dientes de leche si se van a caer?", answer: "Sí, muchas veces sí. Mantenerlos sanos ayuda a comer, hablar y conservar espacio para los dientes definitivos." },
      { question: "¿Cómo ayudáis a un niño con miedo?", answer: "Con tiempos respetuosos, lenguaje sencillo y una secuencia amable que reduce estímulos y ansiedad." },
    ],
    technicalFaqs: [
      { question: "¿Qué diferencia hay entre pulpotomía y pulpectomía?", answer: "La pulpotomía retira la pulpa de la corona y deja la raíz; la pulpectomía elimina todo el tejido pulpar del diente temporal cuando la afectación es más profunda." },
      { question: "¿Para qué sirve un mantenedor de espacio?", answer: "Ayuda a reservar el sitio para el diente definitivo cuando un temporal se pierde antes de tiempo." },
    ],
  },
  "estetica-dental": {
    eyebrow: "Diseño de sonrisa",
    heroImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Sonrisa natural tras tratamiento estético dental",
    detailImage: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=1200&q=80",
    detailImageAlt: "Detalle de sonrisa luminosa en clínica dental estética",
    overviewTitle: "Estética con criterio clínico, no con efecto máscara",
    overviewLead: "Los tratamientos estéticos funcionan bien cuando respetan esmalte, encía, proporciones faciales y un blanco que siga pareciendo humano.",
    benefits: [
      "Mejora color, forma y armonía de la sonrisa",
      "Permite resultados naturales y personalizados",
      "Puede combinarse con restauración o alineación si el caso lo requiere",
      "Refuerza seguridad al sonreír sin perder identidad facial",
    ],
    idealFor: [
      "Pacientes con manchas, desgaste, asimetrías o pequeñas fracturas",
      "Personas que buscan una mejora estética conservadora",
      "Casos compatibles con blanqueamiento, carillas o retoques de forma",
    ],
    process: [
      { title: "Análisis de sonrisa", description: "Estudiamos encía, color, textura, labios y proporciones faciales antes de proponer cambios." },
      { title: "Prueba o simulación", description: "Definimos tono, longitud y diseño para que el resultado no dependa de la improvisación." },
      { title: "Tratamiento estético", description: "Aplicamos blanqueamiento, carillas o restauración estética según el plan aprobado." },
      { title: "Acabado y mantenimiento", description: "Pulimos, ajustamos y explicamos cuidados para sostener brillo y estabilidad en el tiempo." },
    ],
    trustPoints: [
      "La naturalidad pesa más que el blanco extremo",
      "Cada decisión estética se cruza con función y salud periodontal",
      "Siempre se valora primero si hay una opción mínimamente invasiva",
    ],
    commonFaqs: [
      { question: "¿La estética dental tiene que verse muy blanca para quedar bien?", answer: "No. El objetivo suele ser luminosidad y equilibrio, no un resultado rígido o artificial." },
      { question: "¿Se puede combinar con otros tratamientos?", answer: "Sí. A veces el mejor resultado estético llega al combinar ortodoncia, restauración y blanqueamiento en el orden correcto." },
    ],
    technicalFaqs: [
      { question: "¿Cuál es la diferencia entre carilla y corona?", answer: "La carilla cubre la cara visible del diente con un enfoque estético; la corona rodea toda la pieza y añade mayor protección estructural." },
      { question: "¿El blanqueamiento profesional daña el esmalte?", answer: "Con una indicación correcta y bajo control profesional, se planifica para ser seguro y respetuoso con el esmalte." },
    ],
  },
};

const SHOWCASE_TREATMENTS: TreatmentCatalogEntry[] = [
  {
    slug: "coronas-ceramicas",
    name: "Coronas cerámicas",
    category: "Prótesis",
    startingPrice: 400,
    shortDescription: "Recubre dientes debilitados con una restauración estética, resistente y bien integrada.",
    description: "Las coronas cerámicas restauran dientes debilitados o tratados para devolverles forma, resistencia y una apariencia natural.",
    heroImage: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Corona cerámica en laboratorio dental",
    benefits: [
      "Protegen dientes debilitados o con gran pérdida de estructura",
      "Permiten recuperar contorno, función y estética",
      "Se integran con el color y translucidez de la sonrisa",
      "Son una opción habitual tras endodoncia o fractura extensa",
    ],
    idealFor: [
      "Dientes muy restaurados o tratados endodónticamente",
      "Piezas con fracturas, desgaste severo o color muy alterado",
      "Pacientes que necesitan resistencia y estética a la vez",
    ],
    process: CATEGORY_PROFILES["protesis-rehabilitacion"].process,
    faqs: [
      { question: "¿Una corona se nota al sonreír?", answer: "Cuando el diseño, el material y la encía están bien trabajados, la integración suele ser muy natural." },
      { question: "¿Cuánto puede durar una corona cerámica?", answer: "Depende de la higiene, la carga funcional y el ajuste, pero una buena planificación busca durabilidad a largo plazo." },
    ],
    beforeAfter: [
      { title: "Recuperación de molar debilitado", description: "Restauración completa de función y sellado con una corona bien ajustada.", image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=900&q=80" },
      { title: "Estética anterior armónica", description: "Contorno y color integrados con la sonrisa del paciente.", image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=900&q=80" },
    ],
    origin: "showcase",
    pricingGroupSlug: "protesis-rehabilitacion",
    pricingGroupTitle: "Prótesis y rehabilitación",
    eyebrow: "Restauración avanzada",
    detailIntro: "Una corona cerámica cubre el diente completo para reforzarlo y devolverle estética. Suele indicarse cuando una restauración simple ya no basta para proteger la pieza.",
    detailImage: CATEGORY_PROFILES["protesis-rehabilitacion"].detailImage,
    detailImageAlt: CATEGORY_PROFILES["protesis-rehabilitacion"].detailImageAlt,
    trustPoints: [
      "Valoramos primero si el diente puede mantenerse de forma predecible",
      "La preparación se diseña para dar soporte real a la restauración",
      "Se revisan ajuste, mordida y mantenimiento antes de cerrar el caso",
    ],
    commonFaqs: CATEGORY_PROFILES["protesis-rehabilitacion"].commonFaqs,
    technicalFaqs: [
      { question: "¿Cuándo está indicada una corona frente a una incrustación?", answer: "Cuando la pérdida de estructura o la debilidad del diente exigen una cobertura más completa y protectora." },
      { question: "¿Por qué muchas coronas siguen a una endodoncia?", answer: "Porque un diente endodonciado puede quedar más frágil y necesitar una cobertura que distribuya mejor las fuerzas." },
    ],
    searchTerms: ["coronas", "corona dental", "corona de zirconio", "funda dental", "rehabilitación fija"],
  },
  {
    slug: "puentes-reconstructivos",
    name: "Puentes reconstructivos",
    category: "Prótesis",
    startingPrice: 260,
    shortDescription: "Reponen una o varias ausencias dentales cuando el plan restaurador lo permite.",
    description: "Los puentes reconstructivos reemplazan dientes ausentes apoyándose en piezas vecinas o en implantes para recuperar función, continuidad y estética.",
    heroImage: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Prótesis fija tipo puente dental en fase de laboratorio",
    benefits: [
      "Cierran espacios y mejoran la masticación",
      "Restablecen continuidad estética en la arcada",
      "Pueden resolver ausencias unitarias o tramos cortos",
      "Se planifican según soporte dentario o implantario disponible",
    ],
    idealFor: [
      "Ausencias de una o varias piezas en un mismo tramo",
      "Pacientes con dientes pilares sanos o con implantes bien integrados",
      "Casos en los que una prótesis fija es una opción viable",
    ],
    process: CATEGORY_PROFILES["protesis-rehabilitacion"].process,
    faqs: [
      { question: "¿Un puente siempre necesita tallar dientes vecinos?", answer: "No siempre. Depende del tipo de puente. Algunos se apoyan en implantes en lugar de en dientes naturales." },
      { question: "¿Cuánto dura un puente bien hecho?", answer: "Depende del soporte, la higiene, el ajuste oclusal y el mantenimiento periódico." },
    ],
    beforeAfter: [
      { title: "Cierre de espacio unitario", description: "Recuperación de función y continuidad estética en una zona visible.", image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=900&q=80" },
      { title: "Rehabilitación posterior fija", description: "Soporte masticatorio restablecido con un puente planificado a medida.", image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=900&q=80" },
    ],
    origin: "showcase",
    pricingGroupSlug: "protesis-rehabilitacion",
    pricingGroupTitle: "Prótesis y rehabilitación",
    eyebrow: "Rehabilitación fija",
    detailIntro: "Un puente dental rellena el espacio de uno o más dientes ausentes. La clave está en valorar bien el soporte, la higiene posible y cómo se comportará la mordida a largo plazo.",
    detailImage: CATEGORY_PROFILES["protesis-rehabilitacion"].detailImage,
    detailImageAlt: CATEGORY_PROFILES["protesis-rehabilitacion"].detailImageAlt,
    trustPoints: [
      "No se indica sin revisar el estado de los dientes pilares",
      "Se planifica función, fonética y limpieza antes del laboratorio",
      "La revisión periódica alarga la vida del puente y del soporte",
    ],
    commonFaqs: CATEGORY_PROFILES["protesis-rehabilitacion"].commonFaqs,
    technicalFaqs: CATEGORY_PROFILES["protesis-rehabilitacion"].technicalFaqs,
    searchTerms: ["puente dental", "puentes", "pónticos", "rehabilitación fija", "ausencias dentales"],
  },
];

const EXACT_OVERRIDES: Record<string, Partial<TreatmentCatalogEntry>> = {
  "exploracion-aletas-de-mordida": {
    searchTerms: ["diagnóstico", "radiografías", "aletas de mordida", "exploración dental"],
  },
  lb: {
    description: "L.B es un concepto diagnóstico complementario dentro del estudio oral. Se explica de forma personalizada porque su indicación depende del hallazgo clínico y del protocolo utilizado en consulta.",
    shortDescription: "Prueba diagnóstica complementaria integrada en la valoración clínica.",
    benefits: [
      "Aporta información complementaria al diagnóstico",
      "Ayuda a ajustar el plan de tratamiento al contexto real del paciente",
      "Se integra con exploración e imagen cuando el caso lo requiere",
      "Evita decidir solo con una impresión superficial",
    ],
    idealFor: [
      "Casos que necesitan completar el estudio diagnóstico",
      "Pacientes con hallazgos que requieren registro adicional",
      "Situaciones donde la planificación exige más precisión inicial",
    ],
    process: [
      { title: "Valoración previa", description: "Definimos si este registro aporta valor dentro del estudio completo del caso." },
      { title: "Toma del registro", description: "Se realiza dentro de la visita diagnóstica siguiendo el protocolo del centro." },
      { title: "Interpretación", description: "El resultado se integra con la exploración y el resto de pruebas para tomar decisiones." },
    ],
    commonFaqs: [
      { question: "¿Para qué sirve este registro complementario?", answer: "Sirve para completar la información diagnóstica cuando una exploración simple no basta para decidir con seguridad." },
      { question: "¿Siempre se realiza?", answer: "No. Se indica solo cuando aporta valor clínico al caso concreto." },
    ],
    technicalFaqs: [
      { question: "¿Por qué no se interpreta de forma aislada?", answer: "Porque en odontología los registros tienen sentido cuando se cruzan con exploración, síntomas e imagen." },
      { question: "¿Puede cambiar el plan de tratamiento?", answer: "Sí, precisamente se solicita para afinar el diagnóstico y evitar decisiones precipitadas." },
    ],
  },
  rar: {
    name: "R.A.R · raspado y alisado radicular",
    searchTerms: ["R.A.R", "raspado", "alisado radicular", "deep cleaning", "encías"],
  },
  "rar-selectivo": {
    name: "R.A.R selectivo",
    searchTerms: ["R.A.R selectivo", "raspado selectivo", "periodoncia"],
  },
  "con-rpi": {
    description: "Tratamiento restaurador que incorpora un registro o control complementario según el caso clínico. Su alcance concreto se confirma durante la visita porque depende de la pieza y del objetivo restaurador.",
    shortDescription: "Restauración conservadora con apoyo diagnóstico complementario cuando el caso lo requiere.",
    searchTerms: ["RPI", "obturación con RPI", "restauración conservadora"],
  },
  implante: {
    description: "El implante dental sustituye la raíz de una pieza ausente con un soporte de titanio sobre el que después se rehabilita la corona definitiva.",
    searchTerms: ["implante dental", "tornillo dental", "pieza ausente", "implantología"],
  },
  "pilar-intermedio": {
    description: "El pilar intermedio conecta el implante con la futura restauración. Es una pieza protésica clave para estabilidad, sellado y adaptación de la corona o del puente.",
    shortDescription: "Componente protésico que conecta implante y restauración final.",
    searchTerms: ["abutment", "pilar sobre implante", "conexión protésica"],
  },
  barra: {
    description: "La barra es un componente de rehabilitación sobre implantes que ayuda a distribuir apoyo y estabilizar determinadas prótesis completas o sobredentaduras.",
    shortDescription: "Estructura protésica sobre implantes para mejorar soporte y estabilidad.",
    searchTerms: ["barra sobre implantes", "sobredentadura", "rehabilitación completa"],
  },
  base: {
    description: "La base protésica forma parte del diseño y soporte de determinadas prótesis removibles. Su indicación y precio dependen del plan rehabilitador completo.",
    shortDescription: "Elemento de soporte dentro de un plan protésico removible.",
    searchTerms: ["base protésica", "prótesis removible", "rehabilitación"],
  },
  esqueletico: {
    name: "Prótesis esquelética",
    description: "La prótesis esquelética es una prótesis parcial removible con estructura metálica diseñada para ganar resistencia, estabilidad y menor volumen.",
    shortDescription: "Prótesis parcial removible con armazón metálico y buena estabilidad.",
    searchTerms: ["esquelético", "prótesis parcial", "estructura metálica"],
  },
  provisionales: {
    description: "Los provisionales protegen dientes, encía e implantes mientras se termina la restauración definitiva. También permiten validar estética, función y adaptación.",
    shortDescription: "Restauraciones temporales para proteger y probar el plan definitivo.",
    searchTerms: ["provisional", "corona provisional", "fase temporal"],
  },
  encerado: {
    description: "El encerado diagnóstico traduce el plan restaurador a una maqueta clínica o de laboratorio. Sirve para prever forma, volumen, oclusión y secuencia antes de ejecutar el caso.",
    shortDescription: "Simulación diagnóstica que anticipa forma, volumen y función del resultado final.",
    searchTerms: ["encerado diagnóstico", "wax-up", "simulación estética"],
  },
  ponticos: {
    name: "Pónticos",
    description: "Los pónticos son las piezas artificiales que rellenan el espacio en un puente dental. Su diseño influye en estética, limpieza y apoyo de los tejidos.",
    shortDescription: "Elemento del puente dental que reemplaza el diente ausente.",
    searchTerms: ["pónticos", "puente dental", "diente intermedio"],
  },
  completa: {
    name: "Prótesis completa",
    description: "La prótesis completa sustituye una arcada sin dientes. El plan valora soporte, estabilidad, dimensión vertical y adaptación funcional antes de su entrega.",
    shortDescription: "Rehabilitación removible para arcadas totalmente edéntulas.",
    searchTerms: ["dentadura completa", "prótesis completa", "edéntulo total"],
  },
  myobrace: {
    description: "Myobrace es una aparatología funcional indicada en determinados pacientes en crecimiento para acompañar hábitos, respiración y desarrollo orofacial.",
    shortDescription: "Aparatología funcional infantil orientada a crecimiento y hábitos orales.",
    searchTerms: ["Myobrace", "ortodoncia infantil", "hábitos orales", "crecimiento"],
  },
  "lip-bumper": {
    name: "Lip-Bumper",
    description: "El Lip-Bumper es un aparato funcional usado en ortodoncia para gestionar espacio y la influencia muscular en casos seleccionados, normalmente durante crecimiento.",
    shortDescription: "Aparatología funcional para control muscular y manejo del espacio.",
    searchTerms: ["Lip-Bumper", "aparatología funcional", "ortodoncia infantil"],
  },
  pulpotomia: {
    searchTerms: ["pulpotomía", "baby root canal", "odontopediatría", "caries profunda"],
  },
  pulpectomia: {
    searchTerms: ["pulpectomía", "root canal infantil", "odontopediatría", "pieza temporal"],
  },
  "corona-de-zirconio": {
    description: "La corona de zirconio es una restauración fija pensada para combinar resistencia y estética, especialmente cuando hace falta cubrir toda la pieza.",
    shortDescription: "Corona fija de alta resistencia con acabado estético natural.",
    searchTerms: ["zirconio", "corona dental", "funda dental", "coronas"],
  },
};

function slugifyTreatmentName(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\+/g, " plus ")
    .replace(/&/g, " y ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function titleCasePreservingAcronyms(value: string) {
  return value
    .split(" ")
    .map((part) => (part.toUpperCase() === part ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join(" ");
}

function getCategoryProfile(groupSlug: string) {
  return CATEGORY_PROFILES[groupSlug] ?? CATEGORY_PROFILES["protesis-rehabilitacion"];
}

function pickSearchTerms(name: string, groupTitle: string, extra: string[] = []) {
  const base = [name, groupTitle, name.toLowerCase(), groupTitle.toLowerCase()];
  return Array.from(new Set([...base, ...extra]));
}

function buildProcessForComponent(name: string): ProcessStep[] {
  return [
    { title: "Valoración del caso", description: `Revisamos si ${name.toLowerCase()} forma parte del plan más adecuado para tu situación clínica y restauradora.` },
    { title: "Planificación coordinada", description: "Definimos cómo encaja dentro de la secuencia diagnóstica, quirúrgica o protésica del tratamiento global." },
    { title: "Integración clínica", description: "Se ejecuta en el momento correcto para que el conjunto funcione con estabilidad, ajuste y buena higiene." },
  ];
}

function buildEntryFromPricingItem(groupSlug: string, groupTitle: string, itemName: string, price: number | string | null): TreatmentCatalogEntry {
  const slug = slugifyTreatmentName(itemName);
  const profile = getCategoryProfile(groupSlug);
  const lower = itemName.toLowerCase();
  const isComponent = ["l.b", "base", "barra", "esquel", "encerado", "provisionales", "suplemento", "pilar", "retención", "rebase", "estructura", "con rpi", "pistas de composite"].some((token) => lower.includes(token));

  const generated: TreatmentCatalogEntry = {
    slug,
    name: titleCasePreservingAcronyms(itemName),
    category: groupTitle,
    startingPrice: price,
    shortDescription: `${titleCasePreservingAcronyms(itemName)} dentro de un protocolo clínico planificado y explicado con claridad.`,
    description: isComponent
      ? `${titleCasePreservingAcronyms(itemName)} suele formar parte de un plan clínico o protésico más amplio. Se indica cuando aporta estabilidad, control o personalización al tratamiento global.`
      : `${titleCasePreservingAcronyms(itemName)} se indica según diagnóstico, pronóstico y objetivos funcionales o estéticos. La propuesta final siempre se adapta a la biología, la mordida y el contexto real del paciente.`,
    heroImage: profile.heroImage,
    heroAlt: profile.heroAlt,
    benefits: isComponent
      ? [
          "Aporta precisión dentro del plan global de tratamiento",
          "Permite personalizar la fase restauradora o diagnóstica",
          "Mejora control, ajuste o estabilidad según el caso",
          "Se integra con una secuencia clínica coordinada",
        ]
      : profile.benefits.map((benefit, index) => index === 0 ? `${benefit.replace(/^Ayuda a |^Permite |^Recupera |^Mejora /, "") ? benefit : benefit}` : benefit),
    idealFor: isComponent
      ? [
          `Pacientes cuyo plan incluye ${itemName.toLowerCase()} como parte de una fase específica`,
          "Casos en los que conviene afinar soporte, registro o estabilidad",
          "Tratamientos que requieren coordinación entre clínica y laboratorio",
        ]
      : profile.idealFor.map((text, index) => index === 0 ? text : text),
    process: isComponent ? buildProcessForComponent(itemName) : profile.process,
    faqs: profile.commonFaqs,
    beforeAfter: [
      {
        title: `${titleCasePreservingAcronyms(itemName)} · caso planificado`,
        description: isComponent ? "Intervención integrada dentro de un plan global coordinado para mejorar ajuste y resultado." : `Aplicación de ${itemName.toLowerCase()} dentro de un protocolo personalizado según diagnóstico.`,
        image: profile.detailImage,
      },
      {
        title: "Seguimiento clínico", description: "La revisión posterior ayuda a comprobar adaptación, estabilidad y mantenimiento del resultado.", image: profile.heroImage,
      },
    ],
    origin: "pricing",
    pricingGroupSlug: groupSlug,
    pricingGroupTitle: groupTitle,
    eyebrow: profile.eyebrow,
    detailIntro: isComponent
      ? `${titleCasePreservingAcronyms(itemName)} no suele explicarse bien cuando se presenta solo como una línea de presupuesto. En realidad, es una pieza del plan clínico que puede ser clave para lograr un resultado estable, cómodo y duradero.`
      : `${titleCasePreservingAcronyms(itemName)} se estudia siempre en contexto. La indicación correcta depende del estado del diente o del tejido, del pronóstico y de cómo encaja con el resto del tratamiento.`,
    detailImage: profile.detailImage,
    detailImageAlt: profile.detailImageAlt,
    trustPoints: profile.trustPoints,
    commonFaqs: profile.commonFaqs,
    technicalFaqs: profile.technicalFaqs,
    searchTerms: pickSearchTerms(itemName, groupTitle),
  };

  return { ...generated, ...(EXACT_OVERRIDES[slug] ?? {}) };
}

const enrichedFeatured = treatments.map<TreatmentCatalogEntry>((treatment) => {
  const groupSlug =
    treatment.slug.includes("implante") ? "cirugia-implantologia" :
    treatment.slug.includes("ortodoncia") ? "ortodoncia" :
    treatment.slug.includes("carilla") || treatment.slug.includes("blanqueamiento") || treatment.slug.includes("estetica") ? "estetica-dental" :
    treatment.slug.includes("endodoncia") || treatment.slug.includes("conservadora") ? "conservadora-endodoncia" :
    treatment.slug.includes("periodoncia") || treatment.slug.includes("higiene") ? "diagnostico-periodoncia" :
    treatment.slug.includes("odontopediatria") ? "odontopediatria" :
    treatment.slug.includes("protesis") ? "protesis-rehabilitacion" :
    "protesis-rehabilitacion";

  const profile = getCategoryProfile(groupSlug);

  return {
    ...treatment,
    origin: "featured",
    pricingGroupSlug: groupSlug,
    pricingGroupTitle: treatment.category,
    eyebrow: profile.eyebrow,
    detailIntro: `${treatment.description} Nuestro enfoque parte de diagnóstico, indicación honesta y una ejecución medida para priorizar salud, función y naturalidad.`,
    detailImage: profile.detailImage,
    detailImageAlt: profile.detailImageAlt,
    trustPoints: profile.trustPoints,
    commonFaqs: treatment.faqs,
    technicalFaqs: profile.technicalFaqs,
    searchTerms: pickSearchTerms(treatment.name, treatment.category, [treatment.slug, ...treatment.benefits]),
  };
});

const generatedFromPricing = pricingGroups.flatMap((group) =>
  group.items.map((item) => buildEntryFromPricingItem(group.slug, group.title, item.name, item.price)),
);

const catalogMap = new Map<string, TreatmentCatalogEntry>();

for (const entry of [...generatedFromPricing, ...SHOWCASE_TREATMENTS, ...enrichedFeatured]) {
  const existing = catalogMap.get(entry.slug);
  if (!existing || entry.origin === "featured") {
    catalogMap.set(entry.slug, entry);
  }
}

export const treatmentCatalog = Array.from(catalogMap.values());

const pricingEntryMap = new Map<string, TreatmentCatalogEntry>();
for (const entry of treatmentCatalog) {
  if (entry.pricingGroupSlug && entry.origin !== "featured") {
    pricingEntryMap.set(`${entry.pricingGroupSlug}::${entry.name.toLowerCase()}`, entry);
  }
}
for (const group of pricingGroups) {
  for (const item of group.items) {
    const key = `${group.slug}::${titleCasePreservingAcronyms(item.name).toLowerCase()}`;
    const fallbackKey = `${group.slug}::${item.name.toLowerCase()}`;
    if (!pricingEntryMap.has(key) && pricingEntryMap.has(fallbackKey)) {
      pricingEntryMap.set(key, pricingEntryMap.get(fallbackKey)!);
    }
  }
}

export function getTreatmentBySlug(slug: string) {
  return treatmentCatalog.find((item) => item.slug === slug);
}

export function getTreatmentHrefByPricingItem(groupSlug: string, itemName: string) {
  const normalized = `${groupSlug}::${itemName.toLowerCase()}`;
  const titleKey = `${groupSlug}::${titleCasePreservingAcronyms(itemName).toLowerCase()}`;
  const entry = pricingEntryMap.get(normalized) ?? pricingEntryMap.get(titleKey);
  return entry ? `/tratamientos/${entry.slug}` : `/tratamientos/${slugifyTreatmentName(itemName)}`;
}

export function getFeaturedTreatmentBySlug(slug: string) {
  return treatmentCatalog.find((item) => item.slug === slug && item.origin === "featured") ?? getTreatmentBySlug(slug);
}

export { slugifyTreatmentName };
