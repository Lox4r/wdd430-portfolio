interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="border rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold mb-2">
        {title}
      </h2>

      <p className="mb-3">{description}</p>

      <p className="text-sm mb-3">
        Technologies: {technologies.join(", ")}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Project
        </a>
      )}
    </article>
  );
}