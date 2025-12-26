import { jetbrainsMono } from "@/lib/fonts";

export function Page({ children }: { children: React.ReactNode; }) {
	return (
		<main className="w-full h-full grid grid-rows-1 grid-cols-1 lg:grid-cols-[auto_1fr] overflow-x-hidden overflow-y-auto">
			{children}
		</main>
	);
}

export function Content({ children }: { children: React.ReactNode; }) {
	return (
		<div className="w-full h-full overflow-y-auto">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				{children}
			</div>
		</div>
	);
}

export function ContentTitle({ children }: { children: React.ReactNode; }) {
	return (
		<h1 className={`${jetbrainsMono.className} pl-4 sm:pl-8 md:pl-12 lg:pl-16 pt-8 sm:pt-12 lg:pt-20 text-2xl sm:text-3xl font-semibold text-slate-500`}>
			{children}
		</h1>
	);
}

export function Section({ id, children }: { id: string; children: React.ReactNode; }) {
	return (
		<div id={id} className="mb-12 sm:mb-16 lg:mb-20">
			{children}
		</div>
	);
}
