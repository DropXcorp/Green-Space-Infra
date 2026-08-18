type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({ eyebrow, title, description, center = false }: Props) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#43a324]">{eyebrow}</p>
      )}
      <h2 className="font-[var(--font-playfair)] text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#151715] md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-8 text-[#687068]">{description}</p>}
    </div>
  );
}

