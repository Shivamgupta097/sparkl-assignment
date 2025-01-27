import React, { useState } from "react";
import USPCard from "./USPCard";
import { CARDS_DATA } from "../utils/mockData";

const UspCards = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const maxWidth = 500;
  const minWidth = 50;
  const rotateThreshold = 220;
  const gap = 100;
  const scrollSpeedFactor = 5;

  const handleScroll = (e) => {
    const scrollDelta = e.deltaY / scrollSpeedFactor;
    setScrollPosition((prev) => prev + scrollDelta);
  };

  const calculateWidth = (index) => {
    const threshold = index * gap;
    const effectiveScroll = scrollPosition - threshold;
    const shrinkFactor = Math.max(0, Math.min(effectiveScroll / 100, 1));

    return Math.max(maxWidth - shrinkFactor * (maxWidth - minWidth), minWidth);
  };

  return (
    <div onWheel={handleScroll}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Our USPs</h2>
      <div className="flex gap-5">
        {CARDS_DATA.map((card, index) => {
          const width = calculateWidth(index);
          const isSmall = width <= rotateThreshold; // Determines when title rotates
          return (
            <USPCard
              title={card.title}
              description={card.description}
              Icon={card.Icon}
              isSmall={isSmall}
              width={width}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UspCards;
