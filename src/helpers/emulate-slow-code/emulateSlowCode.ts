const emulateSlowCode = (ms: number): void => {
    const endTime = Date.now() + ms;

    while (Date.now() < endTime) {}
};

export default emulateSlowCode;
