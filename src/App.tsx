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

  const upgradeCosts = {
    toaster: { cost: 8, display: "Toaster", value: 1 },
    toasterOven: { cost: 32, display: "Toaster Oven", value: 8 },
    oven: { cost: 128, display: "Oven", value: 32 },
    industrialOven: { cost: 512, display: "Industrial Oven", value: 128 },
  };

  function addCookies(input: number) {
    setCookies(cookies + input);
  }

  function isUpgradeKey(key: any): key is UpgradeKeys {
    return key in upgradeCosts;
  }

  function buyUpgrade(upgradeChoice: string) {
    if (isUpgradeKey(upgradeChoice)) {
      // Check if the user has enough money and add the upgrade
      if (upgradeCosts[upgradeChoice].cost <= money) {
        // Subtract the cost
        setMoney(money - upgradeCosts[upgradeChoice].cost);
        // Update current upgrades
        setCurrentUpgrades((currentUpgrades) => ({
          ...currentUpgrades,
          [upgradeChoice]: currentUpgrades[upgradeChoice] + 1,
        }));
      }
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
          <h2 className="text-2xl">Upgrade Costs</h2>
          <code>{upgradeCosts.toaster.display}: 1 🍪/s</code>
          <code>{upgradeCosts.toasterOven.display}: 8 🍪/s</code>
          <code>{upgradeCosts.oven.display}: 32 🍪/s</code>
          <code>{upgradeCosts.industrialOven.display}: 128 🍪/s</code>
        </div>

        <div className="grid">
          {Object.entries(currentUpgrades).map(([key, value]) => (
            <p key={key}>
              {/* @ts-ignore */}
              {upgradeCosts[key].display}: {value}
            </p>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          {Object.entries(upgradeCosts).map(([key, upgrade]) => (
            <button
              key={key}
              className="btn"
              onClick={() => {
                buyUpgrade(`${key}`);
              }}>
              <p>{upgrade.display}</p>
              <p>${upgrade.cost}</p>
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => {
              sellCookies();
            }}
            className="btn">
            Sell Cookies
          </button>
          <button
            onClick={() => {
              addCookies(1);
            }}
            className="btn">
            Bake Cookie
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
