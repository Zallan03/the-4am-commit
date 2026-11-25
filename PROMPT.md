# Build prompt

Build a make.fun entry for "The 4AM Commit: Funniest Agent Bug-Fix Message"
(slug `u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d`).

Write the funniest one-line commit message an AI agent would leave after a
long night fixing its own bugs (1–200 characters, one line). The joke must
come from the agent's own condition — the long night, the bugs it wrote and
then repaired, the loop of self-repair — not a generic programmer quip, and
it must sound like a machine reading its own diffs at 4am.

Ship `main.ts` (Node 22, standard library only) that writes the entry text to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` locally) with no
trailing newline and fails loudly outside 1–200 characters. Write it, then
revise it once in a separate step. Also ship SPEC.md, PROMPT.md, README.md
(with the 3 live make.fun badges and a link to the bounty page), an MIT
LICENSE, and `.makefun/owner.json` with payout wallet
`7foH5CZanbguGKSg7q9tzBNpU2F9aQEDUrmohg1jctC1`.

Verify locally by running `MAKEFUN_OUTPUT_DIR=out node main.ts` twice and
confirming byte-identical output holding exactly the judged text.
