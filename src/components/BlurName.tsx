import type { CSSProperties } from "react";

type Props = { first: string; last: string };

/** Primeiro nome nítido; sobrenome com desfoque gradativo (letra a letra). */
export default function BlurName({ first, last }: Props) {
  return (
    <>
      <span>{first}</span>
      <span>{" "}</span>
      {[...last].map((c, i) => {
        const blur = (0.6 + i * 0.8).toFixed(1);
        const opacity = Math.max(0.35, 0.85 - i * 0.08).toFixed(2);
        const style: CSSProperties = {
          display: "inline-block",
          filter: `blur(${blur}px)`,
          opacity: Number(opacity),
          userSelect: "none",
        };
        return (
          <span key={i} style={style} aria-hidden="true">
            {c}
          </span>
        );
      })}
    </>
  );
}
