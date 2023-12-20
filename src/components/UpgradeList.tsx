import type { upgradeCostsType } from "../data/upgrades";

function ButtonDynamic(upgrade: {
  display: string;
  cost: number;
  value: number;
  id: string;
  buyUpgrade: Function;
}) {
  if (
    upgrade.display === "Inferno Pit" ||
    upgrade.display === "Hell Pit" ||
    upgrade.display === "Taco Bell"
  ) {
    return (
      <button
        className="btn btn-red"
        onClick={() => {
          upgrade.buyUpgrade(`${upgrade.id}`);
        }}>
        <p>{upgrade.display}</p>
        <div className="flex justify-around">
          <p>${upgrade.cost.toLocaleString("en-US")}</p>
          <p>{upgrade.value} 🍪/s</p>
        </div>
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-blue"
        onClick={() => {
          upgrade.buyUpgrade(`${upgrade.id}`);
        }}>
        <p>{upgrade.display}</p>
        <div className="flex justify-around">
          <p>${upgrade.cost.toLocaleString("en-US")}</p>
          <p>{upgrade.value} 🍪/s</p>
        </div>
      </button>
    );
  }
}

export default function UpgradeList(props: {
  upgradeCosts: upgradeCostsType;
  buyUpgrade: Function;
}) {
  return (
    <>
      <div className="bg-slate-600 rounded p-2 rim-light grid gap-3">
        <h2 className="text-2xl text-center">SHOP</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 items-center">
          {Object.entries(props.upgradeCosts).map(([key, upgrade]) => (
            <ButtonDynamic
              key={key}
              id={key}
              display={upgrade.display}
              cost={upgrade.cost}
              value={upgrade.value}
              buyUpgrade={props.buyUpgrade}
            />
            // <button
            //   key={key}
            //   className="btn btn-blue"
            //   onClick={() => {
            //     props.buyUpgrade(`${key}`);
            //   }}>
            //   <p>{upgrade.display}</p>
            //   <div className="flex justify-around">
            //     <p>${upgrade.cost.toLocaleString("en-US")}</p>
            //     <p>{upgrade.value} 🍪/s</p>
            //   </div>
            // </button>
          ))}
        </div>
      </div>
    </>
  );
}
