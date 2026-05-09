interface ProductCardProps {
  title: string;
  description?: string;
  tags?: string[];
  price?: string;
}

export default function ProductCard({ title, description, tags, price }: ProductCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-zinc-600 transition-all">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-zinc-400 mb-3">{description}</p>
      )}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-zinc-800 text-zinc-300 text-xs px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {price && (
        <div className="text-white font-semibold">{price}</div>
      )}
    </div>
  );
}
