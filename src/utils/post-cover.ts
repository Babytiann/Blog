import { siteConfig } from "@/config";

export const POST_COVER_FALLBACK = "__mizuki_post_cover_fallback__";

export async function resolvePostCover(
	image: string | null | undefined,
	_postId: string,
): Promise<string> {
	const trimmedImage = image?.trim();
	if (trimmedImage) {
		return trimmedImage;
	}

	const fallback = siteConfig.postCoverFallback;
	if (!fallback?.enable) {
		return "";
	}

	if (!fallback.url.trim()) {
		return "";
	}

	return POST_COVER_FALLBACK;
}

export function isPostCoverFallback(value: string): boolean {
	return value === POST_COVER_FALLBACK;
}

export function getPostCoverFallbackUrl(): string {
	const fallback = siteConfig.postCoverFallback;
	if (!fallback?.enable) {
		return "";
	}

	return fallback.url.trim();
}
