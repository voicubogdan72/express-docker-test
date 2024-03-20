pipeline{
    agent any

    stages{
        stage("Clone the repo"){
            steps{
                git branch:'main', url:'https://github.com/voicubogdan72/express-docker-test.git'
            }
        }
        // stage("Run containers"){
        //     steps{
        //         sh 'docker compose up -d'
        //     }
        // }

        stage("Install Depende"){
            steps{
                sh 'npm install'
            }
        }

        stage("Build App"){
            steps{
                sh 'npm run build'
            }
        }
        stage("Run App"){
            steps{
                sh "npm run start"
            }
        }
    }
}