import UsePromiseDemo from "@/components/UsePromisesDemo.js";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading users...</p>}>
        <UsePromiseDemo />
      </Suspense>
    </main>
  );
}
