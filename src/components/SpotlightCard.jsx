
import clsx from "clsx";
import { useRef } from "react";
import { useMouse } from "react-use";

export function SpotlightCard({
  as: Component = "div",
  from = "rgba(255,255,255,0.8)",
  via = null,
  to = "transparent",
  size = 350,
  mode = "before",
  children,
  className,
  producto,
  ...props
}) {
  const container = useRef(null);
  const {PRODUCTO, PRECIO, URL_IMG, DESCRIPCION} = producto

  const { elX, elY } = useMouse(container);

  const spotlightColorStops = [from, via, to]
    .filter((value) => !!value)
    .join(",");

  const classes =
    mode == "before"
      ? `before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]`
      : `after:absolute after:inset-0 after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]`;

  return (
    <Component
      ref={container}
      className={clsx(
        "relative transform-gpu overflow-hidden",
        classes,
        className
      )}
      {...props}
      style={{
        "--x": `${elX}px`,
        "--y": `${elY}px`,
        "--spotlight-color-stops": spotlightColorStops,
        "--spotlight-size": `${size}px`,
      }}
    >
    <div className="relative flex flex-col">
        <div className="p-1 rounded-xl mb-5 h-60 overflow-hidden group-hover:h-72 transition-all">
            <img
            className="absolute inset-0 h-64 w-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0"
            src={URL_IMG}/>
            <img
            className="relative h-64 w-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0 scale-100"
            src={URL_IMG}/>
        </div>
        <div className="mt-4 px-2">
            <div className="font-medium text-black">{PRODUCTO}</div>
            <div className="text-black/75">{DESCRIPCION}</div>
        </div>
    </div>
    </Component>
  );
}
