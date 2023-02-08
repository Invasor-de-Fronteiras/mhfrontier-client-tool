import { Ui } from "ui";
import { ToolContextProvider } from "ui/lib/context/ToolContext";
import ConfigEditor from "./ConfigEditor";
import MhfDatEditor from "./MhfDatEditor";

function App() {
  return (
    <ConfigEditor>
      <ToolContextProvider>
        <MhfDatEditor>
          <Ui />
        </MhfDatEditor>
      </ToolContextProvider>
    </ConfigEditor>
  );
}

export default App;
