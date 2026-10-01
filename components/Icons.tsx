const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ServiceIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      {name === "ftl" && (
        <>
          <path {...stroke} d="M3 20V12.5A1.5 1.5 0 0 1 4.5 11H17v9" />
          <path {...stroke} d="M17 14h5.2L26 18.2V20" />
          <path {...stroke} d="M3 20h23" />
          <circle {...stroke} cx="8" cy="22.5" r="2" />
          <circle {...stroke} cx="22.5" cy="22.5" r="2" />
        </>
      )}
      {name === "ltl" && (
        <>
          <path {...stroke} d="M6 13.5 16 8l10 5.5V24L16 29 6 24Z" />
          <path {...stroke} d="M6 13.5 16 19l10-5.5" />
          <path {...stroke} d="M16 19v10" />
        </>
      )}
      {name === "intermodal" && (
        <>
          <path {...stroke} d="M4 21h24" />
          <rect {...stroke} x="6" y="11" width="8" height="7" rx="1" />
          <rect {...stroke} x="16" y="11" width="8" height="7" rx="1" />
          <path {...stroke} d="M8 21v2.5M14 21v2.5M18 21v2.5M24 21v2.5" />
        </>
      )}
      {name === "drayage" && (
        <>
          <path {...stroke} d="M5 24h22" />
          <path {...stroke} d="M8 24V10h4" />
          <path {...stroke} d="M12 12h12v4" />
          <path {...stroke} d="M20 12V8h3l3 4" />
          <path {...stroke} d="M14 16h8" />
        </>
      )}
      {name === "dry-van" && (
        <>
          <rect {...stroke} x="3" y="9" width="18" height="11" rx="1.2" />
          <path {...stroke} d="M21 13h4.2L28 17v3h-7" />
          <circle {...stroke} cx="8" cy="22.5" r="1.8" />
          <circle {...stroke} cx="18" cy="22.5" r="1.8" />
        </>
      )}
      {name === "reefer" && (
        <>
          <rect {...stroke} x="5" y="7" width="16" height="16" rx="2" />
          <path {...stroke} d="M9 12h8M10 16.5c.8 1.2 2 1.8 3 1.8s2.2-.6 3-1.8" />
          <path {...stroke} d="M21 11h4M21 16h4M21 21h3" />
        </>
      )}
    </svg>
  );
}
