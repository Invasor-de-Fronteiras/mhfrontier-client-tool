import { Ui } from "ui";
import ConfigEditor from "./ConfigEditor";
import MhfDatEditor from "./MhfDatEditor";
import MhfEmdEditor from "./MhfEmdEditor";
import Tool from "./Tool";

function App() {
  return (
    <ConfigEditor>
      <Tool>
        <MhfDatEditor>
          <MhfEmdEditor>
            <Ui />
          </MhfEmdEditor>
        </MhfDatEditor>
      </Tool>
    </ConfigEditor>
  );
}

export default App;
