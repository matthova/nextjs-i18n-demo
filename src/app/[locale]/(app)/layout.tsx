import * as React from 'react';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return <section className="border border-blue-500 h-full">{children}</section>
}