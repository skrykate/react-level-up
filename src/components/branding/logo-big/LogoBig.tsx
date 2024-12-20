import { _APP_COLORS } from '@/constants/design';
import { _APP_ROUTE_NAMES, _APP_ROUTE_HOME } from '@/constants/routes';

import type { FC } from 'react';

const LogoBig: FC = () => {
    return (
        <svg
            aria-label="Logo — React Level Up"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 100 1000 800"
        >
            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="0.598"
                    y1="0.019"
                    x2="0.151"
                    y2="1.668"
                    gradientUnits="objectBoundingBox"
                >
                    <stop
                        offset="0"
                        stopColor={_APP_COLORS.brand}
                    />
                    <stop
                        offset="0.444"
                        stopColor={_APP_COLORS.secondary}
                    />
                </linearGradient>
            </defs>
            <g>
                <path
                    d="M263.831,872.36V659.51h92.4v9.9l15.84-9.9h55.77l34.32,28.05V788.21l-34.32,28.05h-71.61v56.1Zm92.4-174.9v90.75h13.86V688.881ZM43.391,816.26,9.071,788.21V595.16h108.9V775.011h17.159V595.16h108.9V788.21l-34.32,28.05Zm806.85-240v-221.1h92.4v221.1Zm-168.63,0-34.32-28.049V447.56l34.32-28.049h116.16l34.32,28.049v66.33h-92.73v13.86h91.08v48.51Zm57.75-92.73h13.86V447.56h-13.86Zm-276.54,92.73-44.22-75.9v-80.85h99.99v128.7h13.86v-128.7h99.99v80.85l-44.22,75.9Zm-209.55,0-34.32-28.049V447.56l34.32-28.049h116.16l34.32,28.049v66.33h-92.73v13.86H402.1v48.51Zm57.75-92.73h13.86V447.56h-13.86ZM9.071,576.26v-221.1h108.9V505.31H200.8v70.95Zm913.44-240-34.32-28.05v-90.75h-8.25V179.51h9.239l33.99-55.77h57.091v55.77h20.46v37.95h-20.46v80.85h25.079v37.95Zm-219.45,0-34.321-28.05V207.561l34.321-28.05h129.36l34.32,28.05v42.57h-92.07v-42.57h-13.86V308.21h13.86v-44.22h92.07v44.22l-34.32,28.05Zm-144.54,0V318.77l-15.84,17.491H490.54L462.491,301.94V273.891L490.54,239.57h67.981V225.71h-77.55v-46.2h135.3l34.321,28.05v128.7Zm-13.86-30.69,13.86-15.511v-26.4h-13.86Zm-244.2,30.69-34.32-28.05V207.561l34.32-28.05h116.16l34.32,28.05v66.33h-92.73v13.86h91.08v48.51Zm57.75-92.731h13.86V207.561h-13.86Zm-217.47,92.731-16.5-72.27h-6.269v72.27H9.071V115.16h89.1v-.33h111.54l34.32,28.05v93.06l-20.79,16.83,31.351,83.49ZM117.971,213.5h17.159v-57.42H117.971Z"
                    fill="url(#logo-gradient)"
                />
            </g>
        </svg>
    );
};

export default LogoBig;
