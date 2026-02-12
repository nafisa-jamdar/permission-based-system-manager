import { useEffect, useState } from "react";
import { resourcesData } from "../data/resources";

export default function useFetchResources(delayMs = 900) {
  const [resources, setResources] = useState([]);
  const [loadingResources, setLoadingResources] = useState(true);

  useEffect(() => {
    setLoadingResources(true);

    const timer = setTimeout(() => {
      setResources(resourcesData);     // simulate fetched data
      setLoadingResources(false);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  return { resources, setResources, loadingResources };
}
