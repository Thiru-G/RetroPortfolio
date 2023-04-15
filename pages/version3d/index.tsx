import SceneComponente from "@/components/Three/Main/SceneComponente";
import React from "react";
import { useLoaderScene } from "../../components/Three/Store/ThreeState";

export default function index() {
  const { setMusicLoaded, setSceneLoaded } = useLoaderScene(
    (state) => state
  );

  React.useEffect(() => {
    return () => {
      setMusicLoaded(false);
      setMusicLoaded(false);
    };
  }, []);

  return (
    <div>
      <SceneComponente />
    </div>
  );
}
