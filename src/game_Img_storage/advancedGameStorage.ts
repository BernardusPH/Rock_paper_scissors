export interface ImgData {
  img: string;
  name: string;
  bgcolorStart: string;
  bgcolorEnd: string;
}

// - Lizard Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%)
// - Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%)
export const advancedGameImgObj: ImgData[] = [
  {
    img: "/images/icon-scissors.svg",
    name: "scissors",
    bgcolorStart: "39, 89%, 49%",
    bgcolorEnd: "40, 84%, 53%",
  },
  {
    img: "/images/icon-paper.svg",
    name: "paper",
    bgcolorStart: "230, 89%, 62%",
    bgcolorEnd: "230, 89%, 65%",
  },

  {
    img: "/images/icon-rock.svg",
    name: "rock",
    bgcolorStart: "349, 71%, 52%",
    bgcolorEnd: "349, 70%, 56%",
  },
  {
    img: "/images/icon-lizard.svg",
    name: "lizard",
    bgcolorStart: "261, 73%, 60%",
    bgcolorEnd: "261, 72%, 63%",
  },
  {
    img: "/images/icon-spock.svg",
    name: "spock",
    bgcolorStart: "189, 59%, 53%",
    bgcolorEnd: "189, 58%, 57%",
  },
];
