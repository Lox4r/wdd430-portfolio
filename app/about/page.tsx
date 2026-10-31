import SkillCard from "../../components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">
        About Me
      </h1>

      <p className="text-lg mb-6">
        Hello! I am a web development student.
        I enjoy creating websites and learning
        new programming technologies.
      </p>

      <h2 className="text-2xl font-bold">
        My Skills
      </h2>

      <SkillCard
        skill="JavaScript"
        description="Building interactive websites."
      />

      <SkillCard
        skill="Node.js"
        description="Creating backend applications and APIs."
      />

      <SkillCard
        skill="MongoDB"
        description="Working with databases."
      />
    </main>
  );
}
