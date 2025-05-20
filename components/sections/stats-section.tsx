export function StatsSection() {
  return (
    <section className="pb-12 md:pb-20">
      <div className=" container  bg-secondary rounded-3xl text-black py-20 space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Bitmopay connects users and apps.
          </h2>
          <p>
            Bitmopay lets businesses easily accept crypto payments with a
            simple, flexible solution.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-4 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">1,200</div>
            <p>Active Users</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">0.5$</div>
            <p>Transaction Fee</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">500</div>
            <p>Daily Transactions</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">100+</div>
            <p>Supported Currencies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
