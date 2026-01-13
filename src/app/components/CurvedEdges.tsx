export function CurvedEdges() {
  return (
    <>
      {/* Top Curved Edge */}
      <div className="pointer-events-none absolute -top-1 right-0 left-0 h-12 overflow-hidden">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <path d="M0,60 Q600,20 1200,60 L1200,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Bottom Curved Edge */}
      <div className="pointer-events-none absolute right-0 -bottom-1 left-0 h-12 overflow-hidden">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <path d="M0,0 Q600,40 1200,0 L1200,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </>
  );
}
