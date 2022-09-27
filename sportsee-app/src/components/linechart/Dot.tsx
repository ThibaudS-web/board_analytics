/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DotProps } from 'recharts'

const CustomDot = (props: DotProps) => {
    const { cx, cy } = props

    return (
        <svg
            width={20}
            height={20}
            x={cx! - 10}
            y={cy!- 10}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 19"
        >
            <g clipPath="url(#a)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 13.86c2.21 0 4-1.78 4-3.975C13 7.69 11.21 5.91 9 5.91S5 7.69 5 9.885c0 2.196 1.79 3.976 4 3.976Z"
                    fill="#fff"
                />
                <path
                    d="M9 16.36c3.575 0 6.5-2.884 6.5-6.475 0-3.59-2.925-6.475-6.5-6.475S2.5 6.295 2.5 9.885c0 3.591 2.925 6.476 6.5 6.476Z"
                    stroke="#fff"
                    strokeOpacity={0.198}
                    strokeWidth={5}
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h18v19H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default CustomDot
