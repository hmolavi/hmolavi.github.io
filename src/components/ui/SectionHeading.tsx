interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <div className="w-16 h-1 bg-primary rounded-full" />
    </div>
  );
}
