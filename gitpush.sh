git add .

echo 'Enter the commit message:'
read commitMessage

git commit -m "$commitMessage"

MY_BRANCH = 'master'
read MY_BRANCH 

git push origin $MY_BRANCH 

read