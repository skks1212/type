interface TaurusDonutProps {
    filledPercentage: number;
    innerRadius: number;
    outerRadius: number;
}

const TaurusDonut: React.FC<TaurusDonutProps> = ({ filledPercentage, innerRadius, outerRadius }) => {
    const radius = (outerRadius - innerRadius) / 2 + innerRadius;
    const strokeWidth = outerRadius - innerRadius;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (filledPercentage / 100) * circumference;

    return (
        <svg
            viewBox={`0 0 ${outerRadius * 2} ${outerRadius * 2}`}
            width="100%"
            height="100%"
            className="absolute inset-0 w-full h-full"
        >
            <circle
                cx={125}
                cy={outerRadius}
                r={radius}
                stroke="var(--type-primaryText)"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform={`rotate(-90 ${(outerRadius + strokeWidth) / 2} ${(outerRadius + strokeWidth) / 2})`}
            />
        </svg>
    );
};

export default TaurusDonut;