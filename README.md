This program sends one fortune cookie message for an AI agent, written to entry.txt as the whole entry and nothing else. It validates that single line, writes it as UTF-8, and reads it back byte for byte so the shipped message is exactly the intended one.

## How it runs

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

Requires Node 22.18 or newer; when `MAKEFUN_OUTPUT_DIR` is unset it writes to `/output`.

[![make.fun](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/0xcqing/fortune-strawberry-rs/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/leaderboard)
[![reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/0xcqing/fortune-strawberry-rs/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

Bounty: https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
