import type { upgradeCostsType } from "../data/upgrades";

export default function UpgradeList(props: {
  upgradeCosts: upgradeCostsType;
  buyUpgrade: Function;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 items-center">
      {Object.entries(props.upgradeCosts).map(([key, upgrade]) => (
        <button
          key={key}
          className="btn btn-blue"
          onClick={() => {
            props.buyUpgrade(`${key}`);
          }}>
          <p>{upgrade.display}</p>
          <div className="flex justify-around">
            <p>${upgrade.cost.toLocaleString("en-US")}</p>
            <p>{upgrade.value} 🍪/s</p>
          </div>
        </button>
      ))}
    </div>
  );
}
