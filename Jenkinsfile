pipeline {
    //Donde se va a ejecutar el Pipeline
    agent {
        label 'Slave_Induccion'
    }

    triggers {
        pollSCM('* * * * *')
    }

    //Una sección que define las herramientas preinstaladas en Jenkins
    tools {
        jdk 'JDK8_Centos' //Verisión preinstalada en la Configuración del Master
    }

    //Aquí comienzan los items del Pipeline
    stages {
        stage('Checkout') {
            steps {
                echo '------------>Checkout<------------'
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/master']],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    gitTool: 'Default',
                    submoduleCfg: [],
                    userRemoteConfigs: [[
                        credentialsId: 'GitHub_anderson.perez',
                        url:'https://github.com/ceibaap2021/ADN-RentaCarros'
                    ]]
                ])
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        // stage('Tests') {
        //     steps {
        //         echo '------------>Test Frontend<------------'
        //             sh 'npm run test'
        //     }
        // }

        // stage('Static Code Analysis') {
        //     steps {
        //         echo '------------>Analisis de código estático<------------'
        //         withSonarQubeEnv('Sonar') {
        //             sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner"
        //         }
        //     }
        // }

        stage('Build') {
            steps {
                sh 'npm run build --prod'
            }
        }
    }

    post {
        always {
            echo 'This will always run'
            cleanWs()
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            mail(
        to: 'anderson.perez@ceiba.com.co',
        body: "Something is wrong with ${env.BUILD_URL}",
        subject: "Failed Pipeline:${currentBuild.fullDisplayName}"
      )
        }
    }
}
