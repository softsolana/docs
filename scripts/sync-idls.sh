#!/usr/bin/env bash
# Regenerates contracts/*/idl.mdx from the IDL JSON and TypeScript type files.
# Run this whenever the IDL or types files are updated:
#
#   bash scripts/sync-idls.sh

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

generate() {
  local dir="$1"
  local json_file="$2"
  local ts_file="$3"
  local type_name="$4"
  local import_name="$5"
  local description="$6"

  local json_content ts_content
  json_content="$(cat "$ROOT/$dir/$json_file")"
  ts_content="$(cat "$ROOT/$dir/$ts_file")"

  cat > "$ROOT/$dir/idl.mdx" << MDXEOF
---
title: "IDL"
description: "${description}"
---

Use the JSON IDL with \`@coral-xyz/anchor\` to construct a typed program client, or copy the TypeScript type file directly into your project.

\`\`\`typescript
import { Program } from "@coral-xyz/anchor";
import type { ${type_name} } from "./types/${import_name}";
import idl from "./idl/${import_name}.json";

const program = new Program<${type_name}>(idl as ${type_name}, { connection });
\`\`\`

<CodeGroup>

\`\`\`json ${import_name}.json
${json_content}
\`\`\`

\`\`\`typescript ${import_name}.ts
${ts_content}
\`\`\`

</CodeGroup>
MDXEOF

  echo "✓ $dir/idl.mdx"
}

generate \
  "contracts/pam" \
  "idl/softsol_pam.json" \
  "types/softsol_pam.ts" \
  "SoftsolPam" \
  "softsol_pam" \
  "Anchor IDL and TypeScript types for the PAM program."

generate \
  "contracts/pricing" \
  "idl/softsol_pricing.json" \
  "types/softsol_pricing.ts" \
  "SoftsolPricing" \
  "softsol_pricing" \
  "Anchor IDL and TypeScript types for the Pricing program."
