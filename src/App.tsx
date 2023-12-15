import { useState } from "react";

type upgradeType = {
  toaster: number;
  toasterOven: number;
  oven: number;
  industrialOven: number;
};

type UpgradeKeys = "toaster" | "toasterOven" | "oven" | "industrialOven";

function App() {
  const [cookies, setCookies] = useState(0);
  const [currentUpgrades, setCurrentUpgrades] = useState<upgradeType>({
    toaster: 0,
    toasterOven: 0,
    oven: 0,
    industrialOven: 0,
  });

  function addCookies(input: number) {
    setCookies(cookies + input);
  }

  const upgradeCosts: Record<UpgradeKeys, number> = {
    toaster: 8,
    toasterOven: 32,
    oven: 128,
    industrialOven: 512,
  };

  function isUpgradeKey(key: any): key is UpgradeKeys {
    return key in upgradeCosts;
  }

  function buyUpgrade(upgradeChoice: string) {
    if (isUpgradeKey(upgradeChoice)) {
      setCurrentUpgrades((currentUpgrades) => ({
        ...currentUpgrades,
        [upgradeChoice]: currentUpgrades[upgradeChoice] + 1,
      }));
    } else {
      console.log("Upgrade choice is not valid.");
    }
  }

  return (
    <main className="max-w-[800px] m-auto">
      <div className="grid gap-3 p-3">
        <h1 className="text-center text-4xl">Cookie Clicker</h1>
        <div className="grid bg-slate-700 p-2 rounded rim-light">
          <h2 className="text-2xl">Upgrades in Ticks</h2>
          <code>toaster: 8</code>
          <code>toasterOven: 32</code>
          <code>oven: 128</code>
          <code>industrialOven: 512</code>
        </div>

        <div className="grid">
          {Object.entries(currentUpgrades).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <button
            onClick={() => {
              addCookies(1);
            }}
            className="btn">
            Add
          </button>
          <button
            className="btn"
            onClick={() => {
              buyUpgrade("toaster");
            }}>
            Toaster
          </button>
        </div>

        <div className="flex">
          <h2 className="text-4xl">🍪</h2>
          <h2 className="font-mono text-4xl">{cookies}</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
