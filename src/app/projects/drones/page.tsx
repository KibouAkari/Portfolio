import ProjectCard3D from "@/components/ProjectCard3D";

export default function DronesPage() {
  return (
    <div className="min-h-screen py-20 px-6 text-white bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-center">Drone Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        <ProjectCard3D
          title="Lake Zürich Sunset"
          description="Cinematic shot with DJI Mini 3 Pro."
          image="/drones/lake-zurich.jpg"
        />
        <ProjectCard3D
          title="Mountain Flyover"
          description="Captured over the Swiss Alps in winter."
          image="/drones/mountains.jpg"
        />
        <ProjectCard3D
          title="Forest Hover"
          description="Smooth low-altitude drone flight."
          image="/drones/forest.jpg"
        />
      </div>
    </div>
  );
}
