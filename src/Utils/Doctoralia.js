import React from "react";

function Doctoralia( {width, height, color, colorBack} ) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 1000 1000"
  >
    <rect width="100%" height="100%" fill={color}></rect>
    <g transform="translate(500.005 500.005) scale(.9091)">
      <rect
        style={{ isCustomFont: "none", fontFileUrl: "none" }}
        width="100"
        height="100"
        x="-50"
        y="-50"
        fill={color}
        rx="0"
        ry="0"
        transform="translate(-450 -450)"
      ></rect>
      <rect
        style={{ isCustomFont: "none", fontFileUrl: "none" }}
        width="100"
        height="100"
        x="-50"
        y="-50"
        fill={color}
        rx="0"
        ry="0"
        transform="translate(-409.09 -409.09) scale(.9091)"
        vectorEffect="non-scaling-stroke"
      ></rect>
      <path
        style={{ isCustomFont: "none", fontFileUrl: "none" }}
        fill={colorBack}
        d="M412 1201H1c0-217.025 0-434.05.381-651.527 24.268 9.58 48.182 19.551 72.034 29.666 19.992 8.478 39.868 17.228 59.875 25.669 24.915 10.511 49.945 20.75 74.864 31.253 20 8.43 39.911 17.076 59.858 25.635 9.214 3.954 10.319 3.597 17.52-3.55 10.947-10.86 22.048-21.566 33.142-32.278 2.835-2.737 5.807-5.345 8.853-7.847 14.61-12.002 29.058-24.215 43.967-35.837 15.108-11.777 30.202-23.683 46.169-34.219 26.685-17.607 53.926-34.389 81.2-51.083 14.94-9.146 30.292-17.648 45.708-25.977 11.972-6.468 24.258-12.37 36.536-18.248 14.195-6.798 28.364-13.695 42.846-19.837 25.775-10.93 51.648-21.652 77.72-31.847 23.524-9.199 47.336-17.667 71.085-26.279 11.534-4.182 11.464-3.985 10.288-16.856-1.48-16.195-2.687-32.414-4.05-48.62-.961-11.432-2.016-22.857-2.977-34.29-1.364-16.22-2.67-32.445-4.02-48.667-.98-11.787-1.99-23.57-2.986-35.356-1.337-15.847-2.672-31.694-4.01-47.541-.995-11.797-2.007-23.593-2.988-35.39-1.348-16.21-2.73-32.415-3.994-48.63-1.084-13.925-1.947-27.867-3.06-41.79C754.518 12.02 753.666 6.518 753 1h508c0 180.358 0 360.716-.292 541.867-.77-.017-1.414-.773-1.699-1.646-2.87-8.803-5.648-17.636-8.519-26.439-8.397-25.754-16.862-51.486-25.23-77.25-8.463-26.051-16.828-52.134-25.265-78.194-4.29-13.249-8.724-26.452-12.902-39.736-.82-2.607-1.88-4.012-4.725-3.6-16.152 2.339-32.322 4.558-48.456 7.016-16.74 2.55-33.51 4.99-50.15 8.1-17.403 3.25-34.836 6.593-51.958 11.041-33.446 8.69-67.012 17.15-99.918 27.624-32.875 10.463-65.133 22.934-97.414 35.179-19.226 7.292-38.158 15.441-56.887 23.946-17.896 8.127-35.48 16.973-52.975 25.943-17.841 9.149-35.669 18.382-53.03 28.397-22.344 12.891-44.573 26.054-66.199 40.104-22.355 14.524-44.322 29.72-65.74 45.59-24.496 18.152-48.412 37.108-72.166 56.23-13.768 11.083-26.894 22.989-39.99 34.876-12.474 11.32-24.694 22.935-36.725 34.728-8.986 8.809-17.543 18.06-26.203 27.199-10.11 10.67-20.3 21.271-30.135 32.192-11.741 13.038-23.371 26.191-34.63 39.646-12.973 15.504-26.188 30.883-38.046 47.225-21.289 29.337-41.878 59.19-62.319 89.129-19.991 29.28-37.302 60.194-54.37 91.244-2.139 3.89-1.859 5.4 1.93 7.742 17.117 10.573 34.04 21.464 50.964 32.344 21.477 13.808 42.86 27.76 64.337 41.57 34.64 22.276 69.32 44.488 103.988 66.721 13.806 8.853 27.653 17.643 41.394 26.595 1.717 1.12 2.9 3.058 4.33 4.617z"
        transform="translate(.784 .781) scale(.7216) translate(-631 -601)"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        style={{ isCustomFont: "none", fontFileUrl: "none" }}
        fill={color}
        d="M412.4 1201c-1.83-1.559-3.013-3.498-4.73-4.617-13.741-8.952-27.588-17.742-41.394-26.595-34.667-22.233-69.348-44.445-103.988-66.72-21.476-13.81-42.86-27.763-64.337-41.57-16.925-10.881-33.847-21.772-50.963-32.345-3.79-2.341-4.07-3.853-1.932-7.742 17.069-31.05 34.38-61.965 54.371-91.244 20.441-29.938 41.03-59.792 62.319-89.129 11.858-16.342 25.073-31.72 38.046-47.225 11.259-13.455 22.889-26.608 34.63-39.646 9.834-10.92 20.025-21.523 30.135-32.192 8.66-9.139 17.217-18.39 26.203-27.2 12.03-11.792 24.25-23.406 36.725-34.727 13.096-11.887 26.222-23.793 39.99-34.876 23.754-19.122 47.67-38.078 72.166-56.23 21.418-15.87 43.385-31.066 65.74-45.59 21.626-14.05 43.855-27.213 66.2-40.104 17.36-10.015 35.188-19.248 53.03-28.397 17.494-8.97 35.078-17.816 52.974-25.943 18.729-8.505 37.66-16.654 56.887-23.946 32.281-12.245 64.539-24.716 97.414-35.18 32.906-10.472 66.472-18.933 99.918-27.623 17.122-4.448 34.555-7.791 51.958-11.042 16.64-3.108 33.41-5.548 50.15-8.1 16.134-2.457 32.304-4.676 48.456-7.015 2.845-.412 3.905.993 4.725 3.6 4.178 13.284 8.612 26.487 12.902 39.736 8.437 26.06 16.802 52.143 25.264 78.194 8.37 25.764 16.834 51.496 25.231 77.25 2.87 8.803 5.648 17.636 8.52 26.44.284.872.928 1.628 1.698 2.108.292 2.04.292 4.411-.09 6.977-12.96 2.773-25.688 4.782-38.088 8.04-30.114 7.912-60.382 15.45-90.014 24.934-29.326 9.387-58.151 20.457-86.814 31.758-23.794 9.38-47.211 19.783-70.457 30.47-16.158 7.428-32.018 15.614-47.518 24.34-23.663 13.319-47.222 26.882-70.228 41.295-23.27 14.579-46.38 29.542-68.516 45.761-23.53 17.24-46.111 35.815-68.582 54.44-17.54 14.536-35.01 29.299-51.198 45.29-24.374 24.076-47.909 49.03-71.203 74.164-13.897 14.996-26.952 30.808-39.838 46.697-13.01 16.042-25.965 32.195-37.817 49.09-15.434 22.003-30.333 44.431-44.403 67.327-15.812 25.733-30.59 52.108-45.508 78.38-5.281 9.302-9.649 19.123-14.434 28.707h-3.6z"
        transform="translate(52.24 114.394) scale(.7216) translate(-702.319 -758.465)"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        style={{ isCustomFont: "none", fontFileUrl: "none" }}
        fill={colorBack}
        d="M416.469 1201c4.316-9.584 8.684-19.405 13.965-28.707 14.918-26.272 29.696-52.647 45.508-78.38 14.07-22.896 28.97-45.324 44.403-67.326 11.852-16.896 24.808-33.05 37.817-49.09 12.886-15.89 25.94-31.702 39.838-46.698 23.294-25.135 46.83-50.088 71.203-74.164 16.189-15.991 33.659-30.754 51.198-45.29 22.47-18.625 45.053-37.2 68.582-54.44 22.136-16.22 45.247-31.182 68.516-45.76 23.006-14.414 46.565-27.977 70.228-41.297 15.5-8.725 31.36-16.911 47.518-24.34 23.246-10.686 46.663-21.088 70.457-30.47 28.663-11.3 57.488-22.37 86.814-31.757 29.632-9.485 59.9-17.022 90.014-24.935 12.4-3.257 25.127-5.266 38.088-7.594.382 216.82.382 433.394.382 650.248-119.687 0-239.375 0-359.87-.232-.399-.755-.085-1.407.43-1.783 11.442-8.334 22.88-16.673 34.371-24.938 16.042-11.54 32.184-22.94 48.178-34.545 19.44-14.106 38.741-28.404 58.16-42.54 17.191-12.516 34.484-24.891 51.628-37.472.856-.628 1.442-3.05.93-3.907-7.467-12.526-15.228-24.876-22.746-37.373-8.2-13.632-16.12-27.432-24.345-41.048-9.133-15.12-18.536-30.076-27.708-45.173-10.754-17.7-21.405-35.462-32.064-53.219-9.175-15.283-18.223-30.643-27.467-45.884-9.917-16.352-20.057-32.57-29.99-48.913-9.254-15.225-18.365-30.537-28.127-46.79-88.645 60.47-157.752 137.12-203.885 232.952 9.342 11.114 17.67 21.222 26.221 31.136 7.711 8.939 15.752 17.594 23.496 26.505 9.958 11.458 19.752 23.058 29.643 34.574 4.492 5.23 9.083 10.373 13.565 15.61 9.553 11.166 19.034 22.394 28.603 33.545 6.724 7.834 13.595 15.541 20.31 23.382 9.355 10.922 18.57 21.965 27.95 32.865 7.255 8.43 14.735 16.664 21.977 25.103 2.153 2.509 3.84 5.419 5.74 8.145H416.469z"
        transform="translate(150.666 199.106) scale(.7216) translate(-838.734 -875.876)"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        style={{ isCustomFont: "none", fontFileUrl: "none" }}
        fill={color}
        d="M752.531 1c1.135 5.517 1.987 11.02 2.43 16.555 1.113 13.922 1.976 27.864 3.06 41.789 1.263 16.215 2.646 32.42 3.994 48.63.981 11.797 1.993 23.593 2.989 35.39 1.337 15.847 2.672 31.694 4.01 47.54.994 11.786 2.006 23.57 2.986 35.357 1.35 16.222 2.655 32.447 4.019 48.667.961 11.433 2.016 22.858 2.977 34.29 1.363 16.206 2.57 32.425 4.05 48.62 1.176 12.87 1.246 12.674-10.288 16.856-23.75 8.612-47.561 17.08-71.085 26.279-26.072 10.195-51.945 20.917-77.72 31.847-14.482 6.142-28.651 13.039-42.846 19.837-12.278 5.879-24.564 11.78-36.536 18.248-15.416 8.329-30.768 16.831-45.709 25.977-27.273 16.694-54.514 33.476-81.199 51.083-15.967 10.536-31.061 22.442-46.169 34.219-14.909 11.622-29.357 23.835-43.967 35.837-3.046 2.502-6.018 5.11-8.853 7.847-11.094 10.712-22.195 21.417-33.142 32.279-7.201 7.146-8.306 7.503-17.52 3.55-19.947-8.56-39.858-17.205-59.858-25.636-24.919-10.503-49.949-20.742-74.864-31.253-20.007-8.44-39.883-17.191-59.875-25.669-23.852-10.115-47.766-20.085-72.034-30.129C1 546.63 1 544.26 1.36 541.637c.779-.915 1.359-1.527 1.595-2.25 7.69-23.565 15.386-47.127 23-70.716 7.472-23.153 14.77-46.363 22.301-69.497 8.77-26.938 17.768-53.802 26.493-80.754 1.01-3.12 1.8-3.624 5.126-2.66 8.57 2.484 17.355 4.233 26.063 6.233 24.849 5.706 49.71 11.358 74.551 17.095 16.9 3.903 33.778 7.898 50.66 11.88 28.53 6.729 57.062 13.443 85.577 20.232 20.475 4.876 40.911 9.915 61.386 14.79 26.78 6.375 53.579 12.67 80.375 18.977 4.975 1.171 9.977 2.23 15.221 3.398 1.155-11.467 2.368-22.014 3.244-32.59 1.155-13.953 2.04-27.928 3.053-41.892.333-4.598.656-9.197 1.071-13.787 1.286-14.215 2.678-28.42 3.901-42.639.802-9.32 1.303-18.666 2.079-27.988 1.254-15.067 2.664-30.12 3.928-45.186.757-9.02 1.25-18.061 2.06-27.075 1.229-13.7 2.733-27.374 3.922-41.077.854-9.85 1.288-19.737 2.082-29.594 1.24-15.39 2.646-30.768 3.94-46.155.4-4.743.594-9.503 1.005-14.245C505.296 31.09 506.659 16.045 508 1h244.531z"
        transform="translate(-171.444 -192.89) scale(.7216) translate(-392.325 -332.607)"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        style={{ isCustomFont: "none", fontFileUrl: "none" }}
        fill={colorBack}
        d="M507.531 1c-.872 15.045-2.235 30.089-3.54 45.137-.41 4.742-.604 9.502-1.003 14.245-1.295 15.387-2.7 30.764-3.94 46.155-.795 9.857-1.229 19.743-2.083 29.594-1.19 13.703-2.693 27.378-3.922 41.077-.81 9.014-1.303 18.056-2.06 27.075-1.264 15.066-2.674 30.12-3.928 45.186-.776 9.322-1.277 18.668-2.079 27.988-1.223 14.22-2.615 28.424-3.9 42.639-.416 4.59-.739 9.19-1.072 13.787-1.014 13.964-1.898 27.94-3.053 41.892-.876 10.576-2.09 21.123-3.244 32.59-5.244-1.168-10.246-2.227-15.221-3.398-26.796-6.306-53.595-12.602-80.375-18.978-20.475-4.874-40.91-9.913-61.386-14.788-28.515-6.79-57.048-13.504-85.577-20.233-16.882-3.982-33.76-7.977-50.66-11.88-24.841-5.737-49.702-11.39-74.551-17.095-8.708-2-17.493-3.75-26.063-6.233-3.326-.964-4.116-.46-5.126 2.66-8.725 26.952-17.723 53.816-26.493 80.754-7.53 23.134-14.829 46.344-22.301 69.497-7.614 23.59-15.31 47.151-23 70.715-.236.724-.816 1.336-1.595 1.807C1 361.075 1 181.15 1 1h506.531z"
        transform="translate(-271.067 -237.277) scale(.7216) translate(-254.266 -271.097)"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        style={{ isCustomFont: "none", fontFileUrl: "none" }}
        fill={color}
        d="M896.417 1201c-2.317-2.726-4.004-5.636-6.157-8.145-7.242-8.44-14.722-16.674-21.977-25.103-9.38-10.9-18.595-21.943-27.95-32.865-6.715-7.84-13.586-15.548-20.31-23.382-9.57-11.15-19.05-22.379-28.603-33.544-4.482-5.238-9.073-10.382-13.565-15.611-9.89-11.516-19.685-23.116-29.643-34.574-7.744-8.911-15.785-17.566-23.496-26.505-8.552-9.914-16.88-20.022-26.221-31.136 46.133-95.833 115.24-172.483 203.885-232.951 9.762 16.252 18.873 31.564 28.127 46.79 9.933 16.342 20.073 32.56 29.99 48.912 9.244 15.241 18.292 30.6 27.467 45.884 10.66 17.757 21.31 35.52 32.064 53.22 9.172 15.096 18.575 30.052 27.708 45.172 8.226 13.616 16.145 27.416 24.345 41.048 7.518 12.497 15.28 24.847 22.746 37.373.512.857-.074 3.279-.93 3.907-17.144 12.58-34.437 24.956-51.628 37.471-19.419 14.137-38.72 28.435-58.16 42.54-15.994 11.606-32.136 23.006-48.178 34.546-11.49 8.265-22.93 16.604-34.371 24.938-.515.376-.829 1.028-.898 1.783-1.05.232-2.44.232-4.245.232z"
        transform="translate(192.521 266.361) scale(.7216) translate(-896.757 -969.092)"
        vectorEffect="non-scaling-stroke"
      ></path>
    </g>
  </svg>
  );
}

export default Doctoralia;