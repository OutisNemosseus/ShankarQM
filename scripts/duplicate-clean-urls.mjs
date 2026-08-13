import { readdirSync, statSync, copyFileSync, existsSync, mkdirSync, rmSync } from "node:fs"
import { join } from "node:path"

const publicDir = "public"

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) {
      walk(full)
    } else if (name.endsWith(".html") && name !== "index.html") {
      const bare = full.slice(0, -".html".length)
      // Render clean URLs resolve directories, not extensionless files.
      // Emit /page/index.html so a request for /page is normalized to /page/.
      if (existsSync(bare) && !statSync(bare).isDirectory()) rmSync(bare)
      mkdirSync(bare, { recursive: true })
      copyFileSync(full, join(bare, "index.html"))
    }
  }
}

walk(publicDir)
