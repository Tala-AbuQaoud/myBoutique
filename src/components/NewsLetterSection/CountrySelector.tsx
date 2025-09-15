"use client";
import { useState } from "react";

export default function CountrySelector() {
  const [language, setLanguage] = useState("english");

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Country/Region</h3>
      <div className="flex items-center gap-2">
        <span>🇫🇷</span>
        <span>Metropolitan France (EUR)</span>
        <span className="mx-2">|</span>
        <label htmlFor="city">Select City</label>
        <select id="city" name="city">
          <option value="">Choose...</option>
          <option value="amman">Amman</option>
          <option value="zarqa">Zarqa</option>
        </select>
      </div>
    </div>
  );
}
