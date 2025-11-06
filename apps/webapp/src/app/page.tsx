import Test from "@/components/Test";
import SessionProviderWrapper from "@/providers/SessionProviderWrapper";

export default function Home() {
  return (
    <div>
      <SessionProviderWrapper>
        <Test />
      </SessionProviderWrapper>
    </div>
  );
}
