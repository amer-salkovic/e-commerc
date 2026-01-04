const Dropdown = ({ open, packages, onSelect }) => {
  if (!open) return null;

  return (
    <div className="absolute mt-2 w-105 rounded-lg border bg-white p-4 shadow-lg">
      <div className="mb-3">
        <h3 className="text-sm font-semibold">Product Packages</h3>
        <p className="text-xs text-gray-500">Choose the best option for you.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {packages.map((pkg) => (
          <button
            key={pkg.id}
            type="button"
            onClick={() => onSelect(pkg)}
            className="rounded-md border p-3 text-left hover:bg-gray-50"
          >
            <div className="text-sm font-semibold">{pkg.name}</div>
            <div className="text-xs text-gray-500">{pkg.subtitle}</div>
            <div className="mt-2 text-lg font-bold">${pkg.price}</div>
            {pkg.badge && (
              <div className="mt-2 inline-block rounded-full bg-black px-2 py-1 text-xs text-white">
                {pkg.badge}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
