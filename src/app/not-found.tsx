import Link from 'next/link';

import { _APP_ROUTE_HOME } from '@/constants/routes';

import { Button } from '@/components/ui/button';

const phpColor = '#777BB3';

export default function NotFound() {
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center space-y-4 overflow-hidden text-center">
            <h1
                aria-label="404 error"
                className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 font-monoBrand text-[15rem] font-bold text-neutral-200 dark:text-neutral-800 md:text-[18rem]"
            >
                4O4
            </h1>
            <span
                aria-hidden="true"
                className="rlu__text relative z-20 font-monoBrand text-2xl font-bold sm:text-4xl md:text-6xl"
            >
                `_error-&#123;
                <span className="relative z-20 font-medium">{'$code'}</span>
                &#125;<span style={{ color: phpColor }}>.php</span>`
            </span>
            <span className="z-30 text-neutral-500">
                This isn&apos;t the page you&apos;re looking for...
            </span>
            <Button
                asChild
                className="z-30"
            >
                <Link
                    href={_APP_ROUTE_HOME}
                    type="button"
                >
                    Back to learning 🤘
                </Link>
            </Button>
        </div>
    );
}
