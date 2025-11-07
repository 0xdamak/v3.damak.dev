import * as icons from "../../public/svg/icons";
import { motion } from "framer-motion";
import { Section } from "../ui/section/";
import { Card } from "./card";
import { containerVariants, itemVariants, cards } from "./utils";
import classes from "./arsenal.module.scss";

export function Arsenal() {
  return (
    <Section
      id="arsenal"
      heading="Tech Arsenal"
      tagline="Technologies & Tools I Master"
      bgText="arsenal"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={classes.container}
      >
        <motion.div variants={itemVariants} className={classes.techCategories}>
          <div className={classes.cardsGrid}>
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                variants={itemVariants}
                className={classes.cardWrapper}
              >
                <Card {...card} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className={classes.floatingIcons}>
          <motion.div
            className={classes.floatingIcon}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <icons.React />
          </motion.div>
          <motion.div
            className={classes.floatingIcon}
            animate={{
              y: [10, -10, 10],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <icons.Javascript />
          </motion.div>
          <motion.div
            className={classes.floatingIcon}
            animate={{
              y: [-8, 8, -8],
              x: [-5, 5, -5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <icons.NextJS />
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
