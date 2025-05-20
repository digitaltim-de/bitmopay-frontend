import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-16 bg-emerald-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
          Create an account and start accepting crypto payments today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-white text-emerald-900 hover:bg-emerald-100">Get Started</Button>
          <Button variant="outline" className="border-white text-white hover:bg-emerald-800">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
