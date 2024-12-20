import { useEffect, useState } from 'react';

import type { RefObject } from 'react';

const useHover = (ref: RefObject<HTMLElement>): boolean => {
    const [isHovering, setHovering] = useState(false);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const node = ref.current;

        const onEnter = () => setHovering(true);
        const onLeave = () => setHovering(false);

        node.addEventListener('mouseenter', onEnter);
        node.addEventListener('mouseleave', onLeave);

        return () => {
            node.removeEventListener('mouseenter', onEnter);
            node.removeEventListener('mouseleave', onLeave);
        };
    }, [ref]);

    return isHovering;
};

export default useHover;
