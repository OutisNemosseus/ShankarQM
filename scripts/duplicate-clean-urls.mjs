import { readdirSync, statSync, copyFileSync, existsSync } from "node:fs"
import { join } from "node:path"

const publicDir = "public"

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) {
      walk(full)
    } else if (name.endsWith(".html") && name !== "index.html") {
      const bare = full.slice(0, -".html".length)
      if (!existsSync(bare)) {
        copyFileSync(full, bare)
      }
    }
  }
}

walk(publicDir)
