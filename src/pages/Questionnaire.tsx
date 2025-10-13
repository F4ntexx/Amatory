import { Navbar } from "../components/Navbar";
import { SettingQuestionnaire } from "../components/SettingQuestionnaire";
export function Questionnaire() {
  return (
    <>
      <div className="h-screen bg-neutral-950 text-white">
        <Navbar />
        <SettingQuestionnaire />
      </div>
    </>
  );
}
