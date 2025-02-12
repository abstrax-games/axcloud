type ThrottleFunction = (...args: any[]) => void;

export const throttle = (fn: ThrottleFunction, delay: number): ThrottleFunction => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let lastTime: number | null = null;

    return function(this: any, ...args: any[]) {
        const now = Date.now();
        if (lastTime && now - lastTime < delay) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                fn.apply(this, args);
                lastTime = Date.now();
            }, delay - (now - lastTime));
        } else {
            fn.apply(this, args);
            lastTime = Date.now();
        }
    };
};
