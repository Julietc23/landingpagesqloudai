import Navbar from "@/components/navbar"
import { WaitlistForm } from "@/components/WaitlistForm"
import MouseMoveEffect from "@/components/mouse-move-effect"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-background py-20">
          <MouseMoveEffect />
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Conecta tus bases de datos con el poder de la IA
                  </h1>
                  <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                    sQloud AI te permite interactuar con tus bases de datos utilizando lenguaje natural, simplificando
                    consultas y análisis de datos.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 lg:px-0">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

