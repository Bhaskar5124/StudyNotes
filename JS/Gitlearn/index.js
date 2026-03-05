// Installation & Setup
// How to Install Git
// Windows: Download the installer from git-scm.com. During setup, just keep clicking "Next" (the defaults are best).


//git remote show origin
// Mac: Open Terminal and type git --version. If it’s not there, it will prompt you to install.

// Linux: Use sudo apt install git-all.


// Configure your Identity
// Open your terminal (or VS Code terminal) and run these once so Git knows who you are:

// Bash

// git config --global user.name "Your Name"
// git config --global user.email "your-email@example.com"

//Writing to github
//Whole pushing to git


// In Git, letters like U and A are status indicators used by your code editor (like VS Code) or the terminal to show the current state of your files in the version control lifecycle.

// 1. U (Untracked) — After git init
// When you run git init, Git starts watching the folder, but it doesn't "own" the files yet.

// Meaning: Untracked.

// State: The file exists in your directory, but it has not been added to Git's snapshot system. Git is aware the file is there but will ignore any changes to it until you tell it otherwise.

// Visual: In VS Code, this usually appears as a small green or gray U next to the filename.

// 2. A (Added/Staged) — After git add .
// When you run git add ., you are moving files into the "Staging Area."

// Meaning: Added.

// State: The file is now "Staged." This is Git's way of saying, "I am prepared to include this file in the next permanent snapshot (commit)." You have officially introduced the file to Git's tracking system.

// Visual: In VS Code, the U will change to a solid green A.

// git branch : tells which branch are you on
// git branch dev: new branch created named "dev"
// git switch dev: switches from by default "master" to "dev"






// Remove from Git AND your Computer
// If you want to delete a file completely (from your local folder and from GitHub), use:

// Bash

// git rm filename.txt
// What happens: The file vanishes from your folder. After you commit and push, it will vanish from GitHub too.

// The Full Workflow (The "Push" Step)
// Just typing the rm command isn't enough to update GitHub. You have to follow the standard Git cycle:

// Remove: git rm --cached secret.txt

// Commit: git commit -m "Removed secret file from tracking"

// Push: git push origin main


// Remove from GitHub ONLY (Keep on your Computer)
// This is the "Safety" command. Use this if you accidentally pushed something (like a .env file or a node_modules folder) that should be private but you still need it locally.

// Bash

// git rm --cached filename.txt
// What happens: The file stays on your computer, but Git "forgets" it. When you push, it will be deleted from the GitHub repository.


// Removing Folders (Directories)
// If you try to remove a folder with just git rm, it will fail. You must add the -r (recursive) flag.

// Delete folder everywhere: git rm -r folder_name
    
// Delete folder from GitHub only (keep locally): git rm -r --cached folder_name

// Command	Deletes Local File?	Deletes GitHub File?
// rm file.txt (Standard terminal)	Yes	No (Git will just show it as "deleted")
// git rm file.txt	Yes	Yes (after push)
// git rm --cached file.txt	No	Yes (after push)


// Command	                What it actually does
// git status	            Shows what files have been changed but not saved.
// git log	                Shows a history of all your "snapshots" (commits).
// git pull	                Downloads the latest changes from GitHub to your PC.
// git checkout -b name	    Creates a new branch so you can experiment safely.
// git merge name	        Combines changes from one branch into another.