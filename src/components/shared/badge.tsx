import React from 'react';
import {Badge as ShadcnBadge} from "@/components/ui/badge";

interface BadgeProps {
    children: React.ReactNode;
}

const Badge = ({children}: BadgeProps) => {
    return (
        <ShadcnBadge
            className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700
            dark:bg-emerald-900/30 dark:text-emerald-300 hover:bg-emerald-100">
            {children}
        </ShadcnBadge>
    );
};

export default Badge;
