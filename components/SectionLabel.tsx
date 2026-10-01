export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-wider ${light ? "text-blue-200" : "text-brand"}`}
    >
      {children}
    </p>
  );
}
