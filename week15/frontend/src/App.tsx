import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  return (
    <>
      <Button
        startIcon={<PlusIcon size="sm" />}
        varient="secondary"
        text="Share"
        size="lg"
      />
      <Button varient="primary" text="Add content" size="lg" />
    </>
  );
}

export default App;
