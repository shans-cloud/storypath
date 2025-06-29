import { useState, useEffect } from "react";
import { deleteProject, getProjects } from "../api/api";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

/**
 * ProjectsList Component
 *
 * This component displays a list of all projects, allowing users to view, edit, or delete projects.
 * Users can also navigate to a list of locations within a specific project.
 *
 * @component
 * @returns {JSX.Element} The rendered ProjectsList component.
 *
 * @example
 * return (
 *   <ProjectsList />
 * )
 *
 * @function handleDelete
 * Deletes a project by its ID and refreshes the projects list.
 *
 * @function handleEdit
 * Navigates to the edit form for a specific project.
 *
 * @function handleViewLocation
 * Navigates to the list of locations for a specific project.
 *
 * JSDoc comments above were generated by ChatGPT
 */
const ProjectsList = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  // Fetch projects when the component mounts
  // Happens after UI
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        console.log(data);
        setProjects(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProjects();
  }, []); // Runs only on first render

  // Handle deleting a project by its ID
  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      const updatedProjects = await getProjects();
      setProjects(updatedProjects);
    } catch (err) {
      setError(err.message);
    }
  };

  // Navigate to the project edit page with the selected project data
  const handleEdit = (project) => {
    navigate(`/projects/edit/${project.id}`, { state: { project } });
  };

  const handleViewLocation = (projectId) => {
    navigate(`/projects/${projectId}/locations`);
  };

  // Wait until the projects are loaded or there's an error
  if (!projects && !error) {
    return null;
  }

  // Display error message if there's an issue fetching data
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Your Projects</h1>

      {/* If there are no projects */}
      {projects.length === 0 && (
        <p>No projects found. Create your first project!</p>
      )}

      {/* Project List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-white p-4 border border-gray-300 rounded-lg shadow-md"
          >
            {/* Show "Published" or "Not Published" based on project.published */}
            <div className="flex justify-between items-center">
              <span
                className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full ${
                  project.is_published
                    ? "bg-forrest-bright text-white"
                    : "bg-gray text-white"
                }`}
              >
                {project.is_published ? "Published" : "Not Published"}
              </span>

              <h2 className="text-2xl font-semibold mb-2 truncate">
                {project.title}
              </h2>
            </div>
            {/* Projects description */}
            <p className="text-gray-600 mb-4 truncate">{project.description}</p>
            <div className="flex justify-between items-center">
              {/* Edit button */}
              <CustomButton
                label="Edit"
                onClick={() => handleEdit(project)}
                className="bg-accent/75 text-white hover:bg-accent-dark rounded-lg"
              />

              {/* View location button */}
              <CustomButton
                label="View Locations"
                onClick={() => handleViewLocation(project.id)}
                className="py-1 bg-primary/70 text-white hover:bg-primary-dark rounded-lg"
              />

              {/* Delete button */}
              <CustomButton
                label="Delete"
                onClick={() => handleDelete(project.id)}
                className="bg-cherry/75 text-white hover:bg-cherry-dark rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
