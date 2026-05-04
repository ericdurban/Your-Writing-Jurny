import ProgressBar from '../components/Bars/ProgressBar';
import WorldBuildingBar from '../components/Bars/WorldBuildingBar';
import Rte from '../components/Rte';
import AIAssistant from '../components/Bars/AIAssistant';

export default function NovelWriting() {
  return (
    <div>
      <ProgressBar />
      <WorldBuildingBar />
      <Rte />
      <AIAssistant />
    </div>
  );
}
