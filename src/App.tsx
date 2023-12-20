import { useEffect, useState } from "react";
import { upgradeCosts } from "./data/upgrades";
import DisplayResources from "./components/DisplayResources";
import type { upgradeType, UpgradeKeys } from "./data/upgrades";
import ButtonGroup from "./components/ButtonGroup";
import UpgradeList from "./components/UpgradeList";
import CookiesPerSecond from "./components/CookiesPerSecond";
import DisplayUpgrades from "./components/DisplayUpgrades";

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

        <DisplayUpgrades currentUpgrades={currentUpgrades} />
        <CookiesPerSecond cookieRate={cookieRate} />
        <UpgradeList
          upgradeCosts={upgradeCosts}
          buyUpgrade={buyUpgrade}
        />
        <DisplayResources
          money={money}
          cookies={cookies}
        />
        <ButtonGroup
          buttonAction1={sellCookies}
          buttonAction2={addCookies}
        />
      </div>
    </main>
  );
}

export default App;
