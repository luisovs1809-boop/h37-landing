import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0071e3",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          borderRadius: 7,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        37
      </div>
    ),
    { ...size },
  );
}
