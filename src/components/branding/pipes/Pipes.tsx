import type { FC } from 'react';

const Pipes: FC = () => {
    return (
        <div className="relative h-20 w-20 before:absolute before:left-0 before:top-0 before:h-20 before:w-6 before:bg-gradient-to-r before:from-secondary before:to-brand after:absolute after:right-0 after:top-0 after:h-20 after:w-6 after:bg-gradient-to-r after:from-brand after:to-secondary md:h-40 md:before:h-40 md:after:h-40" />
    );
};

export default Pipes;
