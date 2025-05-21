import React from 'react';

interface Props {
    title: string;
    subtitle?: string;
    htype?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const HeadTitle = ({ title, subtitle, htype = "h2" }: Props) => {
    const Tag = htype;

    return (
        <>
            <Tag className="title">{title}</Tag>
            {subtitle && (
                <p className="subtitle">{subtitle}</p>
            )}
        </>
    );
};

export default HeadTitle;
