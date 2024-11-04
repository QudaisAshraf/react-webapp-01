pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'react-webapp:latest' // Name your Docker image
    }
    
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/QudaisAshraf/react-webapp-01.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove the existing container if it's running
                    sh '''
                    if [ $(docker ps -aq -f name=react-app) ]; then
                        docker rm -f react-app
                    fi
                    '''
                    // Run the new container
                    sh 'docker run -d -p 3000:3000 --name react-app $DOCKER_IMAGE'
                }
            }
        }
    }
    post {
        success {
            script {
                // Send email notification for successful build
                emailext(
                    subject: "SUCCESS: Build Successful for ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                    body: "Good job! The build was successful.\n\nCheck it out at ${env.BUILD_URL}",
                    to: 'qudaisa.cs@gmail.com' // Replace with your email
                )
            }
        }
        failure {
            script {
                // Send email notification for failed build
                emailext(
                    subject: "FAILURE: Build Failed for ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                    body: "Unfortunately, the build has failed.\n\nPlease check the details at ${env.BUILD_URL}",
                    to: 'qudaisa.cs@gmail.com' // Replace with your email
                )
            }
        }
        
        always {
            echo 'Cleaning up...'
            // Remove unused images and dangling volumes to save space
            sh 'docker system prune -f'
        }
    }
}
