export default function ProjectsSection() {
  return (
    <div>
      <h2 className="text-5xl font-bold mb-6">Projects</h2>
      <div id="projects" className="mb-8">
        <h3 className="text-3xl font-bold mb-4">Featured</h3>
        <div className="mb-2 flex gap-x-4 justify-evenly">
          <div
            id="project"
            className="h-72 flex items-center bg-red-500 basis-1/3 justify-center"
          >
            L'Occitane
          </div>
          <div
            id="project"
            className="h-72 flex items-center bg-red-500 basis-1/3 justify-center"
          >
            Elf Cosmetics
          </div>
          <div
            id="project"
            className="h-72 flex items-center bg-red-500 basis-1/3 justify-center"
          >
            My portfolio
          </div>
        </div>
        <p>View all</p>
      </div>
    </div>
  );
}
