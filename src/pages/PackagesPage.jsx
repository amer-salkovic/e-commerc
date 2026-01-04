import packages from "../data/packages";

const PackagesPage = () => {
  return (
    <main className="mx-auto max-w-7xl p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Product Packages</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Choose the best option for you.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="rounded-lg border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">{pkg.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{pkg.subtitle}</div>
              </div>

              {pkg.badge && (
                <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                  {pkg.badge}
                </span>
              )}
            </div>

            <div className="mt-4 text-3xl font-bold">${pkg.price}</div>

            <button
              type="button"
              onClick={() => console.log("Selected package:", pkg)}
              className="mt-5 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Choose package
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PackagesPage;
