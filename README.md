# best-practice-git

Who really needs a git history. It just causes slower initial downloads of repos right?

Just use this technique to commit your changes.

## Usage

```
npm run commit "who cares anyways"
```

## Concept

### shell

```shell
git add -A && git commit --amend -m "<MESSAGE>" && git push --force origin master
```

### js

```js
import child_process from 'child_process'
const [message = 'initial commit'] = process.argv.slice(2)
child_process.exec(
  `git add -A && git commit --amend -m "${message}" && git push --force origin master`,
  err => {
    if (err) {
      throw err;
    }
  }
)
```
