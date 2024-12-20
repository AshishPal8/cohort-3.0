import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";

const count = atom({
  key: "countState",
  default: 0,
});

function Parent() {
  return (
    <RecoilRoot>
      <Incrase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return (
    <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
  );
}

function Incrase() {
  const setCount = useSetRecoilState(count);
  return (
    <button onClick={() => setCount((count) => count + 1)}>Increase</button>
  );
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App;
