pipeline{
    agent any

    stages{
        stage("Clone the repo"){
            steps{
                git branch:'main', url:'https://github.com/voicubogdan72/express-docker-test.git'
            }
        }
        stage("Run containers"){
            steps{
                sh 'docker compose up -d'
            }
        }
    }
}