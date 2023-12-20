import { upgradeType, upgradeCosts } from "../data/upgrades";

export default function DisplayUpgrades(props: {
  currentUpgrades: upgradeType;
}) {
  return (
    <div className="grid">
      <h2 className="text-2xl">Your upgrades</h2>
      {Object.entries(props.currentUpgrades).map(([key, value]) => (
        <p key={key}>
          {/* @ts-ignore TODO: FIX THIS TYPE ISSUE */}
          {upgradeCosts[key].display}: {value}
        </p>
      ))}
    </div>
  );
}
