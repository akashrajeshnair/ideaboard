import { useState } from "react";
import { Button } from "./components/ui/button";
import axios from "axios";


const TempWindow = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [result, setResult] = useState<string>("");
    
    const generateText = async () => {
        try {
            const response = await axios.post('https://ideaboard.onrender.com/prompt', {prompt});
            setResult(response.data.answer);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="h-3/5 w-3/5 mx-auto mt-10 bg-slate-800 block">
            <input className="text-black mx-auto mt-10 block rounded-full" type="text" name="prompt" id="prompt" onChange={e => setPrompt(e.target.value)}/>
            <Button className="bg-black hover:bg-gray-800 mx-auto" onClick={generateText}>Generate</Button>
            {
                result && <div>{result}</div>
            }
        </div>
    )
}

export default TempWindow;