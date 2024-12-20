import type { FC } from 'react';

const Logo: FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 400 400"
            className="rlu__shadow h-20 w-20 rounded-full bg-gradient-to-br from-brand to-secondary fill-white dark:fill-black"
        >
            <polygon points="144.23706 132.25879 168.95483 156.83105 190.82739 156.83105 209.42114 156.83105 231.29321 156.83105 256.01001 132.25879 280.72778 156.83105 321.1936 156.83105 288.60181 114.04883 223.41821 114.04883 200.12408 144.62726 176.82886 114.04883 111.64526 114.04883 79.05444 156.83105 119.52026 156.83105 144.23706 132.25879" />
            <polygon points="141.16089 265.71875 132.67261 265.71875 132.67261 177.50488 78.8064 177.50488 78.8064 272.19336 95.78198 285.95117 178.05151 285.95117 195.02759 272.19336 195.02759 177.50488 141.16089 177.50488 141.16089 265.71875" />
            <path d="M248.89282,177.34375v.16113h-44.07227v108.44629h53.86621v-27.83984h45.37891l16.97559-13.75781v-53.25195l-16.97559-13.75781h-55.17285ZM267.17505,237.87891h-8.48828v-40.30273h8.48828v40.30273Z" />
        </svg>
    );
};

export default Logo;
