// Не всегда все компоненты нужны сразу, какие то компоненты можем грузить лениво



import dynamic from "next/dynamic";
import { Suspense, lazy, useState } from "react";

const DynamicSlowComponent = dynamic(
  () =>
    import("@/components/SlowComponent/component").then(
      (mod) => mod.SlowComponent
    ),
  { ssr: false, loading: () => <p>Loading...</p> }
);

export default function Lazy() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>switch</button>
      {isVisible && <DynamicSlowComponent />}
    </div>
  );
}