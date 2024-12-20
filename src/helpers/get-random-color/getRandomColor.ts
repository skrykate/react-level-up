const getRandomColor = (): string => {
    const random = Math.random();

    const hue = Math.floor(random * 360);

    const saturation = Math.floor(60 + random * 20);

    const lightness = Math.floor(70 + random * 20);

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export default getRandomColor;
