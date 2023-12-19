import { useEffect, useState } from "react";
import { upgradeCosts } from "./data/upgrades";
import UpgradeCosts from "./components/UpgradeCosts";
import DisplayResources from "./components/DisplayResources";
import type { upgradeType, UpgradeKeys } from "./data/upgrades";

function App() {
  const [cookies, setCookies] = useState(0);
  const [money, setMoney] = useState(0);
  const [cookieRate, setCookieRate] = useState(0);
  const [currentUpgrades, setCurrentUpgrades] = useState<upgradeType>({
    toaster: 0,
    toasterOven: 0,
    oven: 0,
    industrialOven: 0,
    superOven: 0,
    omegaOven: 0,
    gigaOven: 0,
  });

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

  useEffect(() => {
    // Set up an interval to update the state every 1 second
    let currentQuantity = 0;
    const interval = setInterval(() => {
      // Map through each of the key value pairs in the currentUpgrades and apply the upgrade values
      Object.entries(currentUpgrades).map((upgrade) => {
        // @ts-ignore
        currentQuantity += upgrade[1] * upgradeCosts[upgrade[0]].value;
      });
      setCookies((cookies) => cookies + currentQuantity);
      setCookieRate(currentQuantity);
      currentQuantity = 0;
    }, 1000);
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [currentUpgrades]);

  return (
    <main className="max-w-[847px] m-auto">
      <div className="grid gap-2 p-3">
        <h1 className="text-center text-4xl">Cookie Clicker</h1>

        <UpgradeCosts />

        <div className="grid">
          {Object.entries(currentUpgrades).map(([key, value]) => (
            <p key={key}>
              {/* @ts-ignore TODO: FIX THIS TYPE ISSUE */}
              {upgradeCosts[key].display}: {value}
            </p>
          ))}
        </div>

        <div className="rounded rim-light p-2 bg-slate-700">
          <h2>Cookies per second: {cookieRate.toLocaleString("en-US")} 🍪/s</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 items-center">
          {Object.entries(upgradeCosts).map(([key, upgrade]) => (
            <button
              key={key}
              className="btn btn-blue"
              onClick={() => {
                buyUpgrade(`${key}`);
              }}>
              <p>{upgrade.display}</p>
              <p>${upgrade.cost.toLocaleString("en-US")}</p>
            </button>
          ))}
        </div>

        <DisplayResources
          money={money}
          cookies={cookies}
        />

        <div className="flex gap-2">
          <button
            onClick={() => {
              sellCookies();
            }}
            className="btn btn-green w-full">
            Sell Cookies
          </button>
          <button
            onClick={() => {
              addCookies(1);
            }}
            className="btn btn-red w-full">
            Bake Cookie
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
