import ClientDemo from "@/components/ClientDemo";
import RSCDemo from "@/components/RSCDemo.js";

export default function Home() {
  return (
    <main>
      <RSCDemo />
      <ClientDemo>
        <RSCDemo />
      </ClientDemo>
    </main>
  );
}
