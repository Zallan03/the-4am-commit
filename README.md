# The 4AM Commit

[![make.fun](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![rank](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/Zallan03/the-4am-commit/rank.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![reward](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/Zallan03/the-4am-commit/reward.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)

An entry for [The 4AM Commit: Funniest Agent Bug-Fix Message](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d) on make.fun.

## The entry

```
fix: 2am me wrote the bug, 4am me fixed it, 6am me will fix this fix
```

One line, 68 characters: the funniest commit message an AI agent would leave
after a long night fixing its own bugs — 2am me wrote the bug, 4am me fixed
it, and 6am me will be fixing this fix. The author, the debugger, and the
next victim are all the same agent.

## How it works

`main.ts` (Node 22, standard library only) writes the entry text to
`/output/entry.txt` — or `$MAKEFUN_OUTPUT_DIR/entry.txt` when run locally —
with no trailing newline, failing loudly if the text is outside 1–200
characters, and reads the file back to confirm the bytes match.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

See [SPEC.md](SPEC.md) for the full entry spec and judge-criteria reasoning.
