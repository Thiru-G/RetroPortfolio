import { Suspense } from "react";
import dynamic from "next/dynamic";

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
      <Suspense fallback={null}>
        <SceneDynamic />
      </Suspense>
    </div>
  );
}
