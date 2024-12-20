import { IntersectionWrapper } from './intersection-wrapper';
import { ResetControl } from './reset-control';

import type { FC, ReactNode } from 'react';

interface ExampleWrapperProps {
    children?: ReactNode;
    isResetAllowed?: boolean;
    isExpectedOutput?: boolean;
}

const ExampleWrapper: FC<ExampleWrapperProps> = ({
    children,
    isResetAllowed = false,
    isExpectedOutput = true,
}) => {
    return (
        <section className="rlu__shadow rlu__corner rlu__border rlu__bg-dotted relative flex items-center justify-center p-10">
            {isExpectedOutput && (
                <span className="sr-only">
                    An interactive output of the code above
                </span>
            )}
            <IntersectionWrapper>
                {isResetAllowed ? (
                    <ResetControl>{children}</ResetControl>
                ) : (
                    children
                )}
            </IntersectionWrapper>
        </section>
    );
};

export default ExampleWrapper;
