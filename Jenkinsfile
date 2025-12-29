pipeline {
    agent any

    tools {
        nodejs 'node-18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run App Check') {
            steps {
                sh 'node -c server.js'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                pm2 delete simple-node-api || true
                pm2 start server.js --name simple-node-api
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Node.js app deployed successfully'
        }
        failure {
            echo '❌ Build failed'
        }
    }
}
