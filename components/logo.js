export default function Logo({ className }) {
  return (
    <>
      <span className="sr-only">Reece</span>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 110 41"
      >
        <g clipPath="url(#a)">
          <mask
            id="b"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="110"
            height="41"
          >
            <path d="M110 .012H0v40.334h110V.011Z" fill="#fff" />
          </mask>
          <g mask="url(#b)">
            <path
              d="M54.994 0A284.917 284.917 0 0 0 3.677 4.558s-3.64.57-3.64 3.952v23.131c0 3.2 3.64 3.819 3.64 3.819a267.106 267.106 0 0 0 51.317 4.85 267.08 267.08 0 0 0 51.317-4.85s3.64-.618 3.64-3.819V8.45c0-3.383-3.64-3.952-3.64-3.952A284.868 284.868 0 0 0 54.994 0Z"
              fill="#003057"
            />
            <path
              d="M18.602 15.566h.061a5.52 5.52 0 0 1 5.133-2.813h1.08v5.407a4.567 4.567 0 0 0-2.427-.521c-3.13 0-3.895 2.073-3.895 4.85v6.315h-5.582V12.96h5.63v2.606ZM43.745 21.834H31.89A3.148 3.148 0 0 0 34 25.218c.456.156.942.205 1.42.143a2.817 2.817 0 0 0 2.695-1.406h5.412c-.898 3.746-4.454 5.443-8.07 5.443-5.254 0-9.186-2.97-9.186-8.486 0-5.285 3.64-8.486 8.786-8.486 5.509 0 8.688 3.407 8.688 8.814v.594Zm-5.23-3.25a3.37 3.37 0 0 0-3.264-2.519 3.376 3.376 0 0 0-3.264 2.52h6.528ZM63.112 21.834H51.257a3.15 3.15 0 0 0 2.11 3.384c.456.156.942.205 1.42.143a2.818 2.818 0 0 0 2.682-1.406h5.425c-.898 3.746-4.454 5.443-8.07 5.443-5.254 0-9.186-2.97-9.186-8.486 0-5.285 3.64-8.486 8.786-8.486 5.509 0 8.688 3.407 8.688 8.814v.594Zm-5.23-3.25a3.37 3.37 0 0 0-3.264-2.519 3.376 3.376 0 0 0-3.264 2.52h6.528ZM97.392 21.834H85.55a3.149 3.149 0 0 0 2.11 3.384c.457.156.943.205 1.421.143a2.818 2.818 0 0 0 2.682-1.406h5.412c-.898 3.746-4.454 5.443-8.07 5.443-5.254 0-9.186-2.97-9.186-8.486 0-5.285 3.64-8.486 8.786-8.486 5.509 0 8.688 3.407 8.688 8.814v.594Zm-5.254-3.25a3.37 3.37 0 0 0-3.264-2.519 3.376 3.376 0 0 0-3.264 2.52h6.528ZM77.516 18.124a4.978 4.978 0 0 0-2.913-1.115 3.813 3.813 0 0 0-3.593 2.377c-.191.473-.286.98-.278 1.49a3.767 3.767 0 0 0 2.436 3.652c.488.185 1.01.267 1.532.24a4.322 4.322 0 0 0 2.816-1.08l1.432 3.965a9.252 9.252 0 0 1-5.4 1.697 8.38 8.38 0 0 1-7.957-5.05 8.357 8.357 0 0 1-.683-3.242 8.481 8.481 0 0 1 5.478-8.088 8.5 8.5 0 0 1 3.404-.544 9.227 9.227 0 0 1 5.194 1.83l-1.468 3.868Z"
              fill="#fff"
            />
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h110v40.333H0z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
