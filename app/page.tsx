import ProjectList from "../components/ProjectList";

const projects = [
  {
    title: "Contacts API",
    description:
      "A REST API for managing contacts using Node.js and MongoDB.",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/YOUR-USERNAME/YOUR-CONTACTS-REPO",
  },
  {
    title: "Vehicle Inventory Website",
    description:
      "A website for displaying and managing vehicle inventory.",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    link: "https://github.com/YOUR-USERNAME/YOUR-VEHICLE-REPO",
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg mb-8">
        Hello! I am a web development student.
        Here are some of my projects.
      </p>
      <ProjectList projects={projects} />
    </main>
  );
}
