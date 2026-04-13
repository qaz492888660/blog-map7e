import type { APIRoute } from "astro";

const callbackHtml = String.raw`<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1, viewport-fit=cover"
		/>
		<meta name="robots" content="noindex,nofollow,noarchive" />
		<title>GitHub OAuth Callback</title>
		<style>
			:root {
				color-scheme: light;
				font-family:
					"SF Pro Display",
					"PingFang SC",
					"Hiragino Sans GB",
					"Microsoft YaHei",
					sans-serif;
			}

			body {
				margin: 0;
				min-height: 100vh;
				display: grid;
				place-items: center;
				background:
					radial-gradient(circle at top, #eef6ff 0, transparent 45%),
					linear-gradient(180deg, #f7fafc 0%, #eef2f7 100%);
				color: #0f172a;
			}

			main {
				width: min(32rem, calc(100vw - 2rem));
				padding: 2rem;
				border: 1px solid rgba(148, 163, 184, 0.22);
				border-radius: 1.25rem;
				background: rgba(255, 255, 255, 0.92);
				box-shadow: 0 20px 60px rgba(15, 23, 42, 0.12);
			}

			h1 {
				margin: 0 0 0.75rem;
				font-size: 1.25rem;
				line-height: 1.4;
			}

			p {
				margin: 0;
				color: #475569;
				line-height: 1.7;
			}
		</style>
	</head>
	<body>
		<main>
			<h1 id="title">Completing GitHub sign-in</h1>
			<p id="message">
				Returning the GitHub authorization result to the admin panel.
			</p>
		</main>
		<script>
			(() => {
				const params = new URLSearchParams(window.location.search);
				const payload = {
					type: "sveltia:github-oauth:callback",
					source: "blog-map7e",
					provider: "github",
					code: params.get("code"),
					state: params.get("state"),
					error: params.get("error"),
					errorDescription:
						params.get("error_description") ||
						params.get("errorDescription"),
					callbackUrl: window.location.href,
					timestamp: new Date().toISOString(),
				};

				const title = document.getElementById("title");
				const message = document.getElementById("message");
				const serialized = JSON.stringify(payload);
				const adminUrl = new URL("/admin/", window.location.origin);

				if (payload.code) {
					adminUrl.searchParams.set("github_oauth", "1");
					adminUrl.searchParams.set("code", payload.code);
				}

				if (payload.state) {
					adminUrl.searchParams.set("state", payload.state);
				}

				if (payload.error) {
					adminUrl.searchParams.set("error", payload.error);
				}

				if (payload.errorDescription) {
					adminUrl.searchParams.set(
						"error_description",
						payload.errorDescription,
					);
				}

				try {
					sessionStorage.setItem(
						"sveltia-cms.github-oauth.callback",
						serialized,
					);
				} catch {}

				try {
					localStorage.setItem(
						"sveltia-cms.github-oauth.callback",
						serialized,
					);
				} catch {}

				try {
					const channel = new BroadcastChannel(
						"sveltia-cms.github-oauth",
					);
					channel.postMessage(payload);
					channel.close();
				} catch {}

				if (window.opener && !window.opener.closed) {
					try {
						window.opener.postMessage(payload, window.location.origin);
					} catch {}

					try {
						window.opener.postMessage(
							{
								source: "sveltia-cms",
								event: "github-oauth-callback",
								payload,
							},
							window.location.origin,
						);
					} catch {}

					title.textContent = payload.error
						? "GitHub sign-in failed"
						: "GitHub sign-in succeeded";
					message.textContent = payload.error
						? "Authorization failed: " +
							(payload.errorDescription || payload.error)
						: "The authorization code was sent back to the admin window. This page will close automatically.";

					window.setTimeout(() => {
						window.close();
					}, 900);

					return;
				}

				title.textContent = payload.error
					? "GitHub sign-in failed"
					: "Authorization result received";
				message.textContent = payload.error
					? "Authorization failed: " +
						(payload.errorDescription || payload.error)
					: "No admin popup was detected. Redirecting back to /admin/ to continue.";

				window.setTimeout(() => {
					window.location.replace(adminUrl.toString());
				}, 900);
			})();
		</script>
	</body>
</html>
`;

export const GET: APIRoute = () => {
	return new Response(callbackHtml, {
		headers: {
			"Content-Type": "text/html; charset=utf-8",
			"Cache-Control": "no-store, max-age=0",
		},
	});
};
