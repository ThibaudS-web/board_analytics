import { SVGProps } from 'react'

const BodyBuilding = (props: SVGProps<SVGSVGElement>) => (
    <svg
        height={64}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 64 64"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                d="M58 0H6a6 6 0 0 0-6 6v52a6 6 0 0 0 6 6h52a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6Z"
                fill="#fff"
            />
            <path
                d="M45.712 36.576 48 34.288 45.712 32 40 37.712 26.288 24 32 18.288 29.712 16l-2.288 2.288L25.136 16l-3.424 3.424-2.288-2.288-2.288 2.288 2.288 2.288L16 25.136l2.288 2.288L16 29.712 18.288 32 24 26.288 37.712 40 32 45.712 34.288 48l2.288-2.288L38.864 48l3.424-3.424 2.288 2.288 2.288-2.288-2.288-2.288L48 38.864l-2.288-2.288Z"
                fill="#FF0101"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h64v64H0z" />
            </clipPath>
        </defs>
    </svg>
)

export default BodyBuilding
