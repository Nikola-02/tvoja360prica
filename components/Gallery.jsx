// components/Gallery.tsx
export default function Gallery() {
    const videos = ["/videos/sample1.mp4", "/videos/sample2.mp4", "/videos/sample3.mp4"];
  
    return (
      <div id="gallery" className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center">Pogledajte kako izgleda</h2>
        <p className="text-center text-slate-600 mt-2">
          Kratki izveštaji i primeri sa prethodnih događaja.
        </p>
  
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {videos.map((src) => (
            <div key={src} className="rounded-lg overflow-hidden shadow">
              <video
                src={src}
                className="w-full h-64 object-cover"
                controls
                playsInline
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  