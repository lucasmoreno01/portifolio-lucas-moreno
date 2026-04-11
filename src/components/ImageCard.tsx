export function ImageCard({ src }: { src: string }) {
  return (
    <div className="p-[2px] rounded-2xl bg-white/20 shadow-lg hover:scale-[1.02] transition">
      <div className="rounded-2xl overflow-hidden bg-background">
        <img src={src} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
