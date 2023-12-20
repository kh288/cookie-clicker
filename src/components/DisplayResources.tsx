import { useEffect, useState } from "react";

export default function DisplayResources(props: {
  money: number;
  cookies: number;
}) {
  const [moneyTrack, setMoneyTrack] = useState(props.money);
  const [moneyChanged, setMoneyChanged] = useState(false);

  const [cookiesTrack, setCookiesTrack] = useState(props.cookies);
  const [cookiesChanged, setCookiesChanged] = useState(false);

  useEffect(() => {
    if (moneyTrack !== props.money) {
      setMoneyChanged(true);
    } else {
      setMoneyChanged(false);
    }
    setTimeout(() => setMoneyChanged(false), 150);
    setMoneyTrack(props.money);
  }, [props.money]);

  useEffect(() => {
    if (cookiesTrack !== props.cookies) {
      setCookiesChanged(true);
    } else {
      setCookiesChanged(false);
    }
    setTimeout(() => setCookiesChanged(false), 150);
    setCookiesTrack(props.cookies);
  }, [props.cookies]);

  return (
    <>
      <div className="grid bg-slate-700 rounded p-2 inset-rim-light">
        <div className="flex justify-evenly">
          <div className="flex">
            <h3
              className={`text-4xl pr-2 ${
                moneyChanged ? "scale-110" : ""
              } transition-transform`}>
              💵
            </h3>
            <h3
              className={`text-4xl ${
                moneyChanged ? "scale-110" : ""
              } transition-transform`}>
              {props.money.toLocaleString("en-US")}
            </h3>
          </div>
          <div className="flex">
            <h3
              className={`text-4xl pr-2 ${
                cookiesChanged ? "scale-110" : ""
              } transition-transform`}>
              🍪
            </h3>
            <h3
              className={`text-4xl ${
                cookiesChanged ? "scale-110" : ""
              } transition-transform`}>
              {props.cookies.toLocaleString("en-US")}
            </h3>
          </div>
        </div>
        <code>5🍪 = 1💵</code>
      </div>
    </>
  );
}
