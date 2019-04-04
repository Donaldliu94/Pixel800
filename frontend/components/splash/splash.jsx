import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    constructor(props) {
        super(props);
    }

    getLogo(){
        return(
            <svg height="20" viewBox="0 0 138.95 31.55"><path d="M 99.65 9.65 L 99.4 9.8 A 0.333 0.333 0 0 1 99.347 9.796 Q 99.25 9.78 99.25 9.7 Q 99.925 8.395 102.321 7.657 A 13.215 13.215 0 0 1 102.875 7.5 A 22.677 22.677 0 0 1 107.655 6.768 A 20.725 20.725 0 0 1 108.525 6.75 A 9.078 9.078 0 0 1 112.512 7.697 A 11.845 11.845 0 0 1 113.95 8.525 Q 115.842 9.792 116.383 11.416 A 4.269 4.269 0 0 1 116.6 12.775 A 8.545 8.545 0 0 1 116.188 15.331 Q 115.865 16.362 115.291 17.441 A 15.893 15.893 0 0 1 114.95 18.05 Q 113.3 20.85 110.9 23.125 Q 108.5 25.4 105.65 26.95 A 15.869 15.869 0 0 1 103.759 27.832 Q 102.018 28.5 100.525 28.5 A 6.109 6.109 0 0 1 98.551 28.192 A 5.256 5.256 0 0 1 96.7 27.1 A 4.497 4.497 0 0 1 95.156 23.86 A 5.519 5.519 0 0 1 95.15 23.6 A 7.9 7.9 0 0 1 95.423 21.657 Q 95.919 19.718 97.316 17.148 A 40.627 40.627 0 0 1 98.25 15.525 Q 101.053 10.892 103.201 10.447 A 2.211 2.211 0 0 1 103.65 10.4 A 1.051 1.051 0 0 1 103.928 10.443 Q 104.204 10.52 104.582 10.734 A 6.99 6.99 0 0 1 104.975 10.975 Q 105.719 11.464 105.83 11.79 A 0.34 0.34 0 0 1 105.85 11.9 A 0.133 0.133 0 0 1 105.778 12.015 Q 105.665 12.085 105.377 12.097 A 3.028 3.028 0 0 1 105.25 12.1 L 104.9 12.1 A 2.083 2.083 0 0 0 103.901 12.406 Q 102.613 13.125 100.79 15.538 A 36.806 36.806 0 0 0 99.95 16.7 A 36.814 36.814 0 0 0 98.626 18.733 Q 96.771 21.815 96.75 23.609 A 3.495 3.495 0 0 0 96.75 23.65 A 3.396 3.396 0 0 0 96.912 24.747 Q 97.441 26.3 99.7 26.3 Q 102.1 26.3 105.7 23.8 Q 109.3 21.3 112.025 17.75 A 20.078 20.078 0 0 0 113.335 15.841 Q 114.566 13.781 114.726 12.095 A 5.241 5.241 0 0 0 114.75 11.6 Q 114.75 8.721 109.613 8.354 A 22.676 22.676 0 0 0 108 8.3 Q 103.2 8.3 99.65 9.65 Z M 122 9.65 L 121.75 9.8 A 0.333 0.333 0 0 1 121.697 9.796 Q 121.6 9.78 121.6 9.7 Q 122.275 8.395 124.671 7.657 A 13.215 13.215 0 0 1 125.225 7.5 A 22.677 22.677 0 0 1 130.005 6.768 A 20.725 20.725 0 0 1 130.875 6.75 A 9.078 9.078 0 0 1 134.862 7.697 A 11.845 11.845 0 0 1 136.3 8.525 Q 138.192 9.792 138.733 11.416 A 4.269 4.269 0 0 1 138.95 12.775 A 8.545 8.545 0 0 1 138.538 15.331 Q 138.215 16.362 137.641 17.441 A 15.893 15.893 0 0 1 137.3 18.05 Q 135.65 20.85 133.25 23.125 Q 130.85 25.4 128 26.95 A 15.869 15.869 0 0 1 126.109 27.832 Q 124.368 28.5 122.875 28.5 A 6.109 6.109 0 0 1 120.901 28.192 A 5.256 5.256 0 0 1 119.05 27.1 A 4.497 4.497 0 0 1 117.506 23.86 A 5.519 5.519 0 0 1 117.5 23.6 A 7.9 7.9 0 0 1 117.773 21.657 Q 118.269 19.718 119.666 17.148 A 40.627 40.627 0 0 1 120.6 15.525 Q 123.403 10.892 125.551 10.447 A 2.211 2.211 0 0 1 126 10.4 A 1.051 1.051 0 0 1 126.278 10.443 Q 126.554 10.52 126.932 10.734 A 6.99 6.99 0 0 1 127.325 10.975 Q 128.069 11.464 128.18 11.79 A 0.34 0.34 0 0 1 128.2 11.9 A 0.133 0.133 0 0 1 128.128 12.015 Q 128.015 12.085 127.727 12.097 A 3.028 3.028 0 0 1 127.6 12.1 L 127.25 12.1 A 2.083 2.083 0 0 0 126.251 12.406 Q 124.963 13.125 123.14 15.538 A 36.806 36.806 0 0 0 122.3 16.7 A 36.814 36.814 0 0 0 120.976 18.733 Q 119.121 21.815 119.1 23.609 A 3.495 3.495 0 0 0 119.1 23.65 A 3.396 3.396 0 0 0 119.262 24.747 Q 119.791 26.3 122.05 26.3 Q 124.45 26.3 128.05 23.8 Q 131.65 21.3 134.375 17.75 A 20.078 20.078 0 0 0 135.685 15.841 Q 136.916 13.781 137.076 12.095 A 5.241 5.241 0 0 0 137.1 11.6 Q 137.1 8.721 131.963 8.354 A 22.676 22.676 0 0 0 130.35 8.3 Q 125.55 8.3 122 9.65 Z M 9.15 30.45 L 9.25 31.05 Q 9.25 31.25 9.05 31.25 Q 7.714 31.25 7.653 29.201 A 6.751 6.751 0 0 1 7.65 29 Q 7.65 24.65 11.125 17.825 A 66.216 66.216 0 0 1 19.686 5.042 A 72.96 72.96 0 0 1 19.85 4.85 L 19.85 4.8 Q 7.7 5.8 1.1 10.6 Q 1.017 10.683 0.866 10.697 A 0.703 0.703 0 0 1 0.8 10.7 Q 0.029 10.7 0.001 9.539 A 3.698 3.698 0 0 1 0 9.45 A 1.657 1.657 0 0 1 0.372 8.431 Q 0.873 7.774 2.05 7.2 Q 10.7 3.1 20.65 3.1 A 35.435 35.435 0 0 1 24.35 3.281 Q 28.125 3.678 30.6 4.95 A 8.537 8.537 0 0 1 32.34 6.109 A 5.165 5.165 0 0 1 34.2 10.15 Q 34.2 13.5 29.375 16.25 A 21.262 21.262 0 0 1 23.901 18.471 A 18.227 18.227 0 0 1 19.55 19 A 15.894 15.894 0 0 1 14.394 18.121 A 18.028 18.028 0 0 1 14.05 18 A 18.454 18.454 0 0 0 13.045 19.594 Q 12.008 21.425 10.951 24.048 A 59.314 59.314 0 0 0 10.8 24.425 A 46.736 46.736 0 0 0 10.088 26.339 Q 9.16 29.025 9.15 30.419 A 4.21 4.21 0 0 0 9.15 30.45 Z M 90.45 11.85 L 82.4 17.65 A 26.607 26.607 0 0 1 83.9 19.117 Q 86.25 21.62 86.25 23.3 A 3.41 3.41 0 0 1 85.742 25.06 Q 85.32 25.77 84.55 26.45 A 7.524 7.524 0 0 1 80.519 28.372 A 10.466 10.466 0 0 1 78.85 28.5 Q 76.65 28.5 74.55 27.575 A 9.112 9.112 0 0 1 74.521 27.562 Q 72.45 26.641 72.45 25.4 A 3.198 3.198 0 0 1 72.751 24.111 Q 73.216 23.059 74.396 21.829 A 17.67 17.67 0 0 1 75.25 21 L 79.65 17.65 A 3.355 3.355 0 0 1 79.204 17.286 Q 78.605 16.714 77.85 15.6 A 12.336 12.336 0 0 1 77.415 14.915 Q 76.804 13.869 76.8 13.257 A 1.229 1.229 0 0 1 76.8 13.25 Q 76.8 11.957 78.509 10.565 A 10.861 10.861 0 0 1 78.95 10.225 Q 81.1 8.65 83.95 7.65 A 24.308 24.308 0 0 1 86.348 6.938 Q 87.551 6.651 88.649 6.541 A 14.102 14.102 0 0 1 89.15 6.5 L 89.25 6.5 Q 90.25 6.5 91.25 6.9 Q 91.958 7.183 92.165 7.541 A 0.609 0.609 0 0 1 92.25 7.85 A 0.318 0.318 0 0 1 92.25 7.853 Q 92.248 8.03 92.047 8.048 A 0.538 0.538 0 0 1 92 8.05 A 7.752 7.752 0 0 0 90.88 8.139 Q 89.727 8.308 88.25 8.8 A 83.65 83.65 0 0 0 85.124 9.9 Q 78.3 12.47 78.3 14.25 Q 78.3 14.45 79.625 15.5 Q 80.95 16.55 81.1 16.55 A 0.068 0.068 0 0 0 81.107 16.582 Q 81.167 16.695 81.775 16.2 A 35.016 35.016 0 0 1 82.342 15.747 Q 82.603 15.543 82.843 15.365 A 20.508 20.508 0 0 1 83 15.25 A 2.77 2.77 0 0 0 83.162 15.147 Q 84.119 14.513 90.55 10.05 Q 93.339 7.803 94.718 5.406 A 10.842 10.842 0 0 0 95.4 4 L 95.5 4 A 0.275 0.275 0 0 1 95.657 4.043 Q 95.765 4.116 95.791 4.31 A 1.039 1.039 0 0 1 95.8 4.45 Q 95.8 7.379 90.527 11.786 A 42.398 42.398 0 0 1 90.45 11.85 Z M 42.75 21.1 L 42.25 17.05 A 11.955 11.955 0 0 0 42.02 16.177 Q 41.765 15.344 41.439 14.823 A 3.189 3.189 0 0 0 41.375 14.725 A 6.326 6.326 0 0 0 41.154 14.417 Q 40.797 13.953 40.534 13.839 A 0.539 0.539 0 0 0 40.5 13.825 A 4.53 4.53 0 0 1 40.39 13.784 Q 40.193 13.708 40.158 13.667 A 0.027 0.027 0 0 1 40.15 13.65 A 0.307 0.307 0 0 1 40.319 13.389 Q 40.607 13.207 41.388 13.164 A 9.728 9.728 0 0 1 41.925 13.15 Q 43.7 13.15 43.9 13.65 Q 44.184 13.981 44.737 19.019 A 225.422 225.422 0 0 1 44.8 19.6 A 18.192 18.192 0 0 1 45.228 19.144 Q 46.31 18.025 48.966 15.498 A 420.83 420.83 0 0 1 49.175 15.3 Q 52.65 12 52.8 12 A 1.156 1.156 0 0 1 53.172 12.055 Q 53.687 12.23 53.7 12.964 A 2.163 2.163 0 0 1 53.7 13 Q 53.7 13.321 53.025 13.854 A 6.474 6.474 0 0 1 52.9 13.95 A 70.735 70.735 0 0 0 50.796 15.686 Q 48.466 17.68 45.435 20.539 A 239.895 239.895 0 0 0 45 20.95 A 24.933 24.933 0 0 0 45.376 23.121 Q 46.155 26.605 47.703 27.252 A 1.917 1.917 0 0 0 48.45 27.4 Q 48.8 27.4 50.1 26.85 A 0.216 0.216 0 0 1 50.159 26.857 Q 50.25 26.883 50.25 27 Q 50.25 27.438 49.139 27.99 A 9.358 9.358 0 0 1 48.8 28.15 Q 47.35 28.8 46.55 28.8 A 2.07 2.07 0 0 1 44.867 27.998 A 3.223 3.223 0 0 1 44.5 27.425 Q 43.8 26.05 43.05 22.4 A 251.824 251.824 0 0 0 41.957 23.519 Q 40.164 25.369 39.5 26.15 A 32.022 32.022 0 0 0 38.528 27.354 A 40.68 40.68 0 0 0 37.75 28.4 Q 35.5 31.55 35.25 31.55 A 0.648 0.648 0 0 1 35.072 31.528 Q 34.8 31.45 34.8 31.1 Q 34.8 30.255 40.287 23.972 A 252.358 252.358 0 0 1 40.35 23.9 A 138.004 138.004 0 0 0 40.993 23.16 Q 41.316 22.785 41.6 22.45 A 55.527 55.527 0 0 1 41.861 22.144 Q 42.231 21.713 42.475 21.45 A 10.402 10.402 0 0 0 42.541 21.378 Q 42.757 21.142 42.757 21.106 A 0.006 0.006 0 0 0 42.75 21.1 Z M 55.6 20.75 L 55.75 20.5 Q 61.5 18.7 61.5 14.6 A 1.331 1.331 0 0 0 61.485 14.389 Q 61.425 14.018 61.129 14.001 A 0.505 0.505 0 0 0 61.1 14 A 1.048 1.048 0 0 0 60.756 14.07 Q 60.155 14.283 59.1 15.15 A 18.285 18.285 0 0 0 55.729 18.799 A 21.709 21.709 0 0 0 54.85 20.15 A 18.716 18.716 0 0 0 53.98 21.762 Q 53.05 23.727 53.05 25.2 Q 53.05 27.25 54.6 27.25 Q 56.282 27.25 58.381 25.54 A 14.224 14.224 0 0 0 58.55 25.4 A 48.544 48.544 0 0 0 59.667 24.327 Q 60.653 23.35 61.825 22.1 A 340.02 340.02 0 0 1 62.265 21.631 Q 63.545 20.271 63.723 20.119 A 0.085 0.085 0 0 1 63.75 20.1 Q 64.036 20.1 64.049 20.305 A 0.316 0.316 0 0 1 64.05 20.325 Q 64.05 20.55 63.95 20.75 Q 59.263 27.58 56.011 28.312 A 3.458 3.458 0 0 1 55.25 28.4 Q 51.639 28.4 51.096 25.549 A 5.879 5.879 0 0 1 51 24.45 A 7.918 7.918 0 0 1 51.357 22.2 Q 51.948 20.214 53.514 17.809 A 30.048 30.048 0 0 1 54.025 17.05 A 18.685 18.685 0 0 1 55.433 15.25 Q 57.07 13.423 58.655 12.905 A 3.989 3.989 0 0 1 59.9 12.7 Q 61.1 12.7 62.025 13.475 A 2.785 2.785 0 0 1 62.607 14.13 A 2.256 2.256 0 0 1 62.95 15.35 A 3.439 3.439 0 0 1 62.467 17.062 Q 61.885 18.088 60.6 19.1 Q 58.832 20.492 57.148 20.837 A 5.466 5.466 0 0 1 56.05 20.95 A 1.528 1.528 0 0 1 55.903 20.944 Q 55.759 20.93 55.684 20.885 A 0.151 0.151 0 0 1 55.6 20.75 Z M 67 27.5 L 67.8 27.25 A 0.36 0.36 0 0 1 67.899 27.262 Q 68.01 27.294 68.039 27.407 A 0.368 0.368 0 0 1 68.05 27.5 A 0.615 0.615 0 0 1 67.691 28.061 Q 67.385 28.229 66.819 28.279 A 5.956 5.956 0 0 1 66.3 28.3 Q 64.018 28.3 63.906 24.683 A 12.378 12.378 0 0 1 63.9 24.3 Q 63.9 22.289 64.822 18.477 A 81.798 81.798 0 0 1 65.5 15.875 A 64.49 64.49 0 0 1 68.951 6.324 A 58.842 58.842 0 0 1 69.55 5.05 A 28.009 28.009 0 0 1 70.451 3.334 Q 72.366 0 73.95 0 A 3.598 3.598 0 0 1 75.359 0.298 A 4.911 4.911 0 0 1 76.15 0.725 A 3.802 3.802 0 0 1 76.644 1.107 Q 77.25 1.669 77.25 2.3 Q 77.25 5.9 66.65 18.3 A 39.532 39.532 0 0 0 66.132 20.941 Q 65.925 22.248 65.847 23.409 A 20.078 20.078 0 0 0 65.8 24.75 A 9.513 9.513 0 0 0 65.839 25.649 Q 66.016 27.5 67 27.5 Z M 33.15 8.9 A 2.711 2.711 0 0 0 31.679 6.566 Q 29.352 5.103 23.347 4.852 A 63.528 63.528 0 0 0 20.7 4.8 Q 21.962 5.577 21.999 5.694 A 0.022 0.022 0 0 1 22 5.7 Q 14.35 16.45 14.35 17.3 Q 15.109 17.528 16.66 17.583 A 30.243 30.243 0 0 0 17.725 17.6 A 11.774 11.774 0 0 0 19.434 17.463 Q 21.212 17.2 23.541 16.436 A 40.58 40.58 0 0 0 23.875 16.325 A 25.332 25.332 0 0 0 27.773 14.651 A 20.361 20.361 0 0 0 30.4 12.975 Q 32.778 11.18 33.1 9.442 A 2.975 2.975 0 0 0 33.15 8.9 Z M 38.3 13.8 Q 36.75 16.45 35.35 20.525 A 58.822 58.822 0 0 0 34.804 22.187 Q 33.95 24.939 33.95 26.15 A 5.578 5.578 0 0 0 33.971 26.657 Q 34.046 27.476 34.391 27.652 A 0.453 0.453 0 0 0 34.6 27.7 A 0.993 0.993 0 0 0 34.906 27.646 Q 35.187 27.555 35.54 27.306 A 4.946 4.946 0 0 0 35.75 27.15 A 50.107 50.107 0 0 0 35.993 26.958 Q 36.478 26.572 36.6 26.45 A 2.929 2.929 0 0 1 36.785 26.281 A 3.748 3.748 0 0 1 36.95 26.15 Q 37.15 26.15 37.15 26.35 A 0.699 0.699 0 0 1 37.031 26.716 Q 36.738 27.188 35.725 27.775 A 13.078 13.078 0 0 1 35.1 28.116 Q 34.18 28.583 33.685 28.599 A 1.074 1.074 0 0 1 33.65 28.6 A 1.821 1.821 0 0 1 32.71 28.37 Q 31.973 27.936 31.802 26.684 A 6.177 6.177 0 0 1 31.75 25.85 Q 31.75 22.162 34.178 16.248 A 63.032 63.032 0 0 1 34.75 14.9 Q 34.75 14.7 35.025 14.15 A 8.951 8.951 0 0 1 35.139 13.929 Q 35.333 13.567 35.45 13.45 A 1.164 1.164 0 0 1 36.049 13.134 A 1.708 1.708 0 0 1 36.4 13.1 A 6.693 6.693 0 0 1 37 13.125 Q 38.004 13.216 38.241 13.642 A 0.569 0.569 0 0 1 38.3 13.8 Z M 76.05 2.15 A 1.537 1.537 0 0 0 76.038 1.946 Q 76.008 1.724 75.905 1.626 A 0.286 0.286 0 0 0 75.7 1.55 Q 74.474 1.55 72.346 5.108 A 42.827 42.827 0 0 0 71.35 6.875 Q 68.5 12.2 67 17 A 190.63 190.63 0 0 0 70.076 12.867 Q 76.05 4.588 76.05 2.15 Z M 76.4 26.45 L 76.8 26.25 L 77.05 26.3 A 0.895 0.895 0 0 0 77.209 26.281 Q 77.499 26.227 78.114 26.009 A 24.517 24.517 0 0 0 78.55 25.85 A 28.663 28.663 0 0 0 80.419 25.066 Q 84.05 23.375 84.05 21.75 A 0.587 0.587 0 0 0 83.995 21.532 Q 83.798 21.066 82.9 20.05 A 11.373 11.373 0 0 0 82.458 19.576 Q 81.808 18.921 81.398 18.786 A 0.635 0.635 0 0 0 81.2 18.75 A 1.38 1.38 0 0 0 80.928 18.87 Q 80.195 19.266 78.225 20.85 A 47.833 47.833 0 0 0 77.111 21.772 Q 76.056 22.674 75.426 23.347 A 7.801 7.801 0 0 0 74.95 23.9 A 4.216 4.216 0 0 0 74.326 25.001 A 3.54 3.54 0 0 0 74.1 26.25 L 74.8 26.6 A 6.543 6.543 0 0 0 75.32 26.581 Q 75.828 26.54 76.165 26.414 A 1.786 1.786 0 0 0 76.2 26.4 L 76.4 26.45 Z M 41 5.85 L 40.75 7.3 Q 40.263 9.312 39.44 10.018 A 1.484 1.484 0 0 1 38.45 10.4 Q 37.524 10.4 36.923 10.011 A 2.006 2.006 0 0 1 36.65 9.8 A 13.148 13.148 0 0 0 38.009 8.717 Q 39.358 7.503 40.9 5.6 A 0.072 0.072 0 0 1 40.964 5.64 Q 41 5.7 41 5.85 Z" /></svg>
        );
    }

    render(){

        return(
            <div>
                <div className="hero">
                    <div className="hero-overlay"></div>
                    <div className="hero-description">
                        <div className="description-top">Get inspired and share your best photos</div>
                        <div className="description-bottom">Find your home among the world's best photographers.</div>
                        {/* <a href="/signup"> */}
                            {/* <div className="description-btn">Join Pixel800</div> */}
                            <div className="description-btn"><Link to="/signup">Join Pixel800</Link></div>
                        {/* </a> */}
                    </div>

                    <nav className="splash-nav-bar">
                        <div className="login-nav-bar-left">
                            <div className="nav-logo">
                                <a href="/">{ this.getLogo() }</a>
                                {/* <Link to="/login" className="fp-logo-link"><img className="fp-logo" src={window.logo} alt="pixel800 image"/></Link> */}
                            </div>
                            <div>
                                Discover
                            </div>
                            <div>
                                About
                            </div>
                            <div>
                                Studio
                            </div>
                        </div>

                        <div className="login-nav-bar-right">
                            <div className="splash-login"><Link to="/login">Log in</Link></div>
                            <div className="splash-signup"><Link to="/signup">Sign up</Link></div>
                        </div>
                    </nav>
                </div>
                
                <div className="middle-empty-space"></div>

                <div className="hero-bottom-half">
                    <div className="mid-splash-description-top">The top photos, chosen by you</div>
                    <div className="mid-splash-description-bottom">Discover what's trending according to photographers around the world.</div>

                    <div className="gallery">
                        {/* images */}
                        <div className="user-body">

                            <div className="randombox">

                            </div>

                            <div className="user-body-left">
                                <div className="girl2">
                                    <img alt="peace" className="girlpeace" src="https://drscdn.500px.org/photo/297055921/q%3D80_h%3D450/v2?user_id=71974091&amp;webp=true&amp;sig=758803e4ef4d7f2cf8b7fa500b5f4df836a8d2829f0c0cfbee4a090a4d528d7c"></img>
                                </div>

                                <div className="girl2-1">
                                    <img alt="walk-away" className="girlpeace-walk-away" src="https://drscdn.500px.org/photo/297038873/q%3D80_h%3D450/v2?user_id=71974091&amp;webp=true&amp;sig=2fe38abc17cdd60b48cb848836d2f657dfa502952863ba0f0dfb2971cef9ca03"></img>
                                </div>

                                <div className="butterflies">
                                    <img srcSet="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" className="photo-item__img" alt="Close Up of Leaf" data-image-width="3840" data-image-height="2160" data-big-src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" data-large-src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" data-tiny-src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" data-tiny-srcset="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" data-pin-media="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800" src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"></img>
                                </div>

                                <div className="baby-picking-leaves">
                                    <img srcSet="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" className="photo-item__img" alt="Boy in Gray Knit Hat" data-image-width="2048" data-image-height="2476" data-big-src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" data-large-src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" data-tiny-src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" data-tiny-srcset="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" data-pin-media="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800" src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"></img>
                                </div>
                            </div>

                            <div className="user-body-right">
                                <div className="girl1">
                                    <img alt="Lisa" className="Elements__HomefeedPhotoImage-eNfnom-dBEpbj" src="https://drscdn.500px.org/photo/298865833/q%3D80_m%3D1000/v2?user_id=71974091&amp;webp=true&amp;sig=0f710268e7083bb67fa94fbc42a69b52ff4ba1b2f7c23264907931750727fb6d"></img>
                                </div>
                                

                                <div className="korea-hill">
                                    <img srcSet="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" className="photo-item__img" alt="Cherry Blossoms Tree Near Body of Water" data-image-width="4368" data-image-height="2912" data-big-src="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" data-large-src="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" data-tiny-src="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" data-tiny-srcset="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" data-pin-media="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800" src="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"></img>
                                </div>

                                <div className="japan-cherry-blosson">
                                    <img srcSet="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" className="photo-item__img" alt="Close Up Photography of Cherry Blossom Tree" data-image-width="6000" data-image-height="4000" data-big-src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" data-large-src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" data-tiny-src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" data-tiny-srcset="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" data-pin-media="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800" src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"></img>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;
