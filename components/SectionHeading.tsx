export default function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-sm text-[rgb(var(--muted))]">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {desc ? (
        <p className="text-[rgb(var(--muted))] max-w-2xl">{desc}</p>
      ) : null}
    </div>
  );
}
