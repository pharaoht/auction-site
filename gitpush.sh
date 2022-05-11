git add .

echo 'Enter the commit message:'
read commitMessage

git commit -m "$commitMessage"

branch = 'master'
read branch

git push origin $branch

read