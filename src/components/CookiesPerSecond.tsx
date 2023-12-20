export default function CookiesPerSecond(props: { cookieRate: number }) {
  return (
    <div className="rounded rim-light p-2 bg-slate-600">
      <h2 className="text-4xl text-center">
        {props.cookieRate.toLocaleString("en-US")} 🍪/s
      </h2>
    </div>
  );
}
