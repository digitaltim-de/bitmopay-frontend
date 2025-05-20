import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-16 bg-emerald-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Bereit loszulegen?</h2>
        <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
          Erstellen Sie ein Konto und beginnen Sie noch heute mit der Akzeptanz von Krypto-Zahlungen.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-white text-emerald-900 hover:bg-emerald-100">Jetzt starten</Button>
          <Button variant="outline" className="border-white text-white hover:bg-emerald-800">
            Kontakt aufnehmen
          </Button>
        </div>
      </div>
    </section>
  )
}
