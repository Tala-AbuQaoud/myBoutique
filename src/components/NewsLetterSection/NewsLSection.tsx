import NewsletterSubscribe from "./NewsletterSubscribe";
import CustomerCareLinks from "./CustomerCareLinks";
import CountrySelector from "./CountrySelector";

export default function NewsLSection() {
  return (
    <footer className="border-t border-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <NewsletterSubscribe />
        <CustomerCareLinks />
        <CountrySelector />
      </div>
    </footer>
  );
}
