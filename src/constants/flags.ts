const normalizeFlag = (value?: string): boolean => {
    if (!value) return false;

    return Boolean(Number(value));
};

export const _APP_FLAG_USE_GOOGLE_ANALYTICS = normalizeFlag(
    process.env.NEXT_FLAGS_GOOGLE_ANALYTICS
);
