import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  withText?: boolean;
  className?: string;
};

const sizeMap = {
  sm: { box: "h-7 w-7 text-[13px] rounded-[10px]", text: "text-[15px]" },
  md: { box: "h-9 w-9 text-base rounded-xl", text: "text-[17px]" },
  lg: { box: "h-12 w-12 text-xl rounded-2xl", text: "text-2xl" },
};

export function Logo({ size = "md", withText = true, className = "" }: LogoProps) {
  const s = sizeMap[size];
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Agendas H37 — Inicio"
    >
      <span
        className={`inline-flex items-center justify-center font-semibold text-white bg-blue shadow-sm transition-transform duration-300 group-hover:scale-105 ${s.box}`}
        aria-hidden
      >
        37
      </span>
      {withText && (
        <span
          className={`font-semibold tracking-tight text-ink ${s.text}`}
        >
          Agendas <span className="text-blue">H37</span>
        </span>
      )}
    </Link>
  );
}
