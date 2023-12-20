export default function ButtonGroup(props: {
  buttonAction1: Function;
  buttonAction1Modifier?: any;
  buttonAction2: Function;
  buttonAction2Modifier?: any;
}) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          props.buttonAction1(props.buttonAction1Modifier);
        }}
        className="btn btn-green w-full">
        Sell Cookies
      </button>
      <button
        onClick={() => {
          props.buttonAction2(props.buttonAction2Modifier);
        }}
        className="btn btn-red w-full">
        Bake Cookie
      </button>
    </div>
  );
}
