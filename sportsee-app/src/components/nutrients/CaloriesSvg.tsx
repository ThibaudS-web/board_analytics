import { SVGProps } from 'react'

const CaloriesSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={60}
        height={60}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect opacity={0.066} width={60} height={60} rx={6} fill="red" />
        <path
            d="M31.905 28.866s.932-5.485-2.873-7.866a6.713 6.713 0 0 1-2.532 4.859c-1.625 1.428-4.681 4.641-4.649 8.066A7.856 7.856 0 0 0 26.165 41a4.98 4.98 0 0 1 1.742-3.444 4.066 4.066 0 0 0 1.558-2.731 7.32 7.32 0 0 1 3.875 6.101v.017a7.354 7.354 0 0 0 4.285-6.383c.27-3.218-1.492-7.593-3.056-9.023a8.49 8.49 0 0 1-2.664 3.33Z"
            fill="red"
        />
    </svg>
)

export default CaloriesSvg