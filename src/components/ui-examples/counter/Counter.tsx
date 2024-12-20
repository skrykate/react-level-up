'use client';

import { useState } from 'react';

import { Minus, Plus } from 'lucide-react';

import { cn } from '@/helpers/cn';

import type { FC } from 'react';

interface CounterProps {
    min: number;
    max: number;
    value: number;
    step?: number;
    className?: string;
    onChange?: (newValue: number) => void;
}

const Counter: FC<CounterProps> = ({
    min,
    max,
    value,
    step = 1,
    className,
    onChange,
}) => {
    const [counter, setCounter] = useState(value);

    const [disabledMin, setDisabledMin] = useState(value <= min);

    const [disabledMax, setDisabledMax] = useState(value >= max);

    const handleChange = (newValue: number) => {
        onChange && onChange(newValue);
    };

    const checkIfDisabled = (nextValue: number) => {
        if (nextValue <= min) {
            setDisabledMin(true);
        } else {
            setDisabledMin(false);
        }

        if (nextValue >= max) {
            setDisabledMax(true);
        } else {
            setDisabledMax(false);
        }
    };

    const handleDicrement = () => {
        if (disabledMin) return;

        const nextValue = counter - step;

        if (nextValue < min) {
            return;
        }

        checkIfDisabled(nextValue);

        setCounter(nextValue);

        handleChange(nextValue);
    };

    const handleIncrement = () => {
        if (disabledMax) return;

        const nextValue = counter + step;

        if (nextValue > max) {
            return;
        }

        checkIfDisabled(nextValue);

        setCounter(nextValue);

        handleChange(nextValue);
    };

    return (
        <div className={cn('flex h-14 w-full', className)}>
            <button
                className="rlu__bg rlu__focus flex h-[3.25rem] w-1/3 items-center justify-center rounded-l-xl border-2 border-r-0 border-blue-500 text-blue-500 shadow-[0_4px_0_0_#3b82f6] transition-all active:translate-y-1 active:shadow-none disabled:pointer-events-none disabled:border-neutral-500 disabled:bg-neutral-300 disabled:text-neutral-600 disabled:shadow-[0_4px_0_0_#737373]"
                onClick={handleDicrement}
                disabled={disabledMin}
            >
                <Minus className="h-8 w-8" />
            </button>
            <div className="rlu__bg flex h-14 w-1/3 items-center justify-center border-2 border-b-[6px] border-blue-500 text-center text-xl italic text-blue-500">
                {counter}
            </div>
            <button
                className="rlu__bg rlu__focus flex h-[3.25rem] w-1/3 items-center justify-center rounded-r-xl border-2 border-l-0 border-blue-500 text-blue-500 shadow-[0_4px_0_0_#3b82f6] transition-all active:translate-y-1 active:shadow-none disabled:pointer-events-none disabled:border-neutral-500 disabled:bg-neutral-300 disabled:text-neutral-600 disabled:shadow-[0_4px_0_0_#737373]"
                onClick={handleIncrement}
                disabled={disabledMax}
            >
                <Plus className="h-8 w-8" />
            </button>
        </div>
    );
};

Counter.displayName = 'Example.Counter';

export default Counter;
