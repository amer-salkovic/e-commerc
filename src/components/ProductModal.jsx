const ProductModal = ({ product, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
         <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-lg bg-card p-6"
      >
        <img
          src={product.image}
          alt={product.title}
          className="mb-4 h-56 w-full rounded-lg object-cover"
        />

        <h2 className="mb-1 text-lg font-medium">{product.title}</h2>
        <p className="mb-6 text-muted-foreground">${product.price}</p>

        <button
          onClick={onClose}
          className="rounded-md border px-4 py-2 hover:bg-accent"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
