import Select from "../select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function FormEl(


) {
    return (
        <div>
            <input type="text" placeholder="name" name="name" className="input input-bordered" />
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" name="file" />
                <button type="submit">Upload</button>
                <Select />
            </div>
        </div>
    );
}