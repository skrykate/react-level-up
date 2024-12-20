'use client';

import { useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';
import { Kbd } from '@/components/ui-examples/kbd';

import { Message } from '@/components/ui-typography-examples/message';
import { Text } from '@/components/ui-typography-examples/text';

import { loadData } from '@/fake-api/questions';

import { useKeyPress } from '@/hooks/use-key-press';

import type { FC } from 'react';

const KEY_SHOW_ANSWER = 'Shift';

const questions = loadData();

const Container: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const isShiftPressed = useKeyPress(KEY_SHOW_ANSWER);

    const handleNext = () => {
        if (currentIndex === questions.length - 1) {
            setCurrentIndex(0);

            return;
        }

        setCurrentIndex((prev) => prev + 1);
    };

    const currentQuestion = questions[currentIndex];

    return (
        <Layer title="Container">
            <Text className="md:h-24">{currentQuestion.question}</Text>
            <Text>
                Answer: {isShiftPressed ? currentQuestion.answer : '⁉️😸⁉️'}
            </Text>
            <div className="flex w-full justify-center">
                <Button onClick={handleNext}>Next Question</Button>
            </div>
            <Message>
                <span>
                    Press the following key on your keyboard to reveal the
                    correct answer:
                </span>
                <Kbd id={KEY_SHOW_ANSWER} />
            </Message>
        </Layer>
    );
};

export default Container;
