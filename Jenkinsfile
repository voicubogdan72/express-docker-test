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

        stage('Build app without docker'){
            steps{
                sh 'npm install && npm run build'
            }
        }
        stage('Run app'){
            steps{
                sh 'npm start'
            }
        }

        stage('Build docker image'){
            steps{
                sh 'docker build -t api .'
            }
        }
        stage('Run docker image'){
            steps{
                sh 'docker run  -d -p 7777:7777 api'
            }
        }

        // stage('Build docker image'){
        //     steps{
        //         script{
        //             docker.build("api:${env.BUILD_ID}")
        //         }
        //     }
        // }
        // stage('Run container in docker'){
        //     steps{
        //         script{
        //             docker.image("api:${env.BUILD_ID}").run('-d -p 7777:7777')
        //         }
        //     }
        // }

        // stage("Install dep"){
        //     steps{
        //         sh 'npm install'
        //     }
        // }
        // stage('Run app'){
        //     steps{
        //         sh "npm run dev"
        //     }
        // }

        // stage("Docker build"){
        //     steps{
        //         sh 'docker build -t api .'
        //     }
        // }

        // stage("Run docker"){
        //     steps{
        //         sh 'docker run -d -p 8888:7777 api'
        //     }
        // }

        // stage("Install Depende"){
        //     steps{
        //         sh 'npm install'
        //     }
        // }

        // stage("Build App"){
        //     steps{
        //         sh 'npm run build'
        //     }
        // }
        // stage("Run App"){
        //     steps{
        //         sh "npm run start"
        //     }
        // }
    }
}