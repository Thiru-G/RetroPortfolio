import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "../Canvas/Loader/Loader";
import { useLoaderScene } from "../Store/ThreeState";
import { PlayerSound } from "../Canvas/Sounds/PlayerSound";

const SceneDynamic = dynamic(
  () => import("../Canvas/Scene"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

export default function SceneComponente() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Loader />
      <Suspense fallback={null}>
        <SceneDynamic />
      </Suspense>
      <PlayerSound />
    </div>
  );
}
