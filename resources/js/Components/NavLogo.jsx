import React from "react";

const NavLogo = ({ color = "black" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 115.7 125"
        className="w-full h-full"
    >
        <g fill={color}>
            <path d="M18.6 113.4c1.9-1.7 2.9-4.2 2.9-7.3V72h-9.6c-6.1 0-9.7 3.6-9.7 9.6v40.9h19.7v-8.2h-4.3l1-.9zm-5.7.8c0 1-.4 1.7-1.1 1.7h-1V81.6c0-1 .5-1.7 1.1-1.7h1v34.3zM40.1 106.9c1.8-1.7 2.9-4.1 2.9-6.8V87.3l-3.1 1.9 3.1-7.8V72H23.6v50.5h8.6v-10.3h2.2v10.3H43v-14.8h-3.9l1-.8zm-5.8-4.1c0 .7-.3 1.5-1 1.5h-1.1V79.9h2.1v22.9zM63.1 82.5c-.2.2-.5.3-.6.4-.8.6-1.7 1-2.7 1-1.5 0-2.9-.8-3.7-2.1-.4-.7-.6-1.6-.6-2.4-2.4 1.6-4.3 2.8-5.2 3.4L45 86v36.5h6V91.3h1.8v31.2h5.6V91.3h1.8v31.2h6V81.2c-1.4.4-2.4.9-3.1 1.3zM69 80.8c-.6 1.1-1 2.3-1 3.9v37.9h6.8c4.4 0 7-2.6 7-6.9V81c-2.8-.3-5.6-.5-8.1-.5-1.8 0-3.3.1-4.7.3zm5.1 11.9c0-.8.4-1.4 1-1.4h.9v24.4c0 .8-.4 1.4-1 1.4h-.9V92.7zM95.5 111.1c1.3-1.2 2.1-3 2.1-4.9V83.8c-4.3-1-9.1-2-13.9-2.6v41.3h6V115h1.9v7.5h6v-10.6h-3l.9-.8zm-4-2.9c0 .6-.3 1.2-.9 1.2h-1V91.3h1.8v16.9zM112.6 87.9l-.7-.2c-.8-.3-2.5-.8-4.6-1.4v23.1h-1.8V85.8c-1.8-.5-3.8-1-6-1.6V115h7.8v.7c0 .7-.4 1.2-1 1.2h-6.9v5.7h6.8c4.3 0 7-2.6 7-6.9V87.9h-.6zM60.6 23.9c.1.1.3.2.5.1 2.5-.7 5-1 7.3-1 .3 0 .5-.3.4-.6l-1.2-4.8c-.1-.5.6-.8.8-.3l3.5 5.9c.1.1.2.2.3.2 3.2.6 6.1 1.7 8.6 3.4.2.1.4.1.6 0l3.5-3.1c.4-.3 1 .1.7.6l-2.4 3.9c-.1.2-.1.4.1.6 3 2.7 5.1 6.2 6.3 10.3 0 .2.2.3.4.3l3.2.6c.5.1.5.8 0 .9l-2.6.3c-.3 0-.4.3-.4.5.8 4.8.2 10.1-2.1 15.6-.1.2 0 .3.1.5 3 3.8 9.4 10.2 13.1 13.3.4.3.9-.1.7-.5-1.5-4.3-1-10.8-.1-14.9 0-.1 0-.3-.1-.4L97.6 51c-.4-.4.1-1 .5-.7l3.9 2.2c.3.1.6 0 .7-.3 1.9-8.4 1.5-16.7-.8-24-.1-.2-.3-.3-.5-.3l-5.5.6c-.5.1-.7-.7-.2-.9l4.8-2.1c.2-.1.3-.4.2-.6-2.4-5.8-6.2-10.8-11-14.6-.2-.1-.4-.1-.6 0l-.3.3c-.4.4-1-.1-.7-.5l.2-.3c.1-.2.1-.5-.1-.6-.3-.2-.5-.4-.8-.5-.2-.1-.5-.1-.6.2l-2.1 3.5c-.3.4-1 .2-.8-.3l1-4.4c0-.2 0-.4-.2-.5-8.2-4.6-18.7-6-30.9-3.3-.3.1-.4.4-.3.6l2.3 4.9c.2.5-.4.9-.7.5l-4.6-5c-.1-.1-.3-.2-.5-.1-1.5.4-3 .9-4.6 1.5-.4.1-.4.5-.2.7l15.4 16.9z" />
            <path d="M75.2 49.8c1.9.1 4.3.5 7 1.5 1.2-1.1 1.6-5.9 1.9-9.1-16.8-1.6-29.3-13.3-32.6-17.1-.3-.4-.9-.2-1 .3-1.1 4.2-4.9 19.3-5.2 27.3-.1 1.9 2.1 3 3.5 1.8 0 0-2.2-4.8-.2-9.1 1.1-2 3-3.5 5.3-3.8l10.2-1.5-8.5 5.4c-6.8 4.8-3.3 11.7-3.3 15.7S51.2 72 48.2 79.4c.1-.1 17.3-10.7 20.8-18.1l-.2-.2c-3.3-5 .4-11.6 6.4-11.3zM113.5 83.4c-1.6-2.4-3.6-4.7-5.6-6.6l-.1-.1c-5.7-2-11-5.3-15.3-9.6-2.5-2.5-5-5.2-6.6-7.2-.1-.1-.2-.1-.3-.1-6.6.3-12.6 4-15.7 6.3-.3.2 0 .6.3.5 6-2.2 14.5-1.1 19.3 1.6.3.2.1.6-.2.6-4.2-.4-17.5-1.2-24.3 3.3-2.3 1.5-4.5 5.2-5.7 7.4-.2.3.2.6.5.4 10.8-8.8 47.2 2.1 53.2 4 .4 0 .6-.3.5-.5z" />
        </g>
    </svg>
);

export default NavLogo;
