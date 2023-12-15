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
  const [money, setMoney] = useState(0);
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

  function sellCookies() {
    const minusThis = cookies % 5;
    const tempCookies = cookies - minusThis;

    setMoney(money + tempCookies / 5);
    setCookies(0 + minusThis);
  }

  return (
    <main className="max-w-[800px] m-auto">
      <div className="grid gap-2 p-3">
        <h1 className="text-center text-4xl">Cookie Clicker</h1>
        <div className="grid bg-slate-700 p-2 rounded rim-light">
          <h2 className="text-2xl">Upgrades</h2>
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
          {Object.entries(upgradeCosts).map(([key, value]) => (
            <button
              key={key}
              className="btn"
              onClick={() => {
                buyUpgrade(`${key}`);
              }}>
              <p>{key}</p>
              <p>${value}</p>
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => {
              addCookies(1);
            }}
            className="btn">
            Bake Cookie
          </button>
          <button
            onClick={() => {
              sellCookies();
            }}
            className="btn">
            Sell Cookies
          </button>
        </div>

        <div className="flex justify-evenly bg-slate-600 rounded p-3 shadow-inner ">
          <div className="flex">
            <h3 className="text-4xl">💵</h3>
            <h3 className="font-mono text-4xl">{money}</h3>
          </div>
          <div className="flex">
            <h3 className="text-4xl">🍪</h3>
            <h3 className="font-mono text-4xl">{cookies}</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
