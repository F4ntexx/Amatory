import { observer } from "mobx-react-lite";
export const AchievementElement = observer((props:any) => {
  return (
    <>
      <div className="flex flex-col py-5 h-30 w-30 bg-neutral-900" {...props.achievements}>
        <img src={props.image} className="h-15 filter-grayscale invert-100" />
        <p className="text-center">{props.title}</p>
      </div>
    </>
  );
});
