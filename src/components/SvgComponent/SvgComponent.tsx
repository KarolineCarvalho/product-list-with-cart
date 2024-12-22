import React from "react";

interface SvgComponentProps {
  icon:
    | "add_to_cart"
    | "decrement_quantity"
    | "increment_quantity"
    | "remove_item";
  alt: string;
}

function SvgComponent({ icon, alt }: SvgComponentProps) {
  switch (icon) {
    case "add_to_cart":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          fill="none"
          viewBox="0 0 21 20"
        >
          <title>{alt}</title>
          <g fill="#C73B0F" clip-path="url(#a)">
            <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
            <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.333 0h20v20h-20z" />
            </clipPath>
          </defs>
        </svg>
      );

    case "decrement_quantity":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          viewBox="0 0 10 2"
        >
          <title>{alt}</title>
          <path d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      );

    case "increment_quantity":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
        >
          <title>{alt}</title>
          <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
        </svg>
      );

    case "remove_item":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
        >
          <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
        </svg>
      );

    default:
      break;
  }
}

export default SvgComponent;
