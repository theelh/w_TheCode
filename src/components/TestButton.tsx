import { LiquidMetalButton } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export default function TestButton() {
  return (
    <div
      style={{
        minHeight: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#111",
      }}
    >
      <LiquidMetalButton
        variant="pill"
        rendering="colored"
        text="Download CV"
      />
    </div>
  );
}