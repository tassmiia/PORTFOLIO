import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { IconCloudDemo } from "./cloud";
import { ScrollBasedVelocityDemo } from "./scrolltext";

const Grid = () => {
  return (
    <div className="py-10 dark:bg-black">
      <ScrollBasedVelocityDemo />

      <section id="about">
        <BentoGrid className="w-full py-10">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              // remove icon prop
              // remove original classname condition
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </section>
    </div>
  );
};

export default Grid;
