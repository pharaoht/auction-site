git add .

echo 'Enter the commit message:'
read commitMessage

git commit -m "$commitMessage"

export branch ="master"

git push origin $branch

read
exit