import Link from "next/link";

export default function CustomerCareLinks() {
  const links = [
    { label: "Contact form", href: "#" },
    { label: "Track an order", href: "#" },
    { label: "Register a return", href: "#" },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Customer Care</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
