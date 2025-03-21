# Get the current timestamp
$TIMESTAMP = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

# Stage all changes
git add .

# Get the list of changed files
$CHANGED_FILES = git status --porcelain | ForEach-Object { $_.Substring(3) }

# Create a commit message with the timestamp and changed files
$COMMIT_MSG = "Auto-commit at $TIMESTAMP`n`nChanged files:`n$CHANGED_FILES"

# Create the commit
git commit -m $COMMIT_MSG

# Push changes to remote repository
git push 