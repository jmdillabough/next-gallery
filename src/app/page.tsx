import Link from "next/link";
const mockUrls = [
  "https://utfs.io/f/a65d01eb-7010-47bd-8326-95b6e5f638a0-1x9w3j.JPG", 
  "https://utfs.io/f/e86c7cc3-1eda-473d-bd6b-0906c37c665e-1x9xo7.JPG", 
  "https://utfs.io/f/695e1879-137e-4618-8023-6c1cce674c61-1x9ebk.JPG", 
  "https://utfs.io/f/695e1879-137e-4618-8023-6c1cce674c61-1x9ebk.JPG", 
  "https://utfs.io/f/ce1f4383-836a-4fd4-8b36-6bfae5baa787-1xa1yj.JPG", 
  "https://utfs.io/f/ee2d09f0-c9f4-43a2-9850-d11e473273e3-1xa1b2.JPG", 
  "https://utfs.io/f/d1085803-f94d-41b3-b519-c65e546c2d7c-1x9eaq.JPG", 
  "https://utfs.io/f/360381d9-d2b6-4789-8044-7c11294af5d9-6a01sd.webp", 
  "https://utfs.io/f/2dce6903-edf7-4631-8d16-edbe4285753b-pg3fyr.JPG"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 flex-wrap">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}