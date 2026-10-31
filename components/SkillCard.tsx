interface SkillCardProps {
  skill: string;
  description: string;
}

export default function SkillCard({
  skill,
  description,
}: SkillCardProps) {
  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="text-xl font-bold">{skill}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
}
