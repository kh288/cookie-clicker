export type upgradeType = {
  toaster: number;
  toasterOven: number;
  oven: number;
  industrialOven: number;
  superOven: number;
  omegaOven: number;
  gigaOven: number;
  ultraOven: number;
};

export type UpgradeKeys = "toaster" | "toasterOven" | "oven" | "industrialOven" | "superOven" | "omegaOven" | "gigaOven" | "ultraOven";

export type upgradeCostsType = {
  toaster: {
    cost: number;
    display: string;
    value: number;
  };
  toasterOven: {
    cost: number;
    display: string;
    value: number;
  };
  oven: {
    cost: number;
    display: string;
    value: number;
  };
  industrialOven: {
    cost: number;
    display: string;
    value: number;
  };
  superOven: {
    cost: number;
    display: string;
    value: number;
  };
  omegaOven: {
    cost: number;
    display: string;
    value: number;
  };
  gigaOven: {
    cost: number;
    display: string;
    value: number;
  };
  ultraOven: {
    cost: number;
    display: string;
    value: number;
  }
}

// export const upgradeCosts = {
//   toaster: {
//     cost: 8,
//     display: "Toaster",
//     value: 2
//   },
//   toasterOven: {
//     cost: 32,
//     display: "Toaster Oven",
//     value: 8
//   },
//   oven: {
//     cost: 128,
//     display: "Oven",
//     value: 32
//   },
//   industrialOven: {
//     cost: 512,
//     display: "Industrial Oven",
//     value: 128
//   },
//   superOven: {
//     cost: 2048,
//     display: "Super Oven",
//     value: 512
//   },
//   omegaOven: {
//     cost: 8192,
//     display: "Omega Oven",
//     value: 2048
//   },
//   gigaOven: {
//     cost: 32768,
//     display: "Giga Oven",
//     value: 8192
//   },
//   ultraOven: {
//     cost: 131072,
//     display: "Ultra Oven",
//     value: 32768
//   },
// };

export const upgradeCosts = {
  toaster: {
    cost: 16,
    display: "Toaster",
    value: 2
  },
  toasterOven: {
    cost: 64,
    display: "Toaster Oven",
    value: 8
  },
  oven: {
    cost: 256,
    display: "Oven",
    value: 32
  },
  industrialOven: {
    cost: 1024,
    display: "Industrial Oven",
    value: 128
  },
  superOven: {
    cost: 4096,
    display: "Super Oven",
    value: 512
  },
  omegaOven: {
    cost: 16384,
    display: "Omega Oven",
    value: 2048
  },
  gigaOven: {
    cost: 65536,
    display: "Giga Oven",
    value: 8192
  },
  ultraOven: {
    cost: 262144,
    display: "Ultra Oven",
    value: 32768
  },
  lavaPit: {
    cost: 1048576,
    display: "Lava Pit",
    value: 131072
  },
  infernoPit: {
    cost: 8388608,
    display: "Inferno Pit",
    value: 1048576
  },
  hellPit: {
    cost: 67108864,
    display: "Hell Pit",
    value: 8388608
  },
  tacoBell: {
    cost: 536870912,
    display: "Taco Bell",
    value: 67108864
  }
};