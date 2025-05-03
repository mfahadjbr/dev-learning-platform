export default function AuthBackground() {
  // Pre-defined positions and sizes for the background elements
  const elements = [
    { width: 1.2, height: 1.3, top: 17, left: 59 },
    { width: 1.0, height: 0.8, top: 85, left: 45 },
    { width: 1.5, height: 0.9, top: 29, left: 66 },
    { width: 1.5, height: 1.6, top: 99, left: 37 },
    { width: 0.6, height: 1.3, top: 88, left: 73 },
    { width: 1.1, height: 1.9, top: 94, left: 86 },
    { width: 1.7, height: 1.3, top: 21, left: 87 },
    { width: 0.5, height: 1.7, top: 2, left: 85 },
    { width: 1.8, height: 0.5, top: 78, left: 14 },
    { width: 1.8, height: 1.9, top: 49, left: 31 },
    { width: 1.3, height: 1.2, top: 23, left: 40 },
    { width: 0.5, height: 1.8, top: 70, left: 43 },
    { width: 0.7, height: 1.7, top: 5, left: 12 },
    { width: 1.6, height: 0.5, top: 39, left: 63 },
    { width: 0.8, height: 1.3, top: 58, left: 77 },
    { width: 1.8, height: 1.5, top: 92, left: 99 },
    { width: 1.8, height: 1.6, top: 56, left: 60 },
    { width: 1.1, height: 1.3, top: 62, left: 79 },
    { width: 0.8, height: 1.2, top: 72, left: 35 },
    { width: 1.7, height: 1.6, top: 68, left: 26 },
    { width: 0.8, height: 1.3, top: 10, left: 22 },
    { width: 1.2, height: 1.9, top: 29, left: 52 },
    { width: 1.4, height: 0.9, top: 58, left: 63 },
    { width: 0.6, height: 0.7, top: 42, left: 85 },
    { width: 1.2, height: 1.3, top: 30, left: 28 },
    { width: 0.6, height: 1.9, top: 36, left: 91 },
    { width: 1.0, height: 1.3, top: 94, left: 63 },
    { width: 1.1, height: 0.5, top: 4, left: 95 },
    { width: 1.3, height: 0.9, top: 74, left: 15 },
    { width: 1.1, height: 1.5, top: 11, left: 92 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Dark blue base */}
      <div className="absolute inset-0 bg-[#0c0a1d]">
        {/* Diagonal sections */}
        <div className="absolute inset-0">
          {/* Left diagonal section */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-[#13112e] transform skew-x-12 origin-top-right"></div>

          {/* Right diagonal section */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#13112e] transform -skew-x-12 origin-top-left"></div>
        </div>

        {/* Stars */}
        <div className="absolute inset-0">
          {elements.map((element, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-10"
              style={{
                width: `${element.width}px`,
                height: `${element.height}px`,
                top: `${element.top}%`,
                left: `${element.left}%`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
  