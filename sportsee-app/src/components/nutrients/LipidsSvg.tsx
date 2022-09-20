import { SVGProps } from 'react'

const LipidsSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={60}
        height={60}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width={60} height={60} rx={6} fill="#FD5181" fillOpacity={0.1} />
        <path
            d="M21.25 36c0 2.125 1.625 3.75 3.75 3.75h10c2.125 0 3.75-1.625 3.75-3.75h-17.5ZM38.75 33.5h-17.5c-.75 0-1.25-.5-1.25-1.25S20.5 31 21.25 31h17.5c.75 0 1.25.5 1.25 1.25s-.5 1.25-1.25 1.25Z"
            fill="#FD5181"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.25 21h-2.5c-4.125 0-7.5 3.375-7.5 7.5h17.5c0-4.125-3.375-7.5-7.5-7.5Zm-3.75 5c-.75 0-1.25-.5-1.25-1.25s.5-1.25 1.25-1.25 1.25.5 1.25 1.25S28.25 26 27.5 26Zm5 0c0 .75.5 1.25 1.25 1.25S35 26.75 35 26s-.5-1.25-1.25-1.25-1.25.5-1.25 1.25Z"
            fill="#FD5181"
        />
    </svg>
)

export default LipidsSvg
