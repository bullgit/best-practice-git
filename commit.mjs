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
