import { SVGProps } from 'react'

const Meditation = (props: SVGProps<SVGSVGElement>) => (
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
                d="M32 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM50 38v-4c-4.48 0-8.32-1.92-11.2-5.36l-2.68-3.2A3.96 3.96 0 0 0 33.06 24h-2.1c-1.18 0-2.3.52-3.06 1.44l-2.68 3.2C22.32 32.08 18.48 34 14 34v4c5.54 0 10.38-2.34 14-6.5V36l-7.76 3.1A3.594 3.594 0 0 0 18 42.42C18 44.4 19.6 46 21.58 46H26v-1c0-2.76 2.24-5 5-5h6c.56 0 1 .44 1 1s-.44 1-1 1h-6c-1.66 0-3 1.34-3 3v1h14.42C44.4 46 46 44.4 46 42.42c0-1.46-.9-2.78-2.24-3.32L36 36v-4.5c3.62 4.16 8.46 6.5 14 6.5Z"
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

export default Meditation
