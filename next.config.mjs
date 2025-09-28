import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    htmlLimitedBots: /.*/,
};

export default withNextIntl(nextConfig);
