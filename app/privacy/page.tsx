import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description: "Read the privacy policy for this website.",
};

export default function PrivacyPage() {
	const lastUpdated = new Date().toISOString().slice(0, 10);

	return (
		<main className="mx-auto max-w-3xl px-4 py-12">
			<h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
			<p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>

			<section className="mt-8 space-y-4 leading-relaxed">
				<p>
					This page provides information about privacy practices for this
					website. The full policy will be published here.
				</p>
				<p>
					If you have questions about privacy, please contact the site owner.
				</p>
			</section>
		</main>
	);
}


