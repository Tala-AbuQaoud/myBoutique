"use client";
import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import Button from "../Buttons/Button";
import Link from "next/link";

type Props = {
  imageSrc: string;
  title: string;
  className?: string;
};

export default function BigCard({ imageSrc, title, className }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const colors = ["#8C1007", "#FBBF24", "#34D399"];
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  return (
    <div className="flex flex-nowrap gap-4 w-full h-96">
      <div className="relative flex-1">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}
