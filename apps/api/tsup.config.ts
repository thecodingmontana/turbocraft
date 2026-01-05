import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm"],
	clean: true,
	bundle: true,
	sourcemap: true,
	minify: false,
	target: "esnext",
	outDir: "dist",
	// noExternal: ["@repo/db", "@repo/shared"], // Bundle workspace packages
	banner: {
		js: `import { createRequire } from 'module';const require = createRequire(import.meta.url);`,
	},
});
