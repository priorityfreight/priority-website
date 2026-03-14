import Link from "next/link";

import { PriorityLogo } from "@/components/brand/priority-logo";
import { SlideNav } from "@/components/presentation/slide-nav";
import { SlideShell } from "@/components/presentation/slide-shell";
import { BackgroundNetwork } from "@/components/ui/background-network";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Presentacion Comercial | PRIORITY Freight Intelligence",
  description:
    "Deck comercial de PRIORITY Freight Intelligence para presentar servicios, propuesta de valor y diferenciadores logísticos.",
};

const slideItems = [
  { id: "portada", label: "Portada" },
  { id: "quienes-somos", label: "Quienes somos" },
  { id: "posicionamiento", label: "Posicionamiento" },
  { id: "propuesta-valor", label: "Propuesta de valor" },
  { id: "servicios", label: "Servicios principales" },
  { id: "servicios-adicionales", label: "Servicios adicionales" },
  { id: "metodologia", label: "Como trabajamos" },
  { id: "beneficios", label: "Beneficios" },
  { id: "diferenciadores", label: "Diferenciadores" },
  { id: "cierre", label: "Cierre comercial" },
];

const coreServices = [
  {
    name: "Consolidado Maritimo",
    summary:
      "Solucion eficiente para cargas que no requieren contenedor completo, con control operativo y optimizacion de costo.",
  },
  {
    name: "Consolidado Terrestre MEX-USA-CAN",
    summary:
      "Movimiento transfronterizo para cargas parciales con visibilidad, flexibilidad y enfoque en cumplimiento.",
  },
  {
    name: "FTL MEX-USA-CAN",
    summary:
      "Capacidad dedicada para embarques criticos, sensibles o de mayor volumen que requieren mayor control.",
  },
  {
    name: "Arrastre de Contenedores",
    summary:
      "Coordinacion terrestre entre puerto, terminal, almacen y destino final para mantener continuidad operacional.",
  },
  {
    name: "Carga Aerea",
    summary:
      "Respuesta agil para embarques urgentes o de alto valor donde el tiempo impacta directamente al negocio.",
  },
];

const extraServices = [
  "Seguro de carga",
  "Capacitaciones gratuitas para personal del cliente",
  "Busqueda de nuevos proveedores por fraccion arancelaria",
  "Seguimiento personalizado",
];

const differentiators = [
  "Analizamos la cadena de suministro antes de proponer una solucion.",
  "Asesoramos al cliente segun la prioridad real del embarque.",
  "No solo vendemos transporte: acompanamos, capacitamos y mejoramos procesos.",
  "Combinamos experiencia humana con enfoque de inteligencia logistica.",
];

export default function PresentacionPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#07152C_0%,#0B1F3B_45%,#07152C_100%)] text-white">
      <BackgroundNetwork className="top-0 h-[1200px] text-white/10" />

      <div className="relative z-10 flex">
        <SlideNav items={slideItems} />

        <main className="flex-1">
          <SlideShell
            id="portada"
            index={1}
            eyebrow="PRIORITY Freight Intelligence"
            title="Presentacion comercial de servicios"
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
              <div className="max-w-3xl">
                <PriorityLogo className="mb-10" subtitle="Freight Intelligence" />
                <p className="max-w-3xl text-balance text-xl leading-9 text-white/76 sm:text-2xl">
                  Logistica internacional mas inteligente para empresas que
                  necesitan eficiencia, visibilidad, asesoria y soluciones
                  reales para mover mercancias hacia USA y CAN.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button href="#quienes-somos">Ver presentacion</Button>
                  <Button href="/" variant="secondary">
                    Volver al sitio
                  </Button>
                </div>
                <p className="mt-8 text-sm font-medium uppercase tracking-[0.42em] text-white/56">
                  SMARTER • BETTER • FASTER
                </p>
              </div>

              <div className="surface-dark overflow-hidden p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
                    Idea fuerza
                  </span>
                  <PriorityLogo showWordmark={false} className="scale-[0.82]" />
                </div>
                <p className="text-2xl font-medium leading-10 text-white/90">
                  Tu carga es nuestra prioridad, tu cliente es nuestra prioridad
                  y nosotros te priorizamos a ti asesorandote y dandote la mejor
                  solucion segun tus necesidades.
                </p>
              </div>
            </div>
          </SlideShell>

          <SlideShell
            id="quienes-somos"
            index={2}
            eyebrow="Quienes somos"
            title="Una empresa logistica construida entre operacion, asesoria e inteligencia"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="surface-card p-8">
                <p className="text-lg leading-9 text-white/74">
                  PRIORITY Freight Intelligence es una empresa de logistica
                  internacional enfocada en optimizar la mercancia de sus
                  clientes mediante servicio especializado, analisis
                  estrategico y soluciones logisticas mas eficientes.
                </p>
                <p className="mt-6 text-lg leading-9 text-white/74">
                  No nos presentamos solo como un proveedor de transporte. Nos
                  posicionamos como un socio que entiende la operacion del
                  cliente, analiza su cadena de suministro y propone la mejor
                  solucion segun la importancia, urgencia y contexto de cada
                  embarque.
                </p>
              </div>

              <div className="surface-dark p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
                    Mensaje central
                  </span>
                  <PriorityLogo showWordmark={false} className="scale-[0.72]" />
                </div>
                <p className="mt-6 text-3xl font-semibold leading-tight text-white">
                  El transporte internacional puede ser mas inteligente cuando
                  se combina experiencia logistica, asesoria y analisis de
                  datos.
                </p>
              </div>
            </div>
          </SlideShell>

          <SlideShell
            id="posicionamiento"
            index={3}
            eyebrow="Posicionamiento"
            title="No somos un forwarder tradicional. Somos una capa de inteligencia logistica."
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="surface-card p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/46">
                  Freight forwarding tradicional
                </p>
                <ul className="mt-6 space-y-4 text-lg leading-8 text-white/66">
                  <li>Operacion centrada en mover carga.</li>
                  <li>Menor analisis estrategico.</li>
                  <li>Servicio mas reactivo que consultivo.</li>
                  <li>Enfoque comercial basado en tarifa y disponibilidad.</li>
                </ul>
              </div>

              <div className="surface-dark p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/46">
                  PRIORITY Freight Intelligence
                </p>
                <ul className="mt-6 space-y-4 text-lg leading-8 text-white/82">
                  <li>Analizamos antes de cotizar.</li>
                  <li>Asesoramos segun la prioridad del embarque.</li>
                  <li>Brindamos seguimiento personalizado.</li>
                  <li>Capacitamos al cliente y agregamos valor continuo.</li>
                </ul>
              </div>
            </div>
          </SlideShell>

          <SlideShell
            id="propuesta-valor"
            index={4}
            eyebrow="Propuesta de valor"
            title="Experiencia logistica, visibilidad operativa y optimizacion en una sola propuesta"
          >
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Soluciones de transporte",
                  copy:
                    "Maritimo consolidado, terrestre consolidado, FTL, arrastre de contenedores y carga aerea segun el tipo de operacion.",
                },
                {
                  title: "Inteligencia logistica",
                  copy:
                    "Analisis de rutas, importancia del embarque, evaluacion de tiempos y recomendacion de la mejor alternativa.",
                },
                {
                  title: "Servicio especializado",
                  copy:
                    "Seguimiento cercano, asesoria real, capacitaciones y acompanamiento para operar mejor.",
                },
              ].map((item) => (
                <div key={item.title} className="surface-card p-8">
                  <div className="flex items-center justify-between">
                    <PriorityLogo showWordmark={false} className="scale-[0.78]" />
                    <span className="text-xs uppercase tracking-[0.24em] text-white/44">
                      Value
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-white/68">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </SlideShell>

          <SlideShell
            id="servicios"
            index={5}
            eyebrow="Servicios principales"
            title="Nuestro portafolio esta diseñado para resolver necesidades reales de transporte internacional"
          >
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {coreServices.map((service) => (
                <div key={service.name} className="surface-card p-7">
                  <div className="flex items-center justify-between gap-4">
                    <PriorityLogo showWordmark={false} className="scale-[0.7]" />
                    <span className="text-xs uppercase tracking-[0.26em] text-white/44">
                      Service
                    </span>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold text-white">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/68">
                    {service.summary}
                  </p>
                </div>
              ))}
            </div>
          </SlideShell>

          <SlideShell
            id="servicios-adicionales"
            index={6}
            eyebrow="Servicios adicionales"
            title="Valor agregado que va mas alla del transporte"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
              <div className="surface-dark p-8">
                <PriorityLogo className="mb-8" subtitle="Freight Intelligence" />
                <p className="text-xl leading-9 text-white/76">
                  Nuestro objetivo no es solo vender un servicio. Es ayudar al
                  cliente a operar mejor, reducir incertidumbre y tomar mejores
                  decisiones logisticas.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {extraServices.map((item) => (
                  <div key={item} className="surface-card p-7">
                    <PriorityLogo showWordmark={false} className="scale-[0.6]" />
                    <p className="mt-6 text-xl font-semibold leading-8 text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SlideShell>

          <SlideShell
            id="metodologia"
            index={7}
            eyebrow="Como trabajamos"
            title="Entendemos, diagnosticamos, ejecutamos y mejoramos"
          >
            <div className="grid gap-5 lg:grid-cols-4">
              {[
                [
                  "01",
                  "Entendemos la operacion",
                  "Analizamos el contexto del cliente, su cadena de suministro y la prioridad real del embarque.",
                ],
                [
                  "02",
                  "Diagnosticamos la mejor alternativa",
                  "Evaluamos modo, costo, timing, riesgo e impacto para recomendar la solucion correcta.",
                ],
                [
                  "03",
                  "Ejecutamos con visibilidad y servicio",
                  "Damos seguimiento cercano, comunicacion clara y soporte continuo durante toda la operacion.",
                ],
                [
                  "04",
                  "Aportamos mejora continua",
                  "Capacitamos, asesoramos y detectamos oportunidades para futuras optimizaciones.",
                ],
              ].map(([step, title, copy]) => (
                <div key={step} className="surface-card p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white/48">
                      {step}
                    </span>
                    <PriorityLogo showWordmark={false} className="scale-[0.52]" />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/68">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </SlideShell>

          <SlideShell
            id="beneficios"
            index={8}
            eyebrow="Beneficios para el cliente"
            title="Convertimos la logistica en una ventaja competitiva"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="surface-dark p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/46">
                  Resultado esperado
                </p>
                <p className="mt-6 text-3xl font-semibold leading-tight text-white">
                  Mejor visibilidad, decisiones mejor fundamentadas, rutas mas
                  eficientes y una operacion con mayor control.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Mejor visibilidad de embarques",
                  "Optimizacion de rutas y costos",
                  "Soluciones segun la urgencia real",
                  "Asesoria y soporte continuo",
                ].map((item) => (
                  <div key={item} className="surface-card flex items-center gap-4 p-6">
                    <PriorityLogo showWordmark={false} className="scale-[0.56]" />
                    <p className="text-lg font-medium leading-8 text-white/84">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SlideShell>

          <SlideShell
            id="diferenciadores"
            index={9}
            eyebrow="Diferenciadores"
            title="Lo que realmente hace distinta a PRIORITY"
          >
            <div className="grid gap-5">
              {differentiators.map((item, index) => (
                <div
                  key={item}
                  className="surface-card flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-semibold uppercase tracking-[0.22em] text-white/54">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg leading-8 text-white/82">{item}</p>
                  </div>
                  <PriorityLogo showWordmark={false} className="scale-[0.58] self-start sm:self-auto" />
                </div>
              ))}
            </div>
          </SlideShell>

          <SlideShell
            id="cierre"
            index={10}
            eyebrow="Cierre comercial"
            title="Move Freight Smarter"
            className="border-b-0"
          >
            <div className="surface-dark overflow-hidden p-8 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <div>
                  <PriorityLogo className="mb-10" subtitle="Freight Intelligence" />
                  <p className="max-w-4xl text-2xl leading-10 text-white/82">
                    En PRIORITY Freight Intelligence creemos que el transporte
                    internacional puede ser mas inteligente cuando se combina
                    experiencia logistica, asesoria y analisis de datos.
                  </p>
                  <p className="mt-6 max-w-4xl text-lg leading-9 text-white/68">
                    Estamos listos para analizar tu operacion, entender la
                    prioridad de tus embarques y proponerte la mejor solucion
                    para mover tu mercancia con eficiencia, visibilidad y
                    confianza.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <Button href="mailto:hello@priorityfi.com">
                    Agendar llamada
                  </Button>
                  <Button href="/" variant="secondary">
                    Ver sitio web
                  </Button>
                </div>
              </div>

              <div className="mt-12 border-t border-white/10 pt-8 text-sm font-medium uppercase tracking-[0.38em] text-white/56">
                PRIORITY • SMARTER • BETTER • FASTER
              </div>
            </div>
          </SlideShell>
        </main>
      </div>

      <div className="fixed bottom-5 right-5 z-40 xl:hidden">
        <Button href="#portada" variant="secondary">
          Ir al inicio
        </Button>
      </div>
    </div>
  );
}
