pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t florenza-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop florenza || true
                docker rm florenza || true
                docker run -d -p 80:3000 --name florenza florenza-app
                '''
            }
        }

    }
}