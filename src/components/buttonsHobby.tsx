import { observer } from "mobx-react-lite";
export const ButtonsElements = observer(() => {
  return (
    <>
      <div>
        <select
          name="hooby"
          id="hobby-select"
          className="text-white font-semibold rounded-md py-3 w-50 text-center bg-neutral-800 focus:outline-2 outline-offset-2 focus:outline-solid"
        >
          <option value=""> Select hobby </option>
          <option value="footbol">footbol</option>
          <option value="swimming">swimming</option>
          <option value="basketball">basketball</option>
          <option value="knitting">knitting</option>
          <option value="embroidery"> embroidery</option>
          <option value="modeling">modeling</option>
          <option value="reading">reading</option>
          <option value="cooks">cooks</option>
          <option value="drawing">drawing</option>
          <option value="photography">photography</option>
          <option value="dance">dance</option>
          <option value="camping">camping</option>
          <option value="single combat">single combat</option>
          <option value="plaing computer game">plaing computer game</option>
          <option value="singing">singing</option>
          <option value="other sports">other sports</option>
        </select>
      </div>
    </>
  );
});
