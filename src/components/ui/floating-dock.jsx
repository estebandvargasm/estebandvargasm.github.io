import { cn } from "../../utils/cn";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const FloatingDock = ({
  items,
  className,
}) => {
  return <FloatingDockDesktop items={items} className={className} />;
};

const FloatingDockDesktop = ({
  items,
  className
}) => {
  const mouseX = useMotionValue(Infinity);
  const isFinePointer = useIsFinePointer();
  return (
    <motion.div
      onMouseMove={isFinePointer ? (e) => mouseX.set(e.pageX) : undefined}
      onMouseLeave={isFinePointer ? () => mouseX.set(Infinity) : undefined}
      className={cn(
        "mx-auto inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 shadow-[0_25px_80px_-45px_rgba(59,130,246,0.6)] backdrop-blur-xl md:h-16 md:items-end md:gap-4 md:px-4 md:pb-3",
        className
      )}>
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isActive = false
}) {
  const ref = useRef(null);
  const isFinePointer = useIsFinePointer();

  const distance = useTransform(mouseX, val => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  const isExternal = href.startsWith('http') || href.startsWith('mailto:');

  return (
    <a href={href} target={isExternal ? "_blank" : "_self"} rel={isExternal ? "noopener noreferrer" : undefined}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={isFinePointer ? () => setHovered(true) : undefined}
        onMouseLeave={isFinePointer ? () => setHovered(false) : undefined}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition hover:bg-white/15",
          isActive && "border-transparent bg-white text-slate-900"
        )}>
        <AnimatePresence>
          {hovered && isFinePointer && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-9 left-1/2 w-fit rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs whitespace-pre text-white backdrop-blur-xl shadow-lg"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-inherit">
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

function useIsFinePointer() {
  const [fine, setFine] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia("(pointer: fine)");
    const update = () => setFine(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return fine;
}
