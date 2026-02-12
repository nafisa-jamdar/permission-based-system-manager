import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ResourceItem({ resource, isLocked, onEdit, onDelete, onToggleStatus }) {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  const canEdit = user.role === "Admin" || user.role === "Editor";
  const canDelete = user.role === "Admin";

  return (
    <div>
      <h3>
        {resource.name} {isLocked ? "🔒" : ""}
      </h3>

      <p>Minimum Role: {resource.minRole}</p>
      <p>Status: {resource.status}</p>

      {isLocked ? (
        <p>Locked: You do not have permission to access this resource.</p>
      ) : (
        <>
          <button onClick={() => onToggleStatus(resource.id)}>
            Toggle Status (active/archived)
          </button>

          {canEdit && <button onClick={() => onEdit(resource)}>Edit</button>}
          {canDelete && <button onClick={() => onDelete(resource.id)}>Delete</button>}
        </>
      )}

      <hr />
    </div>
  );
}
