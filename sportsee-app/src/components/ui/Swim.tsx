import { SVGProps } from 'react'

const Swim = (props: SVGProps<SVGSVGElement>) => (
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
                d="M29.333 26.667 25 31c.413.16.747.36 1.027.52.493.307.786.48 1.533.48.747 0 1.04-.173 1.533-.48.614-.36 1.44-.853 2.92-.853s2.307.493 2.907.853c.493.293.8.48 1.533.48.734 0 1.04-.173 1.534-.48.16-.093.346-.2.546-.307l-8.56-8.546C27.907 20.6 26 19.987 22.667 20v3.333c2.426-.013 3.853.52 5.333 2l1.333 1.334Zm16 11.333h-.026.026Zm-22.2-1.333c.734 0 1.04.186 1.534.48.6.36 1.426.853 2.906.853 1.48 0 2.307-.493 2.907-.853.493-.307.787-.48 1.533-.48.734 0 1.04.186 1.534.48.6.36 1.426.853 2.906.853 1.48 0 2.307-.493 2.907-.853.493-.307.787-.48 1.533-.48.734 0 1.04.186 1.534.48.6.36 1.413.84 2.88.853v-2.667c-.734 0-1.04-.186-1.534-.48-.6-.36-1.426-.853-2.906-.853-1.48 0-2.307.493-2.907.853-.493.307-.8.48-1.533.48-.734 0-1.04-.186-1.534-.48-.6-.36-1.426-.853-2.906-.853-1.48 0-2.307.493-2.907.853-.493.307-.787.48-1.533.48-.734 0-1.04-.186-1.534-.48-.6-.36-1.426-.853-2.906-.853-1.48 0-2.307.493-2.907.853-.493.307-.787.48-1.533.48V38c1.48 0 2.306-.493 2.933-.853.493-.307.8-.48 1.533-.48ZM40.893 40c-1.48 0-2.306.493-2.906.853-.494.307-.8.48-1.534.48-.733 0-1.04-.186-1.533-.48-.6-.36-1.427-.853-2.907-.853s-2.306.493-2.92.853c-.493.307-.786.48-1.533.48-.747 0-1.04-.173-1.533-.48-.6-.36-1.427-.853-2.907-.853s-2.307.493-2.92.853c-.493.307-.787.48-1.533.48V44c1.48 0 2.306-.493 2.92-.853.493-.307.8-.48 1.533-.48.733 0 1.04.173 1.533.48.6.36 1.427.853 2.907.853s2.307-.493 2.92-.853c.493-.307.787-.48 1.533-.48.734 0 1.04.186 1.534.48.6.36 1.426.853 2.906.853 1.48 0 2.294-.493 2.907-.853.493-.307.787-.48 1.533-.48.734 0 1.04.186 1.534.48.6.36 1.426.853 2.906.853v-2.667c-.746 0-1.04-.173-1.533-.48-.6-.36-1.427-.853-2.907-.853ZM38 26.667A3.333 3.333 0 1 0 38 20a3.333 3.333 0 0 0 0 6.667Z"
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

export default Swim
