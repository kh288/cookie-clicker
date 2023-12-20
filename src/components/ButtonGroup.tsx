export default function ButtonGroup(props: {
  buttonAction1: Function;
  buttonAction2: Function;
}) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          props.buttonAction1();
        }}
        className="btn btn-green w-full">
        Sell Cookies
      </button>
      <button
        onClick={() => {
          props.buttonAction2(1);
        }}
        className="btn btn-red w-full">
        Bake Cookie
      </button>
    </div>
  );
}
