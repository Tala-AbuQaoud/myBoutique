"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
        {/* Legal */}
        <div>
          <h3 className="font-medium mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">Legal notice</Link>
            </li>
            <li>
              <Link href="#">Terms of sale</Link>
            </li>
            <li>
              <Link href="#">Privacy policy</Link>
            </li>
            <li>
              <Link href="#">Terms of Use</Link>
            </li>
            <li>
              <Link href="#">Manage cookies</Link>
            </li>
            <li>
              <Link href="#">Accessibility</Link>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="font-medium mb-4">FAQ</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">Account</Link>
            </li>
            <li>
              <Link href="#">Shipping informations</Link>
            </li>
            <li>
              <Link href="#">Orders</Link>
            </li>
            <li>
              <Link href="#">Payments</Link>
            </li>
            <li>
              <Link href="#">Returns & exchanges</Link>
            </li>
            <li>
              <Link href="#">Size guide</Link>
            </li>
            <li>
              <Link href="#">Gift Card</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-medium mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">Contact us</Link>
            </li>
            <li>
              <Link href="#">Stores</Link>
            </li>
            <li>
              <Link href="#">Book an appointment in store</Link>
            </li>
            <li>
              <Link href="#">Career</Link>
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h3 className="font-medium mb-4">Follow</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">Instagram</Link>
            </li>
            <li>
              <Link href="#">Facebook</Link>
            </li>
            <li>
              <Link href="#">TikTok</Link>
            </li>
            <li>
              <Link href="#">X</Link>
            </li>
            <li>
              <Link href="#">Pinterest</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © MyBoutique 2025
      </div>
    </footer>
  );
}
