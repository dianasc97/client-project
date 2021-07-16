import React, {useCallback, useState} from 'react';
import ArraySizeService from '../../services/arraysize';
import "./body.css";

function Body(){
    const [information, setInformation] = useState();
    const [received, setReceived] = useState();
    const [disable, setDisable] = useState(false);
    
    const handleSubmit = useCallback(async () => {
        setDisable(true);
        const response = await ArraySizeService.bogosort(information);
        if(response.data.length >= 1){
            await setReceived(response.data);
        }
        setDisable(false);
    },[information])
    return(
      <div class="field">
       <label class="label">Bogosort</label>
        <div class="control">
         <input class="input"
          type="text"
          placeholder="Information"
          value={information}
          onChange={(event) => {
           setInformation(event.target.value);
           }}
          />
        </div>
        <div class="button">
            <button class="button is-light"
            onClick={handleSubmit}
            disabled={disable}
            >Send</button>
        </div>
        <label class="label">Size: {received ? received[0] : 0 }</label>
        <label class="label">Iterations: {received ? received[1] : 0}</label>
        <label class="label">Time: {received ? received[2] : 0} seconds </label>
    </div>
    )
}

export default Body