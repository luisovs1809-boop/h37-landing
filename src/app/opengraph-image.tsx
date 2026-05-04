import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Agendas H37 — Software de citas para barberías y salones en México";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #ffffff 0%, #f5f5f7 100%)",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "80px",
        }}
      >
        {/* Decorative gradient blobs */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(0,113,227,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: -200,
            left: -200,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(52,199,89,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Top: Logo + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 22,
              background: "#0071e3",
              color: "white",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              boxShadow: "0 8px 24px rgba(0,113,227,0.25)",
            }}
          >
            37
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: "-0.022em",
            }}
          >
            <span style={{ color: "#1d1d1f" }}>Agendas&nbsp;</span>
            <span style={{ color: "#0071e3" }}>H37</span>
          </div>
        </div>

        {/* Middle: Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            marginTop: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 600,
              color: "#1d1d1f",
              letterSpacing: "-0.032em",
              lineHeight: 1.02,
              maxWidth: 980,
            }}
          >
            El sistema de citas que tus
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 600,
              letterSpacing: "-0.032em",
              lineHeight: 1.02,
              maxWidth: 980,
            }}
          >
            <span style={{ color: "#1d1d1f" }}>clientes&nbsp;</span>
            <span style={{ color: "#0071e3" }}>van a amar.</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 28,
              color: "#424245",
              letterSpacing: "-0.011em",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Software para barberías y salones, hecho en México.
          </div>
        </div>

        {/* Bottom: Pricing chip + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 24px",
              borderRadius: 9999,
              background: "#1d1d1f",
              color: "white",
              fontSize: 22,
              fontWeight: 600,
              boxShadow: "0 8px 24px rgba(29,29,31,0.18)",
            }}
          >
            <span style={{ color: "#86868b", textDecoration: "line-through", fontSize: 18 }}>
              $8,999
            </span>
            <span>$5,999 MXN</span>
            <span
              style={{
                background: "#34c759",
                color: "white",
                fontSize: 14,
                fontWeight: 700,
                padding: "4px 10px",
                borderRadius: 9999,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Pago único
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#86868b",
              fontWeight: 500,
              letterSpacing: "-0.011em",
            }}
          >
            agendas.grupoh37.tech
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
