export const rolePower = {
  Admin: 3,
  Editor: 2,
  Viewer: 1,
};

export const canAccessRole = (userRole, minRole) => {
  if (!userRole) return false;
  return rolePower[userRole] >= rolePower[minRole];
};
