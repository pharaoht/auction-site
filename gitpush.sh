git add .

echo 'Enter the commit message:'
read commitMessage

git commit -m "$commitMessage"

export branch ="hello stackoverflow"
read branch

git push origin $branch

read
exit