"use client";

import { useEffect, useState } from "react";

type TIcon = {
  icon: string;
  className?: string;
};

export default function Fa6Icon(props: TIcon) {
  const { icon, className: propClassName } = props;

  const [Icon, setIcon] = useState<any>(null);

  const className = propClassName;

  useEffect(() => {
    const loadIcon = async () => {
      const findIcon = await import("react-icons/fa6").then((m) => m[icon]);

      setIcon(() => findIcon);
    };

    loadIcon();
  }, []);
  return Icon ? <Icon className={className} /> : null;
}
