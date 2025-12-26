import { cn } from "@/lib/utils";
import {
	FaGithub,
	FaGlobe,
	FaChevronLeft,
	FaChevronRight,
	FaReact,
	FaNodeJs,
	FaDocker,
	FaFire, FaDiscord, FaAngular
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiPostgresql, SiRust } from "react-icons/si";

type IconProps = {
	size: number;
	className?: string;
};

export function GitHub({ size, className }: IconProps) {
	return FaGithub({ size, className: cn("transition-colors duration-100", className) });
}

export function Globe({ size, className }: IconProps) {
  return FaGlobe({ size, className: cn("transition-colors duration-100", className) });
}

export function ChevronLeft({ size, className }: IconProps) {
  return FaChevronLeft({ size, className: cn("transition-colors duration-100", className) });
}

export function ChevronRight({ size, className }: IconProps) {
  return FaChevronRight({ size, className: cn("transition-colors duration-100", className) });
}

export function NextJS({ size, className }: IconProps) {
  return SiNextdotjs({ size, className: cn("transition-colors duration-100", className) });
}

export function React({ size, className }: IconProps) {
  return FaReact({ size, className: cn("transition-colors duration-100", className) });
}

export function TailwindCSS({ size, className }: IconProps) {
  return SiTailwindcss({ size, className: cn("transition-colors duration-100", className) });
}

export function TypeScript({ size, className }: IconProps) {
  return SiTypescript({ size, className: cn("transition-colors duration-100", className) });
}

export function JavaScript({ size, className }: IconProps) {
	return (
		<svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630" className={cn("transition-colors duration-100", className)}>
			<rect width="630" height="630" fill="currentColor" rx="62" />
			<path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
		</svg>
	);
}

export function NodeJS({ size, className }: IconProps) {
  return FaNodeJs({ size, className: cn("transition-colors duration-100", className) });
}

export function Firebase({ size, className }: IconProps) {
  return FaFire({ size, className: cn("transition-colors duration-100", className) });
}

export function PostgreSQL({ size, className }: IconProps) {
  return SiPostgresql({ size, className: cn("transition-colors duration-100", className) });
}

export function Rust({ size, className }: IconProps) {
  return SiRust({ size, className: cn("transition-colors duration-100", className) });
}

export function Docker({ size, className }: IconProps) {
  return FaDocker({ size, className: cn("transition-colors duration-100", className) });
}

export function ShadCN({ size, className }: IconProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={size} height={size} className={cn("transition-colors duration-100", className)}>
			<rect width="256" height="256" fill="none" />
			<line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
			<line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
		</svg>
	);
}

export function AuthJS({ size, className }: IconProps) {
	return (
		<svg width={size} height={size} viewBox="0 0 210 232" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("transition-colors duration-100", className)}>
			<path fillRule="evenodd" clipRule="evenodd" d="M208.687 31.859L30.0947 167.73C8.16388 127.966 0.567559 79.9975 0 51.2275V33.6181C0 31.0567 2.7788 29.5628 4.16851 29.1356C33.5617 20.2778 93.2465 2.30524 96.8378 1.28069C100.429 0.256138 103.464 0 104.534 0H104.631C105.7 0 108.735 0.256138 112.327 1.28069C115.918 2.30524 175.603 20.2778 204.996 29.1356C206.03 29.4533 207.832 30.3613 208.687 31.859Z" fill="currentColor" />
			<path fillRule="evenodd" clipRule="evenodd" d="M30.0938 167.952L208.686 32.0815C208.981 32.5983 209.164 33.1842 209.164 33.8406V51.45C208.202 100.223 187.038 204.172 110.081 229.786C109.013 230.213 106.49 231.067 104.951 231.067H104.212C102.673 231.067 100.15 230.213 99.0814 229.786C67.5193 219.281 45.3415 195.6 30.0938 167.952Z" fill="currentColor" />
			<path d="M111.74 1.28325C108.147 0.25665 105.11 0 104.04 0L103.719 231.305H104.361C105.901 231.305 108.425 230.45 109.494 230.022C186.489 204.357 207.663 100.2 208.625 51.3299V33.6853C208.625 31.1188 205.845 29.6216 204.454 29.1939C175.047 20.3181 115.333 2.30985 111.74 1.28325Z" fill="currentColor" fillOpacity="0.21" />
			<ellipse cx="104.905" cy="114.209" rx="47.801" ry="47.4802" className="fill-background" />
			<path fillRule="evenodd" clipRule="evenodd" d="M96.2435 124.475C92.6077 124.796 83.4111 123.192 78.9197 119.342C74.0971 115.208 71.541 109.718 71.541 101.697C71.541 91.7469 80.5239 81.1654 93.0355 81.4861C104.919 81.7907 112.934 88.4894 114.53 99.1307C115.363 104.684 114.514 107.353 113.854 109.426C113.752 109.749 113.654 110.057 113.568 110.359C113.247 111.429 112.798 113.76 113.568 114.53C114.337 115.3 126.079 126.614 131.854 132.174C132.388 132.816 133.458 134.42 133.458 135.703V141.799C133.458 142.761 133.201 143.082 132.175 143.082H119.342C118.594 142.975 117.096 142.248 117.096 140.195C117.096 138.006 116.863 137.684 116.396 137.039C116.316 136.928 116.228 136.807 116.134 136.666C115.492 135.703 114.209 135.703 112.926 135.703C111.643 135.703 110.68 135.382 110.039 134.741C109.397 134.099 109.397 133.137 109.718 131.854C110.039 130.57 109.718 129.287 109.076 128.966C108.974 128.915 108.856 128.848 108.723 128.772C108.019 128.372 106.896 127.734 105.547 128.004C103.943 128.325 101.697 128.004 100.414 126.721C99.131 125.437 97.5267 124.401 96.2435 124.475ZM87.5814 100.094C90.2391 100.094 92.3936 97.9393 92.3936 95.2816C92.3936 92.6239 90.2391 90.4694 87.5814 90.4694C84.9237 90.4694 82.7692 92.6239 82.7692 95.2816C82.7692 97.9393 84.9237 100.094 87.5814 100.094Z" fill="currentColor" />
		</svg>
	);
}

export function Email({ size, className }: IconProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("transition-colors duration-100", className)}>
			<rect width="20" height="16" x="2" y="4" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</svg>
	);
}

export function Discord({ size, className }: IconProps) {
	return FaDiscord({ size, className: cn("transition-colors duration-100", className) });
}

export function Assembly({ size, className }: IconProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("transition-colors duration-100", className)}>
			<rect x="14" y="14" width="4" height="6" rx="2" />
			<rect x="6" y="4" width="4" height="6" rx="2" />
			<path d="M6 20h4" />
			<path d="M14 10h4" />
			<path d="M6 14h2v6" />
			<path d="M14 4h2v6" />
		</svg>
	);
}

export function CPP({ size, className }: IconProps) {
	return (
		<svg version="1.1" x="0px" y="0px" width={size} height={size} viewBox="0 0 306 344.35" enable-background="new 0 0 306 344.35" xmlns="http://www.w3.org/2000/svg" className={cn("transition-colors duration-100", className)}>
			<path fill="currentColor" d="M 166.25 341.193 L 292.75 268.159 C 296.394 266.055 299.706 262.422 302.107 258.262 L 153 172.175 L 3.893 258.263 C 6.2940000000000005 262.422 9.607 266.056 13.25 268.159 L 139.75 341.193 C 147.037 345.401 158.963 345.401 166.25 341.193 Z M 302.107 258.262 C 304.508 254.103 306 249.417 306 245.209 L 306 99.14 C 306 94.932 304.51 90.247 302.108 86.088 L 153 172.175 L 302.107 258.262 Z M 302.108 86.087 C 299.706 81.927 296.393 78.294 292.75 76.19 L 166.25 3.156 C 158.963 -1.052 147.037 -1.052 139.75 3.156 L 13.25 76.19 C 5.962 80.397 0 90.725 0 99.14 L 0 245.209 C 0 249.417 1.491 254.103 3.893 258.262 L 153 172.175 L 302.108 86.087 Z" />
			<path className="fill-background" d="M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968&#10;&#9;&#9;l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51&#10;&#9;&#9;c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z" />
			<polygon className="fill-background" points="255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508 &#10;&#9;&#9;221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 &#9;" />
			<polygon className="fill-baclground" points="297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508 &#10;&#9;&#9;263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 &#9;" />
		</svg>
	);
}

export function Arduino({ size, className }: IconProps) {
	return (
		<svg viewBox="0 0 342 188" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" width={size} height={size} className={cn("transition-colors duration-100", className)}>
			<path d="M314.2 96.2c0-37.8-31.9-68.5-71-68.5-3.6 0-7.3.2-10.9.8-30.4 4.3-50.8 26.2-62.2 43-11.4-16.8-31.8-38.7-62.2-43-3.6-.5-7.3-.8-10.9-.8-39.2 0-71 30.7-71 68.5s31.9 68.5 71 68.5c3.6 0 7.3-.2 11-.8 30.4-4.4 50.8-26.3 62.2-43.1 11.4 16.8 31.8 38.7 62.2 43.1 3.6.5 7.3.8 11 .8 38.9 0 70.8-30.7 70.8-68.5m-209.8 43.7c-2.5.4-5 .5-7.5.5-25.8 0-46.7-19.9-46.7-44.2C50.2 71.8 71.2 52 97 52c2.5 0 5 .2 7.5.5 28.7 4.1 46.2 32.4 52.2 43.7-6.1 11.4-23.7 39.6-52.3 43.7m79.1-43.7c5.9-11.3 23.5-39.6 52.2-43.7 2.5-.3 5-.5 7.5-.5 25.8 0 46.7 19.9 46.7 44.2 0 24.4-21 44.2-46.7 44.2-2.5 0-5-.2-7.5-.5-28.7-4.1-46.3-32.4-52.2-43.7" fill="currentColor" fillRule="nonzero" />
			<path d="M77.3 89.5H120v13.7H77.3V89.5zm170.6 13.8h14.4V89.5h-14.4V75.1h-13.8v14.4h-14.4v13.8h14.4v14.4h13.8v-14.4zm52.8-63.9c0-3.5 2.8-6.4 6.2-6.4 3.5 0 6.3 2.9 6.3 6.4 0 3.7-2.8 6.4-6.3 6.4-3.4 0-6.2-2.9-6.2-6.4zm11.4 0c0-2.9-2.2-5.4-5.2-5.4s-5.1 2.2-5.1 5.4c0 3.3 2.4 5.4 5.1 5.4 3 0 5.2-2.1 5.2-5.4zm-8.2-4h3.1c2.4 0 3.3 1 3.3 2.7 0 1.1-.5 1.9-1.5 2.3l1.5 3h-2.2l-1.1-2.7h-1.1v2.7h-2v-8zm2.9 3.9c.9 0 1.4-.3 1.4-1.3 0-.9-.3-1.2-1.4-1.2h-1v2.6l1-.1z" fill="currentColor" fillRule="nonzero" />
		</svg>
	);
}

export function Swift({ size, className }: IconProps) {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			width={size} height={size} viewBox="0 0 106.063 106.063" enableBackground="new 0 0 106.063 106.063"
			xmlSpace="preserve" className={cn("transition-colors duration-100", className)}>
			<path fill="currentColor" d="M106.059,29.378c-0.006-1.067-0.018-2.133-0.047-3.201c-0.062-2.323-0.199-4.667-0.612-6.966
		c-0.419-2.334-1.104-4.504-2.183-6.625c-1.06-2.082-2.445-3.988-4.097-5.64c-1.652-1.652-3.557-3.037-5.64-4.097
		c-2.118-1.078-4.289-1.763-6.621-2.182c-2.3-0.414-4.644-0.551-6.969-0.613c-1.067-0.029-2.134-0.041-3.201-0.048
		C75.421,0,74.154,0,72.887,0H44.81H33.179c-1.267,0-2.534,0-3.8,0.007c-1.067,0.007-2.135,0.019-3.201,0.048
		c-0.581,0.016-1.163,0.036-1.746,0.064c-1.748,0.084-3.499,0.239-5.222,0.549c-1.749,0.314-3.407,0.778-5.021,1.445
		c-0.538,0.222-1.071,0.467-1.6,0.737c-1.562,0.795-3.025,1.773-4.355,2.909C7.789,6.138,7.361,6.534,6.948,6.947
		C5.295,8.6,3.91,10.505,2.85,12.587c-1.079,2.12-1.763,4.291-2.183,6.625c-0.413,2.298-0.55,4.643-0.612,6.966
		c-0.029,1.068-0.042,2.134-0.049,3.201C-0.001,30.645,0,31.912,0,33.179V50.47v22.418c0,1.268-0.001,2.534,0.007,3.802
		c0.007,1.067,0.019,2.133,0.049,3.199c0.062,2.324,0.2,4.669,0.612,6.966c0.419,2.333,1.103,4.505,2.183,6.625
		c1.06,2.083,2.445,3.988,4.097,5.639c1.651,1.653,3.557,3.038,5.641,4.099c2.119,1.078,4.289,1.762,6.621,2.181
		c2.298,0.414,4.644,0.551,6.968,0.613c1.066,0.028,2.134,0.041,3.201,0.047c1.266,0.009,2.532,0.008,3.8,0.008h39.709
		c1.266,0,2.534,0.001,3.8-0.008c1.067-0.006,2.133-0.019,3.201-0.047c2.325-0.062,4.669-0.2,6.969-0.613
		c2.332-0.419,4.502-1.103,6.621-2.181c2.083-1.061,3.988-2.446,5.64-4.099c1.652-1.652,3.038-3.556,4.097-5.639
		c1.079-2.12,1.764-4.292,2.183-6.625c0.413-2.297,0.55-4.642,0.612-6.966c0.029-1.066,0.041-2.132,0.047-3.199
		c0.008-1.268,0.008-2.534,0.008-3.802V33.179C106.066,31.912,106.067,30.645,106.059,29.378z"/>
			<path className="fill-background" d="M84.038,65.464c0.117-0.399,0.238-0.796,0.341-1.205c4.402-17.539-6.342-38.275-24.523-49.193
		c7.968,10.801,11.49,23.883,8.36,35.324c-0.279,1.02-0.615,2-0.986,2.952c-0.403-0.264-0.91-0.565-1.591-0.94
		c0,0-18.086-11.167-37.688-30.918c-0.514-0.519,10.453,15.675,22.899,28.824C44.987,47.016,28.646,35.126,18.3,25.658
		c1.271,2.12,2.783,4.161,4.444,6.126c8.64,10.956,19.906,24.475,33.404,34.855c-9.484,5.804-22.885,6.255-36.227,0.006
		c-3.3-1.547-6.403-3.413-9.274-5.533c5.648,9.034,14.347,16.828,24.934,21.379c12.625,5.426,25.18,5.058,34.531,0.089l-0.007,0.011
		c0.032-0.02,0.067-0.041,0.1-0.061c0.42-0.225,0.836-0.457,1.242-0.7c4.517-2.319,13.331-4.607,18.067,4.609
		c1.166,2.268,3.645-9.752-5.468-20.965C84.043,65.469,84.041,65.467,84.038,65.464z"/>
		</svg>
	);
}

export function Angular({ size, className }: IconProps) {
	return FaAngular({ size, className: cn("transition-colors duration-100", className) });
}

export function CSharp({ size, className }: IconProps) {
	return (
		<svg width={size} height={size} viewBox="0 0 256 288" version="1.1" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg" className={cn("transition-colors duration-100", className)}>
			<path d="M 255.569 84.452376 C 255.567 79.622376 254.534 75.354376 252.445 71.691376 L 128.182 143.241376 L 252.595 215.315376 C 254.589 211.707376 255.58 207.522376 255.582 202.79737599999999 C 255.582 202.79737599999999 255.582 123.908376 255.569 84.452376 M 128.182 143.241376 L 2.988 215.325376 C 5.041 219.036376 8.157 222.138376 12.374 224.579376 C 32.58 236.282376 100.394 275.126376 113.934 283.115376 C 123.04 288.488376 131.931 288.680376 141.104 283.384376 C 175.119 263.744376 209.179 244.186376 243.209 224.567376 C 247.426 222.127376 250.542 219.023376 252.595 215.315376 L 128.182 143.241376 M 255.569 84.452376 C 255.567 79.622376 254.534 75.354376 252.445 71.691376 C 250.393 68.089376 247.32 65.070376 243.198 62.683376 C 209.173 43.064376 175.115 23.505376 141.101 3.86637605 C 131.931 -1.42762395 123.04 -1.23462395 113.938 4.13537605 C 100.395 12.122376 32.59 50.969376 12.385 62.672376 C 4.064 67.48937600000001 0.015 74.861376 0.013000000000000003 84.443376 C 0 123.898376 0.013000000000000003 163.352376 0 202.808376 C 0 207.532376 0.991 211.717376 2.988 215.325376 C 5.041 219.036376 8.157 222.138376 12.374 224.579376 C 32.58 236.282376 100.394 275.126376 113.934 283.115376 C 123.04 288.488376 131.931 288.680376 141.104 283.384376 C 175.119 263.744376 209.179 244.186376 243.209 224.567376 C 247.426 222.127376 250.542 219.023376 252.595 215.315376 C 254.589 211.707376 255.582 207.522376 255.582 202.79737599999999 C 255.582 202.79737599999999 255.582 123.908376 255.569 84.452376" fill="currentColor" fillRule="nonzero" />
			<path d="M201.892326,116.294008 L201.892326,129.767692 L215.36601,129.767692 L215.36601,116.294008 L222.102852,116.294008 L222.102852,129.767692 L235.576537,129.767692 L235.576537,136.504534 L222.102852,136.504534 L222.102852,149.978218 L235.576537,149.978218 L235.576537,156.71506 L222.102852,156.71506 L222.102852,170.188744 L215.36601,170.188744 L215.36601,156.71506 L201.892326,156.71506 L201.892326,170.188744 L195.155484,170.188744 L195.155484,156.71506 L181.6818,156.71506 L181.6818,149.978218 L195.155484,149.978218 L195.155484,136.504534 L181.6818,136.504534 L181.6818,129.767692 L195.155484,129.767692 L195.155484,116.294008 L201.892326,116.294008 Z M215.36601,136.504534 L201.892326,136.504534 L201.892326,149.978218 L215.36601,149.978218 L215.36601,136.504534 Z" className="fill-background" />
			<path d="M128.456752,48.625876 C163.600523,48.625876 194.283885,67.7121741 210.718562,96.0819435 L210.558192,95.808876 L169.209615,119.617159 C161.062959,105.823554 146.128136,96.5150717 128.996383,96.3233722 L128.456752,96.3203544 C102.331178,96.3203544 81.1506705,117.499743 81.1506705,143.625316 C81.1506705,152.168931 83.4284453,160.17752 87.3896469,167.094792 C95.543745,181.330045 110.872554,190.931398 128.456752,190.931398 C146.149522,190.931398 161.565636,181.208041 169.67832,166.820563 L169.481192,167.165876 L210.767678,191.083913 C194.51328,219.21347 164.25027,238.240861 129.514977,238.620102 L128.456752,238.625876 C93.2021701,238.625876 62.4315028,219.422052 46.0382398,190.902296 C38.0352471,176.979327 33.4561922,160.837907 33.4561922,143.625316 C33.4561922,91.1592636 75.9884604,48.625876 128.456752,48.625876 Z" className="fill-background" fillRule="nonzero" />
		</svg>
	);
}
