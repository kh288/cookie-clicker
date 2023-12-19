export type upgradeType = {
  toaster: number;
  toasterOven: number;
  oven: number;
  industrialOven: number;
  superOven: number;
  omegaOven: number;
  gigaOven: number;
};

export type UpgradeKeys = "toaster" | "toasterOven" | "oven" | "industrialOven" | "superOven" | "omegaOven" | "gigaOven";

export const upgradeCosts = {
  toaster: {
    cost: 8,
    display: "Toaster",
    value: 2
  },
  toasterOven: {
    cost: 32,
    display: "Toaster Oven",
    value: 8
  },
  oven: {
    cost: 128,
    display: "Oven",
    value: 32
  },
  industrialOven: {
    cost: 512,
    display: "Industrial Oven",
    value: 128
  },
  superOven: {
    cost: 2048,
    display: "Super Oven",
    value: 512
  },
  omegaOven: {
    cost: 8192,
    display: "Omega Oven",
    value: 2048
  },
  gigaOven: {
    cost: 32768,
    display: "Giga Oven",
    value: 8192
  },
};