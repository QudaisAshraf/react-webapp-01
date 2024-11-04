pipeline {
    agent any
    triggers {
        cron('* * * * *')  // Checks for code updates every minute
    }
    environment {
        EMAIL_RECIPIENT = 'qudaisa.cs@gmail.com'
    }
    stages {
        stage('Pull') {
            steps {
                git url: 'https://github.com/QudaisAshraf/react-webapp-01.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    // Install dependencies and build the React app
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Placeholder for Test stage
                    echo "No tests available"
                }
            }
        }
        stage('Deploy') {
            steps {
                input message: 'Approve deployment?', ok: 'Deploy'
                script {
                    // Docker commands to build and deploy the React app
                    sh 'docker build -t react-app-image .'
                    sh 'docker run -d -p 3000:3000 --name react-app react-app-image'
                }
            }
        }
    }
    post {
        
        success {
            mail bcc: '', body: 'The Jenkins job completed successfully.', cc: '', from: 'pc19486.qudais@gmail.com', replyTo: '', subject: 'Jenkins Job Success', to: "${env.EMAIL_RECIPIENT}"
        }
        failure {
            mail bcc: '', body: 'The Latest Jenkins job failed. Please check the logs for details.', cc: '', from: 'pc19486.qudais@gmail.com', replyTo: '', subject: 'Jenkins Job Failed', to: "${env.EMAIL_RECIPIENT}"
        }
    }
}
