import { Ui } from "ui";
import ConfigEditor from "./ConfigEditor";
import MhfDatEditor from "./MhfDatEditor";
import QuestEditor from "./QuestEditor";
import QuestlistEditor from "./QuestlistEditor";

function App() {
  return (
    <ConfigEditor>
      <QuestEditor>
        <QuestlistEditor>
          <MhfDatEditor>
            <Ui />
          </MhfDatEditor>
        </QuestlistEditor>
      </QuestEditor>
    </ConfigEditor>
  );
}

export default App;
