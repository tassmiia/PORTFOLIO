import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Let's Collaborate✵"
      default_velocity={5}
      className="font-display text-center text-3xl font-light tracking-[-0.01em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-[3rem]"
    />
  );
}
