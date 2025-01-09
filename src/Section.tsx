import { useContext } from "react";
import { LevelContext } from "./LevelContext";

type SectionProps = {
  children: React.ReactNode;
  isFancy?: boolean;
};

export default function Section({ children, isFancy }: SectionProps) {
  const level = useContext(LevelContext);
  return (
    <section className={"section " + (isFancy ? "fancy" : "")}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
