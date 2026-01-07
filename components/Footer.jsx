// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="py-10 border-t mt-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <strong>360 Video Booth</strong>
            <div className="text-sm text-slate-600">Beograd • +381 6X XXX XXXX • info@tvojfirm.rs</div>
          </div>
  
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} 360 Video Booth</div>
        </div>
      </footer>
    );
  }
  