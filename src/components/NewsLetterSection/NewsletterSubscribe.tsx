"use client";
import Button from "../Buttons/Button";

export default function NewsletterSubscribe() {
  return (
    <div className="flex flex-col gap-4 max-w-md">
      <h3 className="text-lg font-semibold">Subscribe to the newsletter</h3>
      <p className="text-sm text-gray-600">
        Subscribe to receive all the information by email on our latest
        collections, our products, our fashion shows and our projects.
      </p>
      <input
        type="email"
        placeholder="Email"
        className="border-b border-black outline-none py-2 text-sm"
      />
      <p className="text-xs text-gray-400">
        I agree to receive the JACQUEMUS newsletter to be the first to know
        about new collections, exclusive product launches, events and services
        available. By subscribing, I agree to the JACQUEMUS Privacy Policy.
      </p>
    </div>
  );
}
