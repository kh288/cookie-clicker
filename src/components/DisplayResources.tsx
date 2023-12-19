export default function DisplayResources(props: {
  money: number;
  cookies: number;
}) {
  return (
    <>
      <div className="grid bg-slate-700 rounded p-3 inset-rim-light">
        <code className="absolute">5🍪 = 1💵</code>
        <div className="flex justify-evenly">
          <div className="flex">
            <h3 className="text-4xl">💵</h3>
            <h3 className="text-4xl">{props.money.toLocaleString("en-US")}</h3>
          </div>
          <div className="flex">
            <h3 className="text-4xl">🍪</h3>
            <h3 className="text-4xl">
              {props.cookies.toLocaleString("en-US")}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
