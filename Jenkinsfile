pipeline {
    agent { docker { image 'node:lts-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
		sh '''
		npm run build
		cd dist
		git init
		git remote add origin https://github.com/marvinh/portfolio.git
		git add .
		git commit -m “distributable”
		git push --force origin master
		cd ..
		rm -r -f dist
		'''
            }
        }
    }
}
