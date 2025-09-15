"use client"
import Card from "../Card";
export default function ImagesGallery() {

      const images = [
    { src: "/images/hijabi1.jpg", title: "Hijabi Outfit 1" },
    { src: "/images/hijabi2.jpg", title: "Hijabi Outfit 2" },
    { src: "/images/hijabi3.jpg", title: "Hijabi Outfit 3" },
    { src: "/images/hijabi3.jpg", title: "Hijabi Outfit 3" },

  ];

return(
<div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 p-4">
  {images.slice(0,4).map((img , index) => (
    <div className="w-full" key={index}>
      <Card imageSrc={img.src} title={img.title} />
    </div>
  ))}
</div>
);
}
