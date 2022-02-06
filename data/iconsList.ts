import { CustomIcon } from "../scripts/utils";

type Icons = (string | CustomIcon)[];

interface IconList {
  namespace: string;
  icons: Icons;
}

export const iconsList: IconList[] = [
  {
    namespace: "languages",
    icons: [
      "javascript",
      "typescript",
      "nothing else",
    ],
  },
  {
    namespace: "tools",
    icons: [l
      "git",
      "of course",
    ],
  },
  {
    namespace: "interested",
    icons: [
      "no",
    ],
  },
];
