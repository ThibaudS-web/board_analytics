import { SVGProps } from 'react'

const ProteinsSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={60}
        height={60}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width={60} height={60} rx={6} fill="#4AB8FF" fillOpacity={0.1} />
        <path
            d="M39.235 24.47c-.353-.352-.823-.588-1.176-.588-.118-.47-.235-.823-.588-1.176-.824-.824-2.236-.824-3.06 0-.705.706-.823 1.882-.235 2.706l-2.588 2.47-1.294-1.294-2.588 2.588c-.235-.117-.588-.117-.824-.117-3.294 0-5.882 2.588-5.882 5.882 0 3.294 2.588 5.883 5.882 5.883 3.294 0 5.883-2.589 5.883-5.883 0-.235 0-.588-.118-.823l2.588-2.589-1.294-1.294 2.47-2.47c.824.588 2 .47 2.707-.236a2.102 2.102 0 0 0 .117-3.058Z"
            fill="#4AB8FF"
        />
    </svg>
)

export default ProteinsSvg
