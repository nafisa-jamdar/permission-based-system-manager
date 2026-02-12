import { useParams } from "react-router-dom";

export default function AdminResource() {
  const { id } = useParams();

  return (
    <div>
      <h2>Admin Resource Page</h2>
      <p>Resource ID from URL: {id}</p>
      <p>If you can see this, you are allowed (Admin only).</p>
    </div>
  );
}
