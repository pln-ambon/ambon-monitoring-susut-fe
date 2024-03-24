export default function ErrorIcon({ className }: { className: string }) {
  return (
    <svg
      width="124"
      height="124"
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="124" height="124" rx="62" fill="#CBCCEA" fillOpacity="0.1" />
      <circle cx="62" cy="62" r="50" fill="#D60000" />
      <rect
        x="78"
        y="38.4854"
        width="12"
        height="56"
        rx="6"
        transform="rotate(45 78 38.4854)"
        fill="#F2F3F8"
      />
      <rect
        x="38"
        y="46.4854"
        width="12"
        height="56"
        rx="6"
        transform="rotate(-45 38 46.4854)"
        fill="#F2F3F8"
      />
    </svg>
  );
}
