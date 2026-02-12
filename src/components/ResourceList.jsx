import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { canAccessRole } from "../utils/roles";
import ResourceItem from "./ResourceItem";
import useFetchResources from "../hooks/useFetchResources";

export default function ResourceList({ title, statusFilter }) {
  const { user, loadingAuth } = useContext(AuthContext);

  const { resources, setResources, loadingResources } = useFetchResources(900);

  if (loadingAuth) return <p>Loading...</p>;
  if (!user) return <p>Please login.</p>;

  if (loadingResources) return <p>Loading resources...</p>;

  // show ALL resources, but mark locked
  const list = resources.filter((r) => r.status === statusFilter);

  const onDelete = (id) => {
    if (!window.confirm("Delete this resource?")) return;
    setResources((prev) => prev.filter((r) => r.id !== id));
  };

  const onEdit = (resource) => {
    const newName = window.prompt("Enter new name:", resource.name);
    if (!newName) return;

    // Immutable update (map)
    setResources((prev) =>
      prev.map((r) => (r.id === resource.id ? { ...r, name: newName } : r))
    );
  };

  // Tough Challenge #3: update nested object in array immutably (status change)
  const onToggleStatus = (id) => {
    setResources((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: r.status === "active" ? "archived" : "active" }
          : r
      )
    );
  };

  return (
    <div>
      <h2>{title}</h2>

      {list.length === 0 ? (
        <p>No items in this section.</p>
      ) : (
        list.map((res) => {
          const locked = !canAccessRole(user.role, res.minRole);

          return (
            <ResourceItem
              key={res.id}
              resource={res}
              isLocked={locked}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleStatus={onToggleStatus}
            />
          );
        })
      )}
    </div>
  );
}
