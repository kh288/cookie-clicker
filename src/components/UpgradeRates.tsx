import { upgradeCosts } from "../data/upgrades";
// INTEGRATED INTO UPGRADE BUTTONS FOR NOW
export default function UpgradeRates() {
  return (
    <div className="grid bg-slate-700 p-2 gap-2 rounded inset-rim-light">
      <div className="flex justify-between">
        <h2 className="text-2xl">Upgrade Rates</h2>
      </div>

      <div className="grid">
        {Object.entries(upgradeCosts).map(([key, upgrade]) => (
          <code key={key}>
            {upgrade.display}: {upgrade.value} 🍪/s
          </code>
        ))}
      </div>
    </div>
  );
}
