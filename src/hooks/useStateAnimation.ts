import { useMemo, useState } from "react";
// [boolean, (v: boolean) => void, () => void]
export function useStateAnimation(parentSetState: (v: boolean) => void, delay: number = 300): any{
    const [state, setState] = useState(true);
    const [innerClose, unmount] = useMemo(() => {
        let timer: number;
        let innerclose = (v: boolean) => {
            setState(v);
            timer = window.setTimeout(() => {
                parentSetState(v);
                parentSetState(v);
                setState(true);
            }, delay);
        };
        let unmount = () => window.clearTimeout(timer);
        return [innerclose, unmount];
    }, [setState, parentSetState, delay]);
    return [state, innerClose, unmount];
}
