pipeline {
    agent any

    environment {
        IMAGE_NAME = "simple-node-api"
        CONTAINER_NAME = "simple-node-api"
        PORT = "3000"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker rm -f $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                docker run -d \
                  --name $CONTAINER_NAME \
                  -p $PORT:$PORT \
                  $IMAGE_NAME
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Docker deployment successful'
        }
        failure {
            echo '❌ Docker deployment failed'
        }
    }
}
