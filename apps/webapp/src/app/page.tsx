import Test from "@/components/Test";
import SessionProviderWrapper from "@/providers/SessionProviderWrapper";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <SessionProviderWrapper>
        <Test />
      </SessionProviderWrapper>
    </div>
  );
}
