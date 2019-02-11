# Git-Notes

Set Global Configuration

```commandline
git config --global user.name "Fernando"
git config --global user.name "fer-oc@hotmail.es"
git config --global color.ui  true
git config --global --list
```
Add the following to enable support for using VS Code as editor and diff tool:

```commandline
git config --global core.editor "code --wait"

[diff]
    tool = default-difftool
[difftool "default-difftool"]
    cmd = code --wait --diff $LOCAL $REMOTE
```

# Basic Work Flow with GitHub

```commandline
git clone https://github.com/prezlincoln/github-demo.git
git status
```

## Commit

```commandline
git status
git add start.txt
git status
git commit -m "Adding start text file"
git status
```

## Publishing Changes to GitHub

```commandline
git push origin master
```

# Work Flow Locally

```commandline
git init
git status
git add filename.ext
git commit -m "Adding start text file"
git -am "to add and commit at the same time"
git status
git log --oneline
git log --graph --oneline --decorate --all
```

# Branches

* `git branch` List, create, or delete branches.
* `git checkout` Switch branches or restore working tree files.
* `git merge` Join two or more development histories together
* `git checkout -b new_branch_name` Create ans Switch to the new brach at the same time
* `git diff --color-words master..branch_name` Comparing branches
* `git brach -m | --move branch new_branch` Renaming branches
* `git brach -d branch_to_delete` Delete a branch, change to another brach before to delete

## Merging branches

* `(master) git merge branch_name` Run this command from master to merge chanches to master `(master) git branch --merged` to compare branches. 

