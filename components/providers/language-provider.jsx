"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const translations = {
  es: {
    locale: "es-MX",
    metaTitle:
      "PRIORITY Freight Intelligence | Inteligencia logística para decisiones más inteligentes",
    metaDescription:
      "PRIORITY combina experiencia humana, asesoría estratégica y ejecución multimodal para optimizar operaciones logísticas entre México, Estados Unidos y Canadá.",
    brandSubtitle: "Inteligencia Logística",
    languageLabel: "Idioma",
    nav: {
      home: "Inicio",
      positioning: "Enfoque",
      services: "Servicios",
      methodology: "Metodología",
      impact: "Ventajas",
      presentation: "Presentacion de servicios",
      presentationShort: "Presentacion",
      contact: "Contacto",
      login: "LOGIN",
      quote: "Solicitar cotización",
      quoteShort: "Cotizar",
      toggle: "Abrir navegación",
    },
    hero: {
      eyebrow: "PRIORITY Freight Intelligence",
      title: "No solo movemos carga. Diseñamos decisiones logísticas más inteligentes.",
      description:
        "Combinamos experiencia humana, análisis operativo y ejecución multimodal para que importadores, exportadores y equipos de supply chain operen con más claridad, mejor criterio y una red más confiable.",
      primaryCta: "Hablar con un asesor",
      secondaryCta: "Ver presentación",
      tagline: "SMARTER • BETTER • FASTER",
      signals: [
        {
          title: "Asesoría real",
          copy: "Analizamos la prioridad del embarque antes de recomendar una ruta, un modo o una tarifa.",
        },
        {
          title: "Visibilidad operativa",
          copy: "Acompañamos la operación con seguimiento cercano, contexto y respuesta durante todo el trayecto.",
        },
        {
          title: "Cobertura estratégica",
          copy: "Diseñado para operaciones entre México, Estados Unidos y Canadá con enfoque práctico y continuidad.",
        },
      ],
      visualKicker: "Freight Intelligence Layer",
      visualFocusLabel: "Cobertura foco",
      visualFocusValue: "MEX • USA • CAN",
      visualLabels: ["Ocean", "Ground", "Air"],
      proofs: [
        { label: "Cobertura foco", value: "MEX • USA • CAN" },
        { label: "Modelo", value: "Asesoría antes de vender" },
        { label: "Seguimiento", value: "Personalizado y continuo" },
      ],
      visualSignals: [
        "Advisory first",
        "Multimodal execution",
        "Operational continuity",
      ],
    },
    positioning: {
      eyebrow: "Posicionamiento",
      title: "Una nueva generación de operador logístico.",
      intro:
        "PRIORITY Freight Intelligence no se presenta como un proveedor de transporte más. Nos posicionamos como un socio que entiende la operación del cliente, analiza su cadena de suministro y recomienda la mejor solución según la urgencia, el contexto y el objetivo real del embarque.",
      body:
        "El problema del freight tradicional es que suele reaccionar al movimiento. Nosotros partimos del análisis: qué necesita la operación, qué nivel de riesgo existe, qué impacto tiene el timing y qué configuración entrega más valor al cliente.",
      highlight:
        "Transportar es importante. Optimizar la operación del cliente es lo que realmente nos diferencia.",
      pills: [
        "Importadores y exportadores",
        "Seguimiento personalizado",
        "Cobertura Norteamérica",
      ],
      comparison: {
        leftTitle: "Freight forwarding tradicional",
        rightTitle: "PRIORITY Freight Intelligence",
        leftItems: [
          "Enfoque centrado en mover carga.",
          "Servicio reactivo y menos consultivo.",
          "Menor análisis estratégico previo a cotizar.",
          "La conversación gira alrededor de tarifa y disponibilidad.",
        ],
        rightItems: [
          "Analizamos la operación antes de proponer.",
          "Asesoramos según la prioridad real del embarque.",
          "Acompañamos con seguimiento cercano y criterio operativo.",
          "Capacitamos, agregamos valor y mejoramos decisiones futuras.",
        ],
        quote:
          "Tu operación necesita más que transporte. Necesita criterio, servicio y soluciones inteligentes.",
      },
    },
    services: {
      eyebrow: "Portafolio principal",
      title: "Servicios principales construidos para operar con claridad.",
      description:
        "Las fichas visuales ya muestran el detalle operativo. Aquí usamos la imagen como protagonista para que el portafolio se entienda de un vistazo.",
      sheetLabel: "Ficha visual",
      carouselLabel: "Carrusel de servicios",
      previous: "Anterior",
      next: "Siguiente",
      autoplay: "Rotación automática",
      details: "Resumen",
      focusLabel: "Enfoque PRIORITY",
      fitLabel: "Ideal para",
      regionLabel: "Cobertura",
      solutionLabel: "Solución consultiva",
      monitoringLabel: "Seguimiento cercano",
      additionalEyebrow: "Servicios adicionales",
      additionalTitle: "Valor agregado que va más allá del transporte.",
      additionalDescription:
        "Además del movimiento principal de carga, PRIORITY ofrece servicios complementarios para proteger la operación, capacitar al cliente y fortalecer decisiones futuras.",
      additionalItems: [
        {
          title: "Seguro de carga",
          copy: "Cobertura adicional para embarques sensibles o de alto valor donde la gestión del riesgo es crítica.",
        },
        {
          title: "Capacitaciones gratuitas",
          copy: "Entrenamiento práctico para el personal del cliente en temas de operación, transporte y mejores criterios logísticos.",
        },
        {
          title: "Búsqueda de proveedores",
          copy: "Apoyo estratégico para identificar nuevos proveedores por fracción arancelaria y fortalecer la cadena de suministro.",
        },
        {
          title: "Soporte estratégico continuo",
          copy: "Seguimiento cercano, resolución de dudas y acompañamiento operativo más allá de una sola cotización o embarque.",
        },
      ],
      items: [
        {
          code: "LCL",
          title: "Consolidado Marítimo",
          subtitle: "Eficiencia de costo para cargas que no requieren contenedor completo.",
          detail:
            "Analizamos la naturaleza del embarque, los tiempos requeridos y la frecuencia de operación para que el consolidado sea una ventaja y no una limitante.",
          fit: "Importaciones y exportaciones recurrentes con foco en eficiencia.",
          region: "Rutas marítimas internacionales con integración inland.",
          alt: "Ficha visual del servicio consolidado marítimo LCL.",
        },
        {
          code: "LTL",
          title: "Consolidado Terrestre MEX-USA-CAN",
          subtitle: "Movimiento transfronterizo flexible para cargas parciales con control operativo.",
          detail:
            "Revisamos urgencia, ventana de entrega, perfil del cliente y condiciones de la mercancía para recomendar la mejor configuración terrestre compartida.",
          fit: "Operaciones frecuentes con volumen intermedio y necesidad de flexibilidad.",
          region: "México, Estados Unidos y Canadá.",
          alt: "Ficha visual del servicio consolidado terrestre LTL.",
        },
        {
          code: "FTL",
          title: "Transporte Dedicado FTL",
          subtitle: "Capacidad completa para embarques críticos, sensibles o de mayor volumen.",
          detail:
            "Recomendamos FTL cuando la operación justifica velocidad, menor manipulación y mayor control sobre la continuidad de la cadena.",
          fit: "Embarques urgentes, sensibles o con requerimientos dedicados.",
          region: "México, Estados Unidos y Canadá.",
          alt: "Ficha visual del servicio terrestre FTL.",
        },
        {
          code: "DRAYAGE",
          title: "Arrastre de Contenedores",
          subtitle: "Continuidad entre puerto, terminal, almacén y destino final con coordinación dedicada.",
          detail:
            "Monitoreamos hitos críticos para evitar cuellos de botella y asegurar que la operación portuaria mantenga ritmo y visibilidad.",
          fit: "Operaciones marítimas que necesitan control puntual en sus enlaces terrestres.",
          region: "Puertos, terminales, almacenes y destino final.",
          alt: "Ficha visual del servicio de arrastre de contenedores.",
        },
        {
          code: "AIR",
          title: "Carga Aérea",
          subtitle: "Respuesta premium para embarques urgentes o de alto valor.",
          detail:
            "Evaluamos si la carga aérea realmente aporta la mejor decisión en términos de impacto, costo y prioridad comercial del embarque.",
          fit: "Urgencias, mercancía sensible y operaciones donde el tiempo cambia el resultado.",
          region: "Rutas aéreas internacionales con coordinación dedicada.",
          alt: "Ficha visual del servicio de carga aérea.",
        },
      ],
    },
    methodology: {
      eyebrow: "Cómo trabajamos",
      title: "Una metodología que mezcla análisis, ejecución y mejora continua.",
      description:
        "Nuestro modelo no termina cuando sale una unidad o se embarca un contenedor. Empezamos entendiendo la operación, ejecutamos con disciplina y regresamos con recomendaciones para operar mejor la siguiente vez.",
      note:
        "La meta es simple: que el cliente no solo resuelva un movimiento, sino que fortalezca su operación con cada embarque.",
      outcomes: [
        {
          title: "Diagnóstico",
          copy: "Evaluamos urgencia, costo, timing, riesgo y objetivo comercial antes de definir la solución.",
        },
        {
          title: "Ejecución",
          copy: "Coordinamos la operación con visibilidad, comunicación clara y seguimiento personalizado.",
        },
        {
          title: "Mejora",
          copy: "Identificamos oportunidades para optimizar futuras decisiones logísticas y reducir fricción operativa.",
        },
      ],
      steps: [
        {
          title: "Entendemos la operación",
          copy: "Analizamos el contexto del cliente, la importancia del embarque y la estructura de su cadena de suministro antes de cotizar o mover una unidad.",
        },
        {
          title: "Diagnosticamos la mejor alternativa",
          copy: "Comparamos modo, costo, tiempo de tránsito y nivel de riesgo para recomendar la solución que realmente conviene.",
        },
        {
          title: "Ejecutamos con visibilidad y servicio",
          copy: "Damos seguimiento cercano, soporte continuo y comunicación clara durante toda la operación para reducir incertidumbre.",
        },
        {
          title: "Aportamos mejora continua",
          copy: "Capacitamos, asesoramos y detectamos oportunidades para que la siguiente operación sea más eficiente que la anterior.",
        },
      ],
    },
    impact: {
      eyebrow: "Beneficios para el cliente",
      title: "Convertimos la logística en una ventaja competitiva.",
      description:
        "Cuando la operación tiene criterio, visibilidad y servicio, el freight deja de ser una fricción y empieza a convertirse en una plataforma de crecimiento.",
      quote:
        "No solo movemos carga. Ayudamos a que el cliente opere mejor.",
      benefits: [
        {
          title: "Mejor visibilidad",
          copy: "Más contexto sobre hitos, cambios y decisiones relevantes para que el equipo del cliente tenga claridad operativa.",
        },
        {
          title: "Optimización de rutas y costos",
          copy: "Mejores combinaciones de modo, prioridad y timing para balancear servicio y rentabilidad.",
        },
        {
          title: "Mayor confianza operativa",
          copy: "Procesos más estables, seguimiento cercano y menos dependencia de reacciones de último minuto.",
        },
        {
          title: "Soporte consultivo",
          copy: "Un equipo que asesora, responde y acompaña, en lugar de limitarse a ejecutar movimientos.",
        },
      ],
      extraTitle: "Valor agregado",
      extras: [
        "Capacitaciones",
        "Análisis estratégico",
        "Seguimiento personalizado",
        "Criterio operativo",
      ],
    },
    cta: {
      eyebrow: "Contacto",
      title: "Hablemos de tu operación y propongamos la mejor solución.",
      description:
        "Si tu empresa necesita más visibilidad, mejor acompañamiento y decisiones logísticas más inteligentes, PRIORITY está listo para ayudarte.",
      connectLine:
        "Comunícate con ventas o con operaciones por teléfono, correo o WhatsApp según el tipo de apoyo que necesites.",
      sales: "Ventas",
      office: "Oficina",
      phoneLabel: "Teléfono",
      emailLabel: "Correo",
      whatsapp: "WhatsApp",
      presentation: "Presentacion de servicios",
      secondary: "Volver arriba",
    },
    footer: {
      description:
        "Inteligencia logística para empresas que necesitan criterio, visibilidad y una operación más confiable entre México, Estados Unidos y Canadá.",
      positioning: "Enfoque",
      services: "Servicios",
      methodology: "Metodología",
      impact: "Ventajas",
      presentation: "Presentacion",
      contact: "Contacto",
    },
  },
  en: {
    locale: "en",
    metaTitle:
      "PRIORITY Freight Intelligence | Logistics intelligence for smarter decisions",
    metaDescription:
      "PRIORITY combines human expertise, strategic advisory and multimodal execution to optimize freight operations across Mexico, the United States and Canada.",
    brandSubtitle: "Freight Intelligence",
    languageLabel: "Language",
    nav: {
      home: "Home",
      positioning: "Approach",
      services: "Services",
      methodology: "Methodology",
      impact: "Benefits",
      presentation: "Services Presentation",
      presentationShort: "Presentation",
      contact: "Contact",
      login: "LOGIN",
      quote: "Request Quote",
      quoteShort: "Quote",
      toggle: "Toggle navigation",
    },
    hero: {
      eyebrow: "PRIORITY Freight Intelligence",
      title: "We do more than move freight. We design smarter logistics decisions.",
      description:
        "We combine human expertise, operational analysis and multimodal execution so importers, exporters and supply chain teams can operate with more clarity, better judgment and a more reliable network.",
      primaryCta: "Talk to an advisor",
      secondaryCta: "View presentation",
      tagline: "SMARTER • BETTER • FASTER",
      signals: [
        {
          title: "Real advisory",
          copy: "We evaluate shipment priority before recommending a route, a mode or a quote.",
        },
        {
          title: "Operational visibility",
          copy: "We stay close to the move with context, follow-through and responsive support across the trip.",
        },
        {
          title: "Strategic coverage",
          copy: "Built for operations across Mexico, the United States and Canada with practical continuity.",
        },
      ],
      visualKicker: "Freight Intelligence Layer",
      visualFocusLabel: "Core coverage",
      visualFocusValue: "MEX • USA • CAN",
      visualLabels: ["Ocean", "Ground", "Air"],
      proofs: [
        { label: "Core coverage", value: "MEX • USA • CAN" },
        { label: "Model", value: "Advise before selling" },
        { label: "Follow-up", value: "Personalized and continuous" },
      ],
      visualSignals: [
        "Advisory first",
        "Multimodal execution",
        "Operational continuity",
      ],
    },
    positioning: {
      eyebrow: "Positioning",
      title: "A new generation logistics operator.",
      intro:
        "PRIORITY Freight Intelligence is not introduced as just another transportation provider. We position ourselves as a partner that understands the client operation, analyzes the supply chain and recommends the best solution based on urgency, context and the real objective behind the shipment.",
      body:
        "The problem with traditional forwarding is that it often reacts to movement. We start with analysis: what the operation really needs, what level of risk exists, how timing changes the outcome and which setup creates the most value.",
      highlight:
        "Transport matters. Improving the client operation is what truly sets us apart.",
      pills: [
        "Importers and exporters",
        "Personalized follow-up",
        "North America coverage",
      ],
      comparison: {
        leftTitle: "Traditional freight forwarding",
        rightTitle: "PRIORITY Freight Intelligence",
        leftItems: [
          "Focused on moving freight.",
          "More reactive than consultative.",
          "Less strategic analysis before quoting.",
          "The conversation revolves around rate and availability.",
        ],
        rightItems: [
          "We analyze the operation before proposing.",
          "We advise according to the real priority of the shipment.",
          "We stay close with follow-through and operating judgment.",
          "We train, add value and improve future decisions.",
        ],
        quote:
          "Your operation needs more than transportation. It needs judgment, service and intelligent solutions.",
      },
    },
    services: {
      eyebrow: "Core portfolio",
      title: "Core services built for clarity and execution.",
      description:
        "The visual sheets already carry the operational detail. Here the image leads so the portfolio is understood at a glance.",
      sheetLabel: "Visual sheet",
      carouselLabel: "Services carousel",
      previous: "Previous",
      next: "Next",
      autoplay: "Autoplay rotation",
      details: "Summary",
      focusLabel: "PRIORITY approach",
      fitLabel: "Best fit",
      regionLabel: "Coverage",
      solutionLabel: "Consultative solution",
      monitoringLabel: "Close follow-up",
      additionalEyebrow: "Additional services",
      additionalTitle: "Added value beyond the core shipment.",
      additionalDescription:
        "Beyond the main freight move, PRIORITY also offers complementary services that protect the operation, train the client team and support better decisions over time.",
      additionalItems: [
        {
          title: "Cargo insurance",
          copy: "Additional protection for sensitive or higher-value shipments where risk management matters.",
        },
        {
          title: "Free training",
          copy: "Practical training for client teams around transport, operations and stronger logistics decision-making.",
        },
        {
          title: "Supplier sourcing support",
          copy: "Strategic help identifying new suppliers by tariff classification to strengthen the supply chain.",
        },
        {
          title: "Ongoing strategic support",
          copy: "Close follow-up, question resolution and operating guidance beyond a single quote or shipment.",
        },
      ],
      items: [
        {
          code: "LCL",
          title: "Ocean Consolidation",
          subtitle: "Cost efficiency for freight that does not require a full container.",
          detail:
            "We assess shipment nature, timing requirements and operating frequency so consolidation becomes an advantage instead of a constraint.",
          fit: "Recurring import and export programs focused on efficiency.",
          region: "International ocean lanes with inland integration.",
          alt: "Visual service sheet for ocean consolidation LCL.",
        },
        {
          code: "LTL",
          title: "Ground Consolidation MEX-USA-CAN",
          subtitle: "Flexible cross-border movement for partial freight with operating control.",
          detail:
            "We review urgency, delivery window, client profile and cargo conditions to recommend the right shared ground setup.",
          fit: "Frequent operations with mid-volume freight and flexibility needs.",
          region: "Mexico, United States and Canada.",
          alt: "Visual service sheet for cross-border LTL freight.",
        },
        {
          code: "FTL",
          title: "Dedicated FTL",
          subtitle: "Full capacity for critical, sensitive or higher-volume shipments.",
          detail:
            "We recommend FTL when the operation truly requires speed, less handling and tighter continuity across the chain.",
          fit: "Urgent, sensitive or dedicated-capacity shipments.",
          region: "Mexico, United States and Canada.",
          alt: "Visual service sheet for full truckload FTL service.",
        },
        {
          code: "DRAYAGE",
          title: "Container Drayage",
          subtitle: "Continuity from port and terminal to warehouse and final destination.",
          detail:
            "We monitor critical milestones to avoid bottlenecks and make sure port-side execution keeps pace and visibility.",
          fit: "Ocean operations that need tighter control across inland links.",
          region: "Ports, terminals, warehouses and final destination.",
          alt: "Visual service sheet for container drayage.",
        },
        {
          code: "AIR",
          title: "Air Freight",
          subtitle: "Premium response for urgent or high-value shipments.",
          detail:
            "We evaluate whether air freight is truly the best decision in terms of impact, cost and shipment priority.",
          fit: "Urgent, sensitive or time-critical commercial moves.",
          region: "International air lanes with dedicated coordination.",
          alt: "Visual service sheet for air freight service.",
        },
      ],
    },
    methodology: {
      eyebrow: "How we work",
      title: "A methodology built on analysis, execution and continuous improvement.",
      description:
        "Our model does not end when a truck departs or a container is booked. We begin by understanding the operation, execute with discipline and come back with recommendations for the next move.",
      note:
        "The goal is simple: the client should not just solve one shipment, but strengthen the whole operation every time.",
      outcomes: [
        {
          title: "Diagnosis",
          copy: "We evaluate urgency, cost, timing, risk and business objective before defining the solution.",
        },
        {
          title: "Execution",
          copy: "We coordinate the move with visibility, clear communication and close operational follow-up.",
        },
        {
          title: "Improvement",
          copy: "We identify opportunities to optimize future decisions and remove operating friction over time.",
        },
      ],
      steps: [
        {
          title: "We understand the operation",
          copy: "We analyze client context, shipment importance and supply chain structure before quoting or dispatching a unit.",
        },
        {
          title: "We diagnose the best alternative",
          copy: "We compare mode, cost, transit time and risk level to recommend the option that truly fits.",
        },
        {
          title: "We execute with visibility and service",
          copy: "We provide close follow-through, continuous support and clear communication throughout the move to reduce uncertainty.",
        },
        {
          title: "We bring continuous improvement",
          copy: "We train, advise and surface new opportunities so the next shipment runs better than the last one.",
        },
      ],
    },
    impact: {
      eyebrow: "Client benefits",
      title: "We turn logistics into a competitive advantage.",
      description:
        "When operations have judgment, visibility and service, freight stops being a friction point and starts becoming a growth platform.",
      quote: "We do more than move freight. We help clients operate better.",
      benefits: [
        {
          title: "Better visibility",
          copy: "More context around milestones, changes and relevant decisions so client teams can operate with clarity.",
        },
        {
          title: "Route and cost optimization",
          copy: "Better combinations of mode, priority and timing to balance service quality with freight economics.",
        },
        {
          title: "Higher operating confidence",
          copy: "More stable processes, close follow-up and less dependence on last-minute reactions.",
        },
        {
          title: "Consultative support",
          copy: "A team that advises, responds and stays involved instead of simply moving freight from point A to B.",
        },
      ],
      extraTitle: "Added value",
      extras: [
        "Training",
        "Strategic analysis",
        "Personalized follow-up",
        "Operational judgment",
      ],
    },
    cta: {
      eyebrow: "Contact",
      title: "Let’s review your operation and propose the right solution.",
      description:
        "If your business needs better visibility, stronger follow-through and smarter logistics decisions, PRIORITY is ready to help.",
      connectLine:
        "Reach our sales or operations team by phone, email or WhatsApp depending on the kind of support you need.",
      sales: "Sales",
      office: "Office",
      phoneLabel: "Phone",
      emailLabel: "Email",
      whatsapp: "WhatsApp",
      presentation: "Services Presentation",
      secondary: "Back to Top",
    },
    footer: {
      description:
        "Logistics intelligence for companies that need judgment, visibility and more reliable operations across Mexico, the United States and Canada.",
      positioning: "Approach",
      services: "Services",
      methodology: "Methodology",
      impact: "Benefits",
      presentation: "Presentation",
      contact: "Contact",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("priority-language");
      if (stored && translations[stored]) {
        setLanguage(stored);
      }
    } catch {
      // Ignore persistence errors and keep default language.
    }
  }, []);

  useEffect(() => {
    const copy = translations[language];
    document.documentElement.lang = copy.locale;
    document.title = copy.metaTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", copy.metaDescription);
    }

    try {
      window.localStorage.setItem("priority-language", language);
    } catch {
      // Ignore persistence errors and keep UI responsive.
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
