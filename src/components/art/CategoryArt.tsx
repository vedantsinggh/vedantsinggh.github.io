"use client";

import React from "react";
import RoboticsArt from "./RoboticsArt";
import AiArt from "./AiArt";
import AppDevArt from "./AppDevArt";
import WebDevArt from "./WebDevArt";

interface CategoryArtProps {
  categoryId: string;
  className?: string;
  interactive?: boolean;
}

export default function CategoryArt({
  categoryId,
  className = "",
  interactive = true,
}: CategoryArtProps) {
  switch (categoryId) {
    case "robotics":
      return <RoboticsArt className={className} interactive={interactive} />;
    case "ai":
      return <AiArt className={className} interactive={interactive} />;
    case "app-dev":
      return <AppDevArt className={className} interactive={interactive} />;
    case "web-dev":
      return <WebDevArt className={className} interactive={interactive} />;
    default:
      return <RoboticsArt className={className} interactive={interactive} />;
  }
}
